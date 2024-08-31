import React from 'react';

const Header = () => {
  return (
    <>
      <div className="bg-[#10002B] w-full">
        <div className=" border border-blue-950 flex flex-wrap items-center justify-between
         text-white py-3 px-12 sm:px-16 md:px-20 lg:px-28">
          {/* Logo */}
          <img src="./public/Logo.png" alt="Logo"
           className="w-4 md:w-8 lg:w-10 sm:w-6" />

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 sm:gap-12 md:gap-16 lg:gap-32
           text-sm sm:text-lg md:text-xl lg:text-2xl">
            <h1>Home</h1>
            <h1>Projects</h1>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
