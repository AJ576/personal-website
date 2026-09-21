import { Linkedin, Github, Mail } from "lucide-react";
import Header from "@/components/header";
import Tesseract from "@/components/tesseract";
import ScrollTrail from "@/components/scroll-trail";
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
        "Added comprehensive unit tests across parser functions and connection states, and implemented an observer-based monitoring system for logging and extensible alerting",
      ],
    },
    {
      title: "VSWEP Mentee",
      company: "Google x Basta",
      location: "New York, NY",
      duration: "Sep 2025 – May 2026",
      responsibilities: [
        "Selected for a competitive mentorship program run by Basta",
        "Met weekly with Google engineers to develop my software engineering and problem-solving skills",
      ],
    },
    {
      title: "Tech Fellow",
      company: "Break Through Tech x Cadence",
      location: "New York, NY",
      duration: "Sep 2025 – Dec 2025",
      responsibilities: [
        "Developed pipelines to analyze 25K+ candidate/job records, improving job-to-candidate matching accuracy",
        "Built text preprocessing services with normalization, tokenization, and REST API integration",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Unadat",
      location: "New York, NY",
      duration: "Jul 2025 – Aug 2025",
      responsibilities: [
        "Redesigned task management UI using JavaScript and integrated with optimized PHP backend APIs, improving usability for 100+ active users",
        "Implemented advanced search & filtering features, cutting average task retrieval time",
        "Extended platform from B2C into B2B markets by building a scalable terminology wrapper system, supporting new client onboarding",
      ],
    },
    {
      title: "Technology Mentee",
      company: "Accenture Career Catalyst",
      location: "New York, NY",
      duration: "Feb 2025 – May 2025",
      responsibilities: [
        "Selected for a competitive tech-focused consulting mentorship program led by Accenture professionals",
        "Built skills in software development and AI through weekly sessions with a software engineer and AI analyst",
        "Completed collaborative case studies under the guidance of Accenture consultants",
      ],
    },
  ];

  const projects = [
    {
      name: "Real-Time 2D Physics Engine",
      content:
        "Built a real-time rigid-body physics engine simulating 10,000+ circular bodies at a consistent 60 FPS with fixed-timestep integration. Implemented spatial grid broad-phase collision detection and impulse-based resolution, plus interactive controls for gravity, boundaries, and real-time FPS/energy visualization.",
      link: "https://github.com/AJ576/physics_engine",
      technologies: "C++17, SDL2, CMake",
    },
    {
      name: "Unix Shell in C++",
      content:
        "Engineered a Unix-like shell implementing process creation and execution via fork/execvp, with support for pipelines and I/O redirection. Designed a job control system using process groups and SIGCHLD handling, and built a robust parser supporting quotes, escapes, and multi-stage pipelines.",
      link: "https://github.com/AJ576/shell",
      technologies: "C++17",
    },
    {
      name: "Cosmere Archivist – RAG System",
      content:
        "Crawled and structured 6,000+ wiki documents into a cleaned dataset via an automated ETL pipeline with deduplication and embedding generation. Replaced brute-force search with FAISS semantic search, cutting query latency by 80%, and containerized the backend with Docker.",
      link: "https://github.com/AJ576/loreGPT",
      technologies: "Python, FastAPI, Next.js, Docker, FAISS, VectorDB, Gemini",
    },
    {
      name: "SitRight – Posture Detection App",
      content:
        "Built a real-time posture monitoring system by integrating MediaPipe and OpenCV to extract body keypoints. Trained a TensorFlow Sequential Neural Network achieving 87% accuracy to provide feedback.",
      link: "https://github.com/AJ576/SitRight",
      technologies: "TensorFlow, OpenCV, MediaPipe, WebSockets",
    },
  ];

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        {/* Hero */}
        <section id="hero" className="hero">
          <div className="container hero__grid">
            <div className="hero__inner">
              <p className="hero__kicker">
                Computer science at City College of New York
              </p>

              <h1 className="hero__name">Aditya Jha</h1>

              <p className="hero__lede">
                I build systems that have to keep up: real-time data pipelines,
                physics engines, and retrieval systems that answer fast.
              </p>

              <div className="hero__actions">
                <a className="btn btn--solid" href="#portfolio">
                  See the work
                </a>
                <a
                  className="btn btn--quiet"
                  href="mailto:aditya.jha2020123@gmail.com"
                >
                  Email me
                </a>
              </div>

              <div className="hero__rule" />

              <p className="hero__now">
                Most recently a SWE intern at
                <b>Bloomberg</b> writing C++ market-data ingestion.
              </p>
            </div>

            <Tesseract />
          </div>
        </section>

        {/* About */}
        <section id="about" className="section section--panel">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">About</h2>
            </div>

            <div className="prose">
              <p>
                I&apos;m a computer science major at CCNY, 
                with minors in mathematics and philosophy, 
                who likes building things end to end. 
                At Bloomberg, I built a C++ real-time data ingestion pipeline 
                that turned raw vendor feeds into market-data ticks. 
                Outside of internships, I've worked on machine learning, computer vision,
                 accessibility, and quirkier projects like a retrieval system that knows the 
                 Cosmere like the back of its metaphorical hand.
              </p>
              <p>
                Right now, I&apos;m spending most of my time in C++, building
                around real-time and distributed systems, while playing around
                with machine learning and retrieval. I also build full stack
                projects when the idea calls for it.
              </p>
              <p>
                Away from the keyboard: science fiction (please read{" "}
                <em>Blindsight</em>), <em>Breath of the Wild</em> on the Switch,
                and <em>Squash</em> in the real world.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Experience</h2>
              <p className="section__lede">
                Internships, fellowships, and mentorships.
              </p>
            </div>

            <div className="timeline">
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

              <p className="timeline__note">
                Always excited for what&apos;s next.
              </p>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="portfolio" className="section section--panel">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Selected work</h2>
              <p className="section__lede">
                Side projects, mostly built to understand how something works
                from the inside.
              </p>
            </div>

            <div className="work-grid">
              {projects.map((project, index) => (
                <Projects
                  key={index}
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

        {/* Skills */}
        <Skills />

        {/* Contact */}
        <section id="contact" className="section section--panel">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Get in touch</h2>
              <p className="section__lede">
                Open to talk about interesting problems. Email is fastest.
              </p>
            </div>

            <div className="social">
              <a
                className="link"
                href="https://www.linkedin.com/in/aditya-jha777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin aria-hidden="true" />
                LinkedIn
              </a>
              <a
                className="link"
                href="https://github.com/AJ576"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github aria-hidden="true" />
                GitHub
              </a>
              <a className="link" href="mailto:aditya.jha2020123@gmail.com">
                <Mail aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>© {new Date().getFullYear()} Aditya Jha</span>
          <span>New York, NY</span>
        </div>
      </footer>
      <ScrollTrail />
    </div>
  );
}