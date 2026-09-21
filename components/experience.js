export default function Experience({
  title,
  company,
  location,
  duration,
  responsibilities = [],
}) {
  return (
    <article className="tl-row">
      <div className="tl-when">{duration}</div>

      <div className="tl-body">
        <h3 className="tl-role">{title}</h3>
        <p className="tl-org">
          {company}
          {location ? <span className="tl-place">, {location}</span> : null}
        </p>

        {responsibilities.length > 0 && (
          <ul className="tl-list">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}