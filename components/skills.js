export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "R", "SQL", "PHP", "C/C++"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Machine Learning & AI",
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "MediaPipe", "CNNs", "Computer Vision"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "HTML/CSS"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Flask", "FastAPI", "Streamlit"],
      color: "bg-teal-100 text-teal-800"
    },
    {
      title: "Cloud & DevOps",
      skills: ["Google Cloud Platform", "AWS", "Vercel", "Docker", "Linux"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Databases & Storage",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "Firebase"],
      color: "bg-pink-100 text-pink-800"
    },
    {
      title: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "Linear"],
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "Jupyter", "Postman", "Google Colab"],
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg hover:scale-102 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${category.color} hover:scale-105   transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
