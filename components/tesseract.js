"use client";

import { useEffect, useRef, useState } from "react";

/* 16 vertices of a 4-cube: every combination of ±1 */
const VERTS = Array.from({ length: 16 }, (_, i) => [
  i & 1 ? 1 : -1,
  i & 2 ? 1 : -1,
  i & 4 ? 1 : -1,
  i & 8 ? 1 : -1,
]);

/* 32 edges: vertices that differ in exactly one coordinate */
const EDGES = [];
for (let i = 0; i < 16; i += 1) {
  for (let bit = 0; bit < 4; bit += 1) {
    const j = i ^ (1 << bit);
    if (j > i) EDGES.push([i, j]);
  }
}

const FALLBACK_INK = [20, 25, 32];
const FALLBACK_ACCENT = [179, 52, 99];

function readColor(value, fallback) {
  const hex = String(value || "")
    .trim()
    .replace("#", "");

  if (hex.length === 3) {
    return [
      parseInt(hex[0] + hex[0], 16),
      parseInt(hex[1] + hex[1], 16),
      parseInt(hex[2] + hex[2], 16),
    ];
  }

  if (hex.length === 6) {
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
    ];
  }

  return fallback;
}

const rgba = (c, a) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;
const mix = (a, b, t) => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

export default function Tesseract() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    /* ---- environment ---- */
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let motionOK = !motionQuery.matches;
    let visible = true;
    let width = 0;
    let height = 0;

    const palette = { ink: FALLBACK_INK, accent: FALLBACK_ACCENT };
    const readPalette = () => {
      const styles = getComputedStyle(document.documentElement);
      palette.ink = readColor(styles.getPropertyValue("--ink"), FALLBACK_INK);
      palette.accent = readColor(
        styles.getPropertyValue("--accent"),
        FALLBACK_ACCENT
      );
    };
    readPalette();

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    /* ---- simulation state ---- */
    const angles = { xw: 0.45, yz: 0.2, zw: 0, xz: 0.7 };
    const spin = { x: 0, y: 0 };
    const pointer = { x: 0, y: 0, inside: false };
    const drag = { active: false, x: 0, y: 0 };

    const ox = new Float32Array(16); // spring offset
    const oy = new Float32Array(16);
    const vx = new Float32Array(16); // spring velocity
    const vy = new Float32Array(16);

    const nx = new Float32Array(16); // projected, pre-fit
    const ny = new Float32Array(16);
    const sx = new Float32Array(16); // final screen position
    const sy = new Float32Array(16);
    const depth = new Float32Array(16); // perspective scale
    const wDepth = new Float32Array(16); // position along the 4th axis

    let last = performance.now();
    let raf = 0;

    const step = (dt) => {
      if (motionOK) {
        angles.xw += dt * 0.26;
        angles.yz += dt * 0.16;
        angles.zw += dt * 0.1;
      }

      angles.xz += spin.x * dt;
      angles.yz += spin.y * dt;

      const decay = Math.exp(-2.8 * dt);
      spin.x *= decay;
      spin.y *= decay;

      const cxw = Math.cos(angles.xw);
      const sxw = Math.sin(angles.xw);
      const cyz = Math.cos(angles.yz);
      const syz = Math.sin(angles.yz);
      const czw = Math.cos(angles.zw);
      const szw = Math.sin(angles.zw);
      const cxz = Math.cos(angles.xz);
      const sxz = Math.sin(angles.xz);

      for (let i = 0; i < 16; i += 1) {
        let x = VERTS[i][0];
        let y = VERTS[i][1];
        let z = VERTS[i][2];
        let w = VERTS[i][3];

        let t = x * cxw - w * sxw;
        w = x * sxw + w * cxw;
        x = t;

        t = y * cyz - z * syz;
        z = y * syz + z * cyz;
        y = t;

        t = z * czw - w * szw;
        w = z * szw + w * czw;
        z = t;

        t = x * cxz - z * sxz;
        z = x * sxz + z * cxz;
        x = t;

        /* 4D -> 3D, then 3D -> 2D, both with perspective */
        const k4 = 3.1 / (3.1 - w);
        const z3 = z * k4;
        const k3 = 4.4 / (4.4 - z3);

        nx[i] = x * k4 * k3;
        ny[i] = y * k4 * k3;
        depth[i] = k4 * k3;
        wDepth[i] = w;
      }

      /* fixed scale: the projection's own swell is the point, so don't
         normalise it away. 0.112 keeps the widest frame clear of the edge. */
      const fit = Math.min(width, height) * 0.112;

      const cx = width / 2;
      const cy = height / 2;
      const reach = Math.min(width, height) * 0.3;
      const maxOffset = Math.min(width, height) * 0.09;

      for (let i = 0; i < 16; i += 1) {
        sx[i] = cx + nx[i] * fit + ox[i];
        sy[i] = cy + ny[i] * fit + oy[i];

        if (!motionOK) continue;

        /* spring back to rest, plus a shove from the cursor */
        let fx = -110 * ox[i] - 11 * vx[i];
        let fy = -110 * oy[i] - 11 * vy[i];

        if (pointer.inside) {
          const dx = sx[i] - pointer.x;
          const dy = sy[i] - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < reach && dist > 0.5) {
            const push = (1 - dist / reach) * 3200;
            fx += (dx / dist) * push;
            fy += (dy / dist) * push;
          }
        }

        vx[i] += fx * dt;
        vy[i] += fy * dt;
        ox[i] = clamp(ox[i] + vx[i] * dt, -maxOffset, maxOffset);
        oy[i] = clamp(oy[i] + vy[i] * dt, -maxOffset, maxOffset);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      let dMin = Infinity;
      let dMax = -Infinity;
      let wMin = Infinity;
      let wMax = -Infinity;

      for (let i = 0; i < 16; i += 1) {
        if (depth[i] < dMin) dMin = depth[i];
        if (depth[i] > dMax) dMax = depth[i];
        if (wDepth[i] < wMin) wMin = wDepth[i];
        if (wDepth[i] > wMax) wMax = wDepth[i];
      }

      const dSpan = dMax - dMin || 1;
      const wSpan = wMax - wMin || 1;

      for (let e = 0; e < EDGES.length; e += 1) {
        const a = EDGES[e][0];
        const b = EDGES[e][1];
        const t = ((depth[a] + depth[b]) / 2 - dMin) / dSpan;

        ctx.strokeStyle = rgba(palette.ink, 0.1 + t * 0.4);
        ctx.lineWidth = 0.7 + t * 1.1;
        ctx.beginPath();
        ctx.moveTo(sx[a], sy[a]);
        ctx.lineTo(sx[b], sy[b]);
        ctx.stroke();
      }

      for (let i = 0; i < 16; i += 1) {
        const t = (depth[i] - dMin) / dSpan;
        const near = (wDepth[i] - wMin) / wSpan;
        const color = mix(palette.ink, palette.accent, near);

        ctx.shadowBlur = near > 0.8 ? 14 : 0;
        ctx.shadowColor = rgba(palette.accent, 0.5);
        ctx.fillStyle = rgba(color, 0.3 + t * 0.6);
        ctx.beginPath();
        ctx.arc(sx[i], sy[i], 1.6 + t * 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;

      if (!visible || width === 0) return;

      const idle =
        !motionOK &&
        !drag.active &&
        Math.abs(spin.x) < 0.001 &&
        Math.abs(spin.y) < 0.001;
      if (idle) return;

      step(dt);
      draw();
    };
    raf = requestAnimationFrame(frame);

    /* ---- interaction ---- */
    const localPoint = (event) => {
      const rect = wrap.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onPointerDown = (event) => {
      drag.active = true;
      drag.x = event.clientX;
      drag.y = event.clientY;
      pointer.inside = true;
      localPoint(event);
      setTouched(true);
      if (wrap.setPointerCapture) wrap.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event) => {
      pointer.inside = true;
      localPoint(event);

      if (!drag.active) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      drag.x = event.clientX;
      drag.y = event.clientY;

      angles.xz += dx * 0.006;
      angles.yz += dy * 0.006;
      spin.x = clamp(dx * 0.22, -6, 6);
      spin.y = clamp(dy * 0.22, -6, 6);
    };

    const onPointerUp = (event) => {
      drag.active = false;
      if (event.pointerType !== "mouse") pointer.inside = false;
      if (wrap.releasePointerCapture && event.pointerId != null) {
        try {
          wrap.releasePointerCapture(event.pointerId);
        } catch {
          /* pointer already released */
        }
      }
    };

    const onPointerLeave = () => {
      pointer.inside = false;
      drag.active = false;
    };

    const onDoubleClick = () => {
      /* a poke: scatter every vertex, let the springs sort it out */
      for (let i = 0; i < 16; i += 1) {
        vx[i] += (Math.random() - 0.5) * 820;
        vy[i] += (Math.random() - 0.5) * 820;
      }
    };

    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerup", onPointerUp);
    wrap.addEventListener("pointercancel", onPointerUp);
    wrap.addEventListener("pointerleave", onPointerLeave);
    wrap.addEventListener("dblclick", onDoubleClick);

    /* ---- observers ---- */
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(wrap);

    const onMotionChange = (event) => {
      motionOK = !event.matches;
    };
    const onThemeChange = () => readPalette();

    motionQuery.addEventListener("change", onMotionChange);
    themeQuery.addEventListener("change", onThemeChange);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motionQuery.removeEventListener("change", onMotionChange);
      themeQuery.removeEventListener("change", onThemeChange);
      wrap.removeEventListener("pointerdown", onPointerDown);
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerup", onPointerUp);
      wrap.removeEventListener("pointercancel", onPointerUp);
      wrap.removeEventListener("pointerleave", onPointerLeave);
      wrap.removeEventListener("dblclick", onDoubleClick);
    };
  }, []);

  return (
    <div className="hero__figure" ref={wrapRef}>
      <canvas className="hero__canvas" ref={canvasRef} aria-hidden="true" />
      <span className="hero__hint" data-hidden={touched}>
        Drag to spin, double-click to shake
      </span>
    </div>
  );
}
