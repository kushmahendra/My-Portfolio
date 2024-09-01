import React from 'react';

const Projects = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#10002B] text-white p-4
       md:p-8 lg:p-12">
        <div className="flex flex-col gap-2   w-full md:w-1/2">
          <h1 className="text-lg md:text-xl text-purple-500 lg:text-3xl font-bold">Featured Projects</h1>
          <h2 className="text-2xl  lg:text-2xl font-semibold">Real-Time Chat Web</h2>
          <p className="border border-white p-4
           rounded-lg text-sm md:text-base lg:text-lg">
            Built a secure, real-time chat application using React.js, featuring JWT authentication, 
            Google OAuth integration, message translation, real-time typing indicators, online status display, 
            and pagination for efficient message loading.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:ml-6 lg:ml-8 w-full md:w-1/2 flex justify-center items-center">
          <img src="./public/Chatweb1.png" alt="Project Image" className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </>
  );
};

export default Projects;
