import { Github, Globe } from "lucide-react";

export default function Projects({
  name,
  content,
  link,
  demo = null,
  technologies = null,
}) {
  const stack = technologies
    ? technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  return (
    <article className="card">
      <h3 className="card__title">{name}</h3>
      <p className="card__body">{content}</p>

      {stack.length > 0 && (
        <ul className="stack" aria-label="Built with">
          {stack.map((item) => (
            <li key={item} className="stack__item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {(link || demo) && (
        <div className="card__links">
          {link && (
            <a
              className="link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github aria-hidden="true" />
              Source
            </a>
          )}

          {demo && (
            <a
              className="link"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe aria-hidden="true" />
              Live demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}