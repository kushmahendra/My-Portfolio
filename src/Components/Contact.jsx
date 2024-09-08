import React from 'react';

const Contact = React.memo(() => {
  return (
    <>
      <section className='bg-[#10002B] text-white pt-12 pb-6'>
        <div className='text-4xl text-center py-12'>
          <h1>More Projects Coming Soon...</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4 md:mx-8 gap-6'>
          {/* Contact Section */}
          <div className='border border-gray-400 p-4 rounded-md'>
            <h1 className='text-2xl md:text-3xl py-4 text-center'>Contact Me</h1>
            <p>
              I'm currently looking to join a cross-functional team that values improving people's lives through
              innovative technology. Have a project in mind? Let's connect.
            </p>
            <h1 className='py-4'>Email : kushwahamahendra691@gmail.com</h1>
            <div className='flex gap-6 md:gap-12 py-4 justify-center'>
              <a
                href="https://www.linkedin.com/in/mahendra-kushwaha-333569259/"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin animate-spin text-xl"></i>
              </a>
              <a
                href="https://github.com/kushmahendra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github animate-spin text-xl"></i>
              </a>
              <a
                href="https://leetcode.com/u/kushwahamahendra691/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <img
                  className=' w-8 h-8'
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkGBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Kzc3Nzc3Nzc3Nzc3NzgtNzc3MTc4Ky83Nzc3ODc3ODc3NTgsNzM3Mi83Nzc3Nzg3LP/AABEIABwAHAMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBgEFBwMC/8QAKhAAAQMDAwIFBQEAAAAAAAAAAgEDBAAFEQYSMRNRITJBYZElQnGx8Af/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAwQC/8QAIxEAAgIBAwMFAAAAAAAAAAAAAAIBAxESMWEEI3ETISJR0f/aAAwDAQACEQMRAD8AzHcPZPigLTTdimajuY223tjlE3vPH4AyHqRL6J+6AAlg0xKejtPNSAbcIRea8jiIuNyey80By3D2SgPNpivXW6w7RHIRelvgyBFwKkuMr+KA0SRc5ltekaG/z6IjjUA1S5ynkHfMdRdq5yqYFFRUwnbwwnMrqVuSUbafo7rsmttS7ivq20TY5FeVs5W+MSCjo9YCFHF52oi8L4Vx01dldeixtWNp455OrnR21LGP0WerWgkCRpj0WS1MjOk2+yaONmPIki5RfmgHq7XnTWr2o96uMs7JfUXbP6DJE3LFE8444Jf7OKz9RZakR6Sap84K1IjT82xAqahuMKXP+lMGxDbBABDNVJzH3ln1WnTJalfdbLT7+OBcyM3bjEFZ1fetBIHoCKAmgIoD/9k="
                  alt="LeetCode Logo"
                />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/mahendrakush91/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks"
              >
                <img
                  className='w-8 h-8'
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAALVBMVEVHcEwujUUvjUYwi0QujUUvjUYvjUYujUUvjUUujUUvjUUvjUYujEUujUUvjUZimRHUAAAADnRSTlMADNYeufPka400e6VKXaau79UAAACrSURBVCiR3ZBZDgMhDEOHLITV9z9uQ6DqIs0BWn8gPQxxkuv6N6WU7mA0EbG6oS5o9fjcEaK5oGzItl0WlWaFoO76Q4dGWs7XOnidHZoGtAXMt9h4QzBC/7p9qkCg9jGE4EYWZqYtheINltnROeSZ3vKBQViTGfKI+kXBDjPSGnR1zQQqo5ooSoQ4zO4QbY/sSdnjFnrtDZ3P/prbkF0v+ayv7Z2Jrjv4GT0AJwcIG55/Qx4AAAAASUVORK5CYII="
                  alt="GeeksforGeeks Logo"
                />
              </a>
            </div>
          </div>

          {/* Project Inquiry Section */}
          <div className='border bg-white text-black border-gray-400 p-4 rounded-md'>
            <h1 className='font-semibold text-lg md:text-xl text-center py-2'>Have a Project in Mind?</h1>
            {/* Corrected Form Structure */}
            <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="firstName">First Name</label>
                <input
                  className='bg-gray-100 border border-gray-500 rounded-md px-2 py-1 my-1'
                  type="text"
                  placeholder="John"
                  id="firstName"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="lastName">Last Name</label>
                <input
                  className='bg-gray-100 border border-gray-500 rounded-md px-2 py-1 my-1'
                  type="text"
                  placeholder="Doe"
                  id="lastName"
                  required
                />
              </div>
              {/* Updated Column Span for Proper Alignment */}
              <div className='flex flex-col mt-4 md:col-span-2'>
                <label htmlFor="email">Email Address</label>
                <input
                  className='bg-gray-100 border border-gray-500 rounded-md px-2 py-1 my-1'
                  type="email"
                  placeholder="example@gmail.com"
                  id="email"
                  required
                />
              </div>
              {/* Updated to Button with Type Submit */}
              <button
                type="submit"
                className='bg-blue-800 text-white text-center py-2 my-4 border rounded-md cursor-pointer md:col-span-2'
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
});

export default Contact;
