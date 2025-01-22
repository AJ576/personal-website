import Image from "next/image";
import Header from "@/components/header";
import Projects from "@/components/project";
export default function Home() {


  const projects = [
    {
      img: 'https://via.placeholder.com/300',
      name: 'Portfolio Website',
      content: 'A personal portfolio to showcase my work and skills.',
      link: 'https://example.com',
    },
    {
      img: 'https://via.placeholder.com/300',
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



          <section id="hero" className=''>
            <h1 className="">Hi, I'm Aditya Jha</h1>
            <img alt="name" src="public/vercel.svg" className="h-36 w-36 rounded-full object-none object-[59%_-4px]" />
            <p>Welcome to my personal website!</p>
          </section>

          <section id="about" className="min-h-screen py-16 bg-gray-100">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6 vol text-black">About Me</h2>
              <p className="text-black">Hi! I’m a Computer Science major at the City College of New York (CUNY), with a passion for data science and machine learning, particularly in Convolutional Neural Networks (CNNs). I thrive on solving complex problems and tackling challenges, driven by a strong desire to continuously learn and grow.

                Beyond academics, I enjoy building simulations, developing small games.  When I’m not coding, you can find me playing squash, jogging, or reading science fiction.

                I’m excited about the ever-evolving field of Artificial Intelligence and Machine Learning and am eager to make meaningful contributions to its future.
              </p>
            </div>
          </section>

          <section id="portfolio">
            <h2>My Work</h2>
            <p>Here are some projects I've worked on...</p>
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
        
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out via email or social media!</p>
          </section>

        
      </div>

  );
}
