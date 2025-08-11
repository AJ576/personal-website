import { Linkedin, Github, Mail } from "lucide-react";
import Projects from "@/components/project";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Unadat",
      location: "New York, NY",
      duration: "July 2025 – Present",
      responsibilities: [
        "Developed backend APIs and server-side logic using JavaScript and PHP to support product features",
        "Assisted in sprint planning, standups, and Agile coordination in a PM capacity to streamline team collaboration"
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
    },
    {
      title: "AI4ALL Fellow – Supervised Learning Team",
      company: "AI4ALL",
      location: "New York, NY",
      duration: "Nov 2024 – Mar 2025",
      responsibilities: [
        "Led data preprocessing and model training for a brain tumor classification project using CNNs",
        "Deployed model via Streamlit App for real-time inference",
        "Engaged with AI professionals to explore ethical and practical applications of machine learning"
      ]
    }
  ];

  const projects = [
    {
      name: 'SitRight – Posture Detection App',
      content: 'Built a real-time posture monitoring system by integrating MediaPipe and OpenCV to extract body keypoints. Trained a TensorFlow Sequential Neural Network achieving 87% accuracy to provide feedback.',
      link: 'https://github.com/AJ576/SitRight',
      technologies: 'TensorFlow, OpenCV, MediaPipe, WebSockets'
    },
    {
      name: 'MLB Play Prediction',
      content: 'Engineered a Random Forest model to predict baseball pitch outcomes using 10 years of historical data. Achieved 91% accuracy with the test dataset and deployed as a Vertex AI endpoint.',
      link: 'https://github.com/AJ576/MLB-Prediction',
      technologies: 'Google Cloud, Vertex AI, scikit-learn, Flask'
    },
    {
      name: 'Brain Tumor Classifier',
      content: 'Implemented a CNN in PyTorch for multi-class brain tumor detection from MRI scans. Boosted accuracy from 60% to 85% through cyclical learning rate scheduling and data augmentation.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
      demo: 'https://braintumorclassifier.streamlit.app/',
      technologies: 'PyTorch, Seaborn, Streamlit'
    },
    {
      name: 'UpLift – Mental Wellness Platform',
      content: 'Developed a journaling and anonymous mood-sharing app with full-stack TypeScript and Supabase. Enabled mood streak tracking, CRUD journaling, and built-in toxicity filtering.',
      link: 'https://github.com/UpLift-CodePath-Web103/Uplift',
      demo: 'https://uplift-codepath.netlify.app/',
      technologies: 'Next.js, TypeScript, Supabase, shadcn/ui'
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
            <div className="max-w-2xl">
              <h1 className="text-5xl font-extrabold mb-4">Aditya Jha</h1>
              <p className="text-lg font-medium text-gray-200 mb-6">
                Software Engineering Intern | CS Student at CCNY | AI & ML Enthusiast
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
              I love building things ranging from full-fledged ML applications like a Brain Tumor classifier
              and a Posture detection app to quirky things like a RAG tool that knows bash like the back of its metaphorical hand (currently a WIP).<br />
              Currently I am deep into Machine Learning and RAGs and want to master them.
              On the side, I love fiddling with full stack dev.<br />
              I also enjoy reading Science Fiction (please read <em>Blindsight</em>), playing some <em>Breath of the Wild</em> on the Switch, and Squash in the real world.
            </p>
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

          {/* Experience Section */}
          <section id="experience" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  My journey in the tech industry, from internships to mentorship programs
                </p>
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
              
              {/* Future experiences placeholder */}
              <div className="text-center mt-12">
                <div className="inline-block bg-gray-100 rounded-lg px-6 py-3">
                  <p className="text-gray-600 font-medium">More experiences coming soon...</p>
                </div>
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
