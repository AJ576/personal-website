import Image from "next/image";
import Header from "@/components/header";
import Projects from "@/components/project";
export default function Home() {


  const projects = [
    {
      name: 'Portfolio Website',
      content: 'A personal portfolio to showcase my work and skills.',
      link: 'https://example.com',
    },
    {
      name: 'Machine Learning Model',
      content: 'A CNN model for brain tumor classification.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
    },
    {
      name: 'Machine Learning Model',
      content: 'A CNN model for brain tumor classification.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
    },
    {
      name: 'Machine Learning Model',
      content: 'A CNN model for brain tumor classification.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
    },
    {
      name: 'Machine Learning Model',
      content: 'A CNN model for brain tumor classification.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
    },
    {
      name: 'Machine Learning Model',
      content: 'A CNN model for brain tumor classification.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
    },
    {
      name: 'Machine Learning Model',
      content: 'A CNN model for brain tumor classification.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
    },
    {
      name: 'Machine Learning Model',
      content: 'A CNN model for brain tumor classification.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
    },
    {
      name: 'Machine Learning Model',
      content: 'A CNN model for brain tumor classification.',
      link: 'https://github.com/AJ576/BRAIN_TUMOR_CLASSIFIER',
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



          <section id="hero" className='flex flex-col items-center bg-gray-50 px-6 '>
            <h1 className="text-4xl text-blue-300 font-bold">Aditya Jha</h1>
            
            <p>Hello There! I'm glad to see you here!</p>
          </section>

          <section id = 'about' className="flex flex-col items-center bg-gray-50 py-12 px-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Who Am I?</h1>
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
              <p className="text-lg  text-gray-600 py-5">Here are some projects I've worked on...</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-lg">Feel free to reach out via email or social media!</p>
              <p>LInkedin</p>
              <p>Github</p>
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
