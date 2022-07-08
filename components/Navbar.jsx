import Image from 'next/image';
import Logo from './/../public/assets/stephorc-logo.png'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='fixed w-full h-20 shadow-xl bg-[#ecf0f3] z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
        <Image
          src={Logo}
          alt='Steph O.'
          width='80'
          height='52.04'
          className='cursor-pointer hover:rotate-180 ease-in duration-200'
        />
        <div>
          <ul className='hidden h-20 md:flex'>
            <Link href='/'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 focus:bg-gray-500/5'>Home</li>
            </Link>
            <Link href='/'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 active:bg-gray-500/5'>About</li>
            </Link>
            <Link href='/'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 active:bg-gray-500/5'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 active:bg-gray-500/5'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 active:bg-gray-500/5'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='cursor-pointer hover:scale-105 hover:text-blue-500 ease-in duration-200 md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        {/* className={darkMode ? 'flex' : 'hidden'} */}
        <div className='hidden md:flex'>
          <FaMoon size={25} />
        </div>
        {/* <div className={darkMode ? 'hidden' : 'flex'}>
          <FiSun size={25} />
        </div> */}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}>
        <div className={
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
          }>
          <div>
            <div className='flex justify-between items-center'>
              <Image
                src={Logo}
                alt='Steph O.'
                width='80'
                height='52.04'
              />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-red-500 ease-in duration-200'>
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className='py-12 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                  <li className='py-6 text-sm hover:bg-gray-200 rounded-md hover:font-bold ease-in duration-200'>Home</li>
                </Link>
                <Link href='/'>
                  <li className='py-6 text-sm hover:bg-gray-200 rounded-md hover:font-bold ease-in duration-200'>About</li>
                </Link>
                <Link href='/'>
                  <li className='py-6 text-sm hover:bg-gray-200 rounded-md hover:font-bold ease-in duration-200'>Skills</li>
                </Link>
                <Link href='/'>
                  <li className='py-6 text-sm hover:bg-gray-200 rounded-md hover:font-bold ease-in duration-200'>Projects</li>
                </Link>
                <Link href='/'>
                  <li className='py-6 text-sm hover:bg-gray-200 rounded-md hover:font-bold ease-in duration-200'>Contact</li>
                </Link>
              </ul>
              <div className='pt-20'>
                <p className='uppercase tracking-widest text-blue-500'>
                  Let's Connect
                </p>
                <div className='flex justify-between items-center my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-blue-500 ease-in duration-200'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-green-400 ease-in duration-200'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-yellow-500 ease-in duration-200'>
                    <AiOutlineMail />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-red-500 ease-in duration-200'>
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;