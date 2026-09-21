import { Linkedin, Github, Mail } from "lucide-react";
import Projects from "@/components/project";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Bloomberg",
      location: "New York, NY",
      duration: "Jun 2026 – Aug 2026",
      responsibilities: [
      "Built a C++ real-time data ingestion pipeline from scratch, parsing raw JSON from 5 vendors, normalizing messages into a common representation, and generating downstream market-data ticks",
      "Built a configuration-driven parser supporting vendor-specific message formats and multiple concurrent data channels per connection, enabling new parsing requirements without modifying core parser logic",
      "Designed a state machine for authentication, subscriptions, automatic reconnection, exponential backoff, and repeated connection retries",
      "Added comprehensive unit tests across parser functions and connection states, and implemented an observer-based monitoring system for logging and extensible alerting"
      ]
    },
    {
      title: "VSWEP Mentee",
      company: "Google x Basta",
      location: "New York, NY",
      duration: "Sep 2025 – May 2026",
    },
    {
      title: "Tech Fellow",
      company: "Break Through Tech x Cadence",
      location: "New York, NY",
      duration: "Sep 2025 – Dec 2025",
      responsibilities: [
        "Developed pipelines to analyze 25K+ candidate/job records, improving job-to-candidate matching accuracy",
        "Built text preprocessing services with normalization, tokenization, and REST API integration"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Unadat",
      location: "New York, NY",
      duration: "Jul 2025 – Aug 2025",
      responsibilities: [
        "Redesigned task management UI using JavaScript and integrated with optimized PHP backend APIs, improving usability for 100+ active users",
        "Implemented advanced search & filtering features, cutting average task retrieval time",
        "Extended platform from B2C into B2B markets by building a scalable terminology wrapper system, supporting new client onboarding"
      ]
    },
    {
      title: "Technology Mentee",
      company: "Accenture Career Catalyst",
      location: "New York, NY",
      duration: "Feb 2025 – May 2025",
      responsibilities: [
        "Selected for a competitive tech-focused consulting mentorship program led by Accenture professionals",
        "Built skills in software development and AI through weekly sessions with a software engineer and AI analyst",
        "Completed collaborative case studies under the guidance of Accenture consultants"
      ]
    }
  ];

  const projects = [
    {
      name: 'Real-Time 2D Physics Engine',
      content: 'Built a real-time rigid-body physics engine simulating 10,000+ circular bodies at a consistent 60 FPS with fixed-timestep integration. Implemented spatial grid broad-phase collision detection and impulse-based resolution, plus interactive controls for gravity, boundaries, and real-time FPS/energy visualization.',
      link: 'https://github.com/AJ576/physics_engine',
      technologies: 'C++17, SDL2, CMake'
    },
    {
      name: 'Unix Shell in C++',
      content: 'Engineered a Unix-like shell implementing process creation and execution via fork/execvp, with support for pipelines and I/O redirection. Designed a job control system using process groups and SIGCHLD handling, and built a robust parser supporting quotes, escapes, and multi-stage pipelines.',
      link: 'https://github.com/AJ576/shell',
      technologies: 'C++17'
    },
    {
      name: 'Cosmere Archivist – RAG System',
      content: 'Crawled and structured 6,000+ wiki documents into a cleaned dataset via an automated ETL pipeline with deduplication and embedding generation. Replaced brute-force search with FAISS semantic search, cutting query latency by 80%, and containerized the backend with Docker.',
      link: 'https://github.com/AJ576/loreGPT',
      technologies: 'Python, FastAPI, Next.js, Docker, FAISS, VectorDB, Gemini'
    },
    {
      name: 'SitRight – Posture Detection App',
      content: 'Built a real-time posture monitoring system by integrating MediaPipe and OpenCV to extract body keypoints. Trained a TensorFlow Sequential Neural Network achieving 87% accuracy to provide feedback.',
      link: 'https://github.com/AJ576/SitRight',
      technologies: 'TensorFlow, OpenCV, MediaPipe, WebSockets'
    }
  ];


  return (
    <div className="main">

          <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
            <nav className="flex justify-center space-x-6 py-4">
              <a href="#hero" className="hover:text-blue-400">Home</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#portfolio" className="hover:text-blue-400">Portfolio</a>
              <a href="#experience" className="hover:text-blue-400">Experience</a>
              <a href="#skills" className="hover:text-blue-400">Skills</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </nav>
          </header>



          <section
            id="hero"
            className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center min-h-screen px-6"
          >
            <div className="max-w-4xl">
              <h1 className="text-5xl font-extrabold mb-4">Aditya Jha</h1>
              <p className="text-lg font-medium text-gray-200 mb-6">
                Software Engineering Intern | CS Student at CCNY | Real-Time Systems & AI/ML Enthusiast
              </p>
              <div className="flex gap-4 justify-center">
              <a href="#about"><button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500">
                  Learn More
                </button></a>
              </div>
            </div>
          </section>

          <section id="about" className="flex flex-col items-center bg-gray-50 py-12 px-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4">About Me</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              Hello there! <br />
              My name is Aditya Jha, I am a Computer Science Major at CCNY.<br />
              I love building things ranging from full-fledged ML applications like a Posture detection app to quirky things like a RAG system that knows the Cosmere book universe like the back of its metaphorical hand.<br />
              Currently I am deep into Machine Learning and RAGs and want to master them, and I've also been getting really into real-time systems and distributed systems.
              On the side, I love fiddling with full stack dev.<br />
              I also enjoy reading Science Fiction (please read <em>Blindsight</em>), playing some <em>Breath of the Wild</em> on the Switch, and Squash in the real world.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  My journey in the tech industry
                </p>
              </div>

              {/* Forward-looking note */}
              <div className="text-center mb-10">
                <div className="inline-block bg-gray-100 rounded-lg px-6 py-3">
                  <p className="text-gray-600 font-medium">Always excited for what's next. More to come!</p>
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {experiences.map((experience, index) => (
                  <Experience
                    key={index}
                    title={experience.title}
                    company={experience.company}
                    location={experience.location}
                    duration={experience.duration}
                    responsibilities={experience.responsibilities}
                  />
                ))}
              </div>
            </div>
          </section>
                    <section id="portfolio" className="min-h-screen py-16 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">My Work</h2>
              <p className="text-lg text-gray-600 py-5">Here are some projects I've worked on...</p>
              <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project, index) => (
                  <Projects
                    key={index}
                    img={project.img}
                    name={project.name}
                    content={project.content}
                    link={project.link}
                    demo={project.demo}
                    technologies={project.technologies}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <Skills />

          {/*Technologies I know?*/}

          {/*Communites I am involved with?*/}
          <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Contact</h2>
              <p className="text-lg mb-6">Feel free to reach out via email, phone, or social media!</p>
              <div className="flex justify-center gap-6">
                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/aditya-jha777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black px-4 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600"
                >
                  <span className="bg-black p-2 rounded-full">
                    <Linkedin className="w-5 h-5 text-white" />
                  </span>
                  LinkedIn
                </a>

                {/* GitHub Button */}
                <a
                  href="https://github.com/AJ576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-900"
                >
                  <span className="bg-black p-2 rounded-full">
                    <Github className="w-5 h-5 text-white" />
                  </span>
                  GitHub
                </a>

                {/* Email Button */}
                <a
                  href="mailto:aditya.jha2020123@gmail.com"
                  className="flex items-center gap-2 text-black px-4 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-green-600"
                >
                  <span className="bg-black p-2 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </span>
                  Email
                </a>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white py-6">
            <div className="text-center">
              <p>© 2025 [Aditya Jha]. All Rights Reserved.</p>
            </div>
          </footer>
        
      </div>

  );
}