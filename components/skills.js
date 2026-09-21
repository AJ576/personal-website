const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "Python", "JavaScript", "TypeScript", "SQL", "PHP", "R"],
  },
  {
    title: "Machine learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "MediaPipe",
      "CNNs",
      "Computer vision",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Flask", "FastAPI", "Streamlit"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML/CSS"],
  },
  {
    title: "Infrastructure",
    skills: [
      "Docker",
      "Linux",
      "POSIX",
      "CI/CD",
      "Google Cloud Platform",
      "AWS",
      "Vercel",
    ],
  },
  {
    title: "Data stores",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "BigQuery",
    ],
  },
  {
    title: "Tooling",
    skills: [
      "Git",
      "GitHub",
      "CMake",
      "VS Code",
      "Jupyter",
      "Postman",
      "Google Colab",
      "Linear",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Skills</h2>
          <p className="section__lede">
            What I reach for, roughly in order of how often I use it.
          </p>
        </div>

        <div className="skills-table">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-row">
              <h3 className="skill-row__name">{category.title}</h3>
              <ul className="skill-row__items">
                {category.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}