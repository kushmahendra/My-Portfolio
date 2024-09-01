import React, { useRef } from 'react';
import Home from './Home'; 
import Skills from './Skills'; 
import Projects from './Projects'; 
import Contact from './Contact'; 

const Header = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

 
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-[#10002B] w-full">
        <div className="border border-blue-950 flex flex-wrap items-center justify-between text-white py-3 px-8 sm:px-16 md:px-18 lg:px-20">
       
          <img src="./public/Logo.png" alt="Logo" className="w-4 md:w-8 lg:w-10 sm:w-6" />

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 sm:gap-10 md:gap-14 lg:gap-24 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
            <h1 onClick={() => scrollToSection(homeRef)} className="cursor-pointer">Home</h1>
            <h1 onClick={() => scrollToSection(skillsRef)} className="cursor-pointer">Skills</h1>
            <h1 onClick={() => scrollToSection(projectsRef)} className="cursor-pointer">Projects</h1>
            <h1 onClick={() => scrollToSection(contactRef)} className="cursor-pointer">Contact</h1>
          </div>
        </div>
      </div>

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Header;
