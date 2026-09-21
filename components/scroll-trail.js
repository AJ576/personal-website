"use client";

import { useEffect, useRef } from "react";

const CELL = 4; // px per glider cell
const STRIP = 24; // total height of the strip; keep --trail-h in step
const LANE_Y = 11; // vertical centre of the near lane
const BOB = 2; // how far the glider rises and falls
const LIFE = 4.5; // seconds before a cell fades out completely
const MAX_DOTS = 260;

/* two lanes at different speeds and weights, so the trail has depth */
const LANES = [
  { dy: 0, speed: 54, size: 4, alpha: 0.5, every: 0.13 },
  { dy: 5, speed: 34, size: 3, alpha: 0.24, every: 0.22 },
];

/* the four phases of a Conway glider, in a 3x3 box */
const GLIDER = [
  [".O.", "..O", "OOO"],
  ["O.O", ".OO", ".O."],
  ["..O", "O.O", ".OO"],
  ["O..", ".OO", "OO."],
].map((frame) => {
  const cells = [];
  frame.forEach((row, y) => {
    row.split("").forEach((char, x) => {
      if (char === "O") cells.push([x, y]);
    });
  });
  return cells;
});

export default function ScrollTrail({ sprite = null }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let motionOK = !motionQuery.matches;

    let width = 0;
    let ink = [20, 25, 32];
    let accent = [179, 52, 99];

    let progress = 0; // eased position, what we draw
    let target = 0; // raw scroll position
    let scrolling = false;
    let lastScroll = -Infinity;
    let clock = 0;
    let gliderFrame = 0;
    let gliderTimer = 0;
    let emitted = 0;

    const timers = LANES.map(() => 0);
    const dots = [];

    let spriteImg = null;
    if (sprite) {
      const img = new Image();
      img.src = sprite;
      img.onload = () => {
        spriteImg = img;
      };
    }

    const readColor = (value, fallback) => {
      const hex = String(value || "").trim().replace("#", "");
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
    };

    const readTheme = () => {
      const styles = getComputedStyle(document.documentElement);
      ink = readColor(styles.getPropertyValue("--ink"), ink);
      accent = readColor(styles.getPropertyValue("--accent"), accent);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.round(STRIP * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };

    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = max > 40 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    readTheme();
    resize();
    measure();
    progress = target;

    const riderW = CELL * 3;
    const bobAt = () => (motionOK ? Math.sin(clock * 1.7) * BOB : 0);

    const draw = () => {
      ctx.clearRect(0, 0, width, STRIP);

      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        const fade = 1 - dot.age / LIFE;
        if (fade <= 0) continue;
        const color = dot.accent ? accent : ink;
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${
          dot.alpha * fade * fade
        })`;
        ctx.fillRect(dot.x, dot.y, dot.size, dot.size);
      }

      const riderX = progress * (width - riderW);
      const riderY = LANE_Y - riderW / 2 + bobAt();

      if (spriteImg) {
        const h = riderW * 1.6;
        const w = (spriteImg.width / spriteImg.height) * h;
        ctx.drawImage(spriteImg, riderX, LANE_Y - h / 2 + bobAt(), w, h);
        return;
      }

      ctx.fillStyle = `rgba(${ink[0]}, ${ink[1]}, ${ink[2]}, 0.85)`;
      const cells = GLIDER[gliderFrame % GLIDER.length];
      for (let i = 0; i < cells.length; i += 1) {
        ctx.fillRect(
          riderX + cells[i][0] * CELL,
          riderY + cells[i][1] * CELL,
          CELL,
          CELL
        );
      }
    };

    let last = performance.now();
    let raf = 0;

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;

      clock += dt;
      progress += (target - progress) * Math.min(1, dt * 11);
      scrolling = now - lastScroll < 400;

      if (motionOK) {
        gliderTimer += dt;
        if (gliderTimer > 0.12) {
          gliderTimer = 0;
          gliderFrame += 1;
        }

        const riderX = progress * (width - riderW);
        const bob = bobAt();

        /* cells keep streaming off the back whether or not you scroll,
           just a little denser while you do */
        for (let lane = 0; lane < LANES.length; lane += 1) {
          const spec = LANES[lane];
          timers[lane] += dt;
          const interval = scrolling ? spec.every * 0.55 : spec.every;
          if (timers[lane] >= interval && dots.length < MAX_DOTS) {
            timers[lane] = 0;
            emitted += 1;
            dots.push({
              x: riderX,
              y: LANE_Y + spec.dy - spec.size / 2 + bob,
              size: spec.size,
              alpha: spec.alpha,
              speed: spec.speed,
              accent: lane === 0 && emitted % 9 === 0,
              age: 0,
            });
          }
        }

        for (let i = dots.length - 1; i >= 0; i -= 1) {
          const dot = dots[i];
          dot.x -= dot.speed * dt;
          dot.age += dt;
          if (dot.age >= LIFE || dot.x < -dot.size) dots.splice(i, 1);
        }
      } else if (dots.length) {
        dots.length = 0;
      }

      draw();
    };

    raf = requestAnimationFrame(frame);

    const onScroll = () => {
      measure();
      lastScroll = performance.now();
    };

    const onResize = () => {
      resize();
      measure();
    };

    const onMotion = (event) => {
      motionOK = !event.matches;
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(document.body);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    motionQuery.addEventListener("change", onMotion);
    themeQuery.addEventListener("change", readTheme);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      motionQuery.removeEventListener("change", onMotion);
      themeQuery.removeEventListener("change", readTheme);
    };
  }, [sprite]);

  return (
    <div className="trail" style={{ height: STRIP }} aria-hidden="true">
      <canvas className="trail__canvas" ref={canvasRef} />
    </div>
  );
}