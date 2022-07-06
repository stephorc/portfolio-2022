import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div id='Home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          {/* Or?
          <div className='flex flex-row'>
            <Typed
              className='uppercase text-sm tracking-widest text-gray-600 md:text-md'
              strings={['Frontend Dev', 'Any% Dead Space 2 Speedrunner', 'Dog Mom', 'Sci-fi Writer']}
              typeSpeed={120}
              backSpeed={120}
            />
          </div> */}
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let&#39;s build a more beautiful web, together
          </p>
          <h1 className='py-4 text-gray-700'>Hello, I&#39;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400'>Steph</span></h1>
          <h2 className='flex flex-row'>
            <Typed
              className='py-2 m-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400'
              strings={['A Frontend Dev.', 'An Any% Dead Space Speedrunner.', 'A Dog Mom.', 'A Sci-fi Writer.']}
              typeSpeed={120}
              backSpeed={120}
              loop
            />
          </h2>
          <p className='py-4 text-gray-600 max-w-[90%] m-auto md:max-w-[70%]'>
            I&#39;m a front-end web developer, specializing in building and designing exceptional digital experiences. 
            Currently, I'm focused on building responsive front-end web applications, utilizing new technology and 
            sharpening my creative talents.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
           <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-blue-500 ease-in duration-200'>
              <FaLinkedinIn size={20} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-green-400 ease-in duration-200'>
              <FaGithub size={20} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-yellow-500 ease-in duration-200'>
              <AiOutlineMail size={20} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-pink-500 ease-in duration-200'>
              <BsFillPersonLinesFill size={20} />
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;