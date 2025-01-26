import { Linkedin, Github, Mail } from "lucide-react";
import Projects from "@/components/project";
export default function Home() {


  const projects = [
    
    {
      name: 'Brain Tumor Detection Model',
      content: 'A CNN model that can identify presence of and classify a brain tumor in an MRI image',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
      demo: 'https://braintumorclassifier.streamlit.app/'
    },
    {
      name: 'Stellar objects detection model',
      content: 'A machine learning model that use Random Forests method to classify different stellar objects based on data avaialbale pubilcly by different observatories.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
    },
    {
      name: 'Quantum Portfolio Optimizer',
      content: 'Uses a quantum Computing algorithm known as VQE to look across many diffrent protfolios simulataneously and gerneates the best portfolio',
      link: 'https://github.com/AJ576/QBRAID-HAQATHON',
    },
    {
      name: 'UP-LIFT',
      content: 'A social media app that allows you to keep track of your emotional and mental health while also allowing the community to help you in your healing process.',
      link: 'https://github.com/UpLift-CodePath-Web103/Uplift',
      demo:'https://uplift-codepath.netlify.app/'
    },
    {
      name: 'Portfolio Website',
      content: 'A personal portfolio to showcase my work and skills.',
      link: 'https://github.com/AJ576/personal-website',
    },
    // Add more projects here
  ];


  return (
    <div className="main">

          <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
            <nav className="flex justify-center space-x-6 py-4">
              <a href="#hero" className="hover:text-blue-400">Home</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#portfolio" className="hover:text-blue-400">Portfolio</a>
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
                CS Major | Tech Enthusiast | Lifelong Learner
              </p>
              <p className="text-lg mb-6">
                Hello there! I'm glad to see you here! Let's explore, create, and inspire together.
              </p>
              <div className="flex gap-4 justify-center">
              <a href="#about"><button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500">
                  Learn More
                </button></a>
              </div>
            </div>
          </section>

          <section id = 'about' className="flex flex-col items-center bg-gray-50 py-12 px-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4">Who Am I?</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              Hi! I’m a Computer Science major at the City College of New York (CUNY), with a passion for
              <span className="  font-semibold"> data science</span> and
              <span className="  font-semibold"> machine learning</span>.
              I thrive on solving complex problems and tackling challenges, driven by a strong desire to
              continuously learn and grow. Beyond academics, I enjoy
              <span className="  font-semibold"> building simulations</span>,
              <span className="  font-semibold"> developing small games</span>, and exploring
              creative projects. When I’m not coding, you can find me
              <span className="  font-semibold"> playing squash</span>,
              <span className="  font-semibold"> jogging</span>, or
              <span className="  font-semibold"> reading science fiction</span>. I’m excited
              about the ever-evolving field of
              <span className="  font-semibold"> Artificial Intelligence and Machine Learning</span> and
              am eager to make meaningful contributions to its future.
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
                  />
                ))}
              </div>
            </div>
          </section>

          {/*Technologies I know?*/}

          {/*Communites I am involved with?*/}
          <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Contact</h2>
              <p className="text-lg mb-6">Feel free to reach out via email or social media!</p>
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
