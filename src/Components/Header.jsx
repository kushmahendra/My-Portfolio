import React, { useRef } from 'react';
import Home from './Home'; 
import Skills from './Skills'; 
import Projects from './Projects'; 
import Contact from './Contact'; 

const Header = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-[#10002B] w-full">
        <nav className="border border-blue-950 flex flex-wrap items-center justify-between text-white py-3 px-8 sm:px-16 md:px-18 lg:px-20">
          <a href="#home" onClick={() => scrollToSection(homeRef)}>
            <img src="/Logo.png" alt="Mahendra's Logo" className="animate-pulse w-4 md:w-8 lg:w-10 sm:w-6" />
          </a>
          <div className="flex flex-wrap gap-4 sm:gap-10 md:gap-14 lg:gap-24 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
            <button onClick={() => scrollToSection(homeRef)} className="cursor-pointer" aria-label="Scroll to Home">Home</button>
            <button onClick={() => scrollToSection(skillsRef)} className="cursor-pointer" aria-label="Scroll to Skills">Skills</button>
            <button onClick={() => scrollToSection(projectsRef)} className="cursor-pointer" aria-label="Scroll to Projects">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="cursor-pointer" aria-label="Scroll to Contact">Contact</button>
          </div>
        </nav>
      </header>

      <main>
        <section ref={homeRef} id="home" aria-labelledby="home-section">
          <Home />
        </section>
        <section ref={skillsRef} id="skills" aria-labelledby="skills-section">
          <Skills />
        </section>
        <section ref={projectsRef} id="projects" aria-labelledby="projects-section">
          <Projects />
        </section>
        <section ref={contactRef} id="contact" aria-labelledby="contact-section">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Header;
