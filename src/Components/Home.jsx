import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-[#10002B] text-white w-full px-2 md:px-8 lg:px-16">
        {/* Main container with responsive padding */}
        <div className="pt-10  flex  items-center md:flex-row md:items-start lg:justify-center">
          {/* Responsive image container */}
          <img
            src="/Me.png"
            alt="Profile"
            className="w-40 sm:w-52 md:w-60 lg:w-64 xl:w-72 mx-auto md:mx-0"
          />
          {/* Text container */}
          <div className="mt-10 md:mt- md:ml-6 px-2 py-3 border
           border-purple-600 rounded-md text-center md:text-left 
           w-full md:w-auto md:text-lg lg:text-xl">
            <h1 className="font-bold ">
              Hello! I Am <span className="text-purple-600">Mahendra</span>
            </h1>
            <p className="mt-2 ">
              A Front-End Developer  <br/>  who  turns ideas into
              <span className="text-purple-600"> reality</span>  
               by creating <br/> interactive and visually appealing 
              <span className="text-purple-600"> interfaces.</span>
            </p>
          </div>
        </div>
        {/* Introduction text section */}
        <div className="mt-10 border border-blue-900 px-6 py-8 text-center max-w-3xl mx-auto bg-[#1A1A2E] rounded-lg">
          <h1 className="text-2xl md:text-3xl font-semibold">I'm a Front-End Developer.</h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            I am passionate about crafting interactive and visually appealing user interfaces.
            I am eager to make a mark in the industry by bringing ideas to life through creativity and dedication.
            I am committed to learning and applying the latest front-end technologies to create intuitive digital experiences.
            Let's collaborate to transform ideas into engaging, user-friendly web applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
