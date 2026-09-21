const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Machine learning",
    skills: [
      "PyTorch",
      "OpenCV",
      "MediaPipe"
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "Streamlit"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React"],
  },
  {
    title: "Infrastructure",
    skills: [
      "Docker",
      "Linux",
      "POSIX",
      "Github Actions",
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
      "Supabase",
      "Firebase",
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
      "Jira",
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