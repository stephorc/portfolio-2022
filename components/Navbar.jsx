import Image from 'next/image';
import Logo from './/../public/assets/stephorc-logo.png'
import Link from 'next/link';
import React, { useState, useEffect, createContext } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from './useDarkMode';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [setTheme, colorTheme] = useDarkMode(false);

  const handleNav = () => {
    window.addEventListener
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={ shadow ? ('fixed w-full h-20 shadow-xl bg-[#ecf0f3] dark:bg-slate-800 z-[100]' ) : ( 'fixed w-full h-20 z-[100]')}>
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Steph O.'
            width='80'
            height='52.04'
            className='cursor-pointer hover:rotate-180 ease-in duration-200'
          />
        </Link>
        <div>
          <ul className='hidden h-20 md:flex'>
            <Link href='#Hero'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 focus:bg-gray-500/5 dark:hover:border-gray-500/20 dark:focus:bg-gray-300/10 dark:text-gray-300'>Home</li>
            </Link>
            <Link href='#About'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 active:bg-gray-500/5 dark:hover:border-gray-500/20 dark:focus:bg-gray-300/10 dark:text-gray-300'>About</li>
            </Link>
            <Link href='#Skills'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 active:bg-gray-500/5 dark:hover:border-gray-500/20 dark:focus:bg-gray-300/10 dark:text-gray-300'>Skills</li>
            </Link>
            <Link href='#Projects'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 active:bg-gray-500/5 dark:hover:border-gray-500/20 dark:focus:bg-gray-300/10 dark:text-gray-300'>Projects</li>
            </Link>
            <Link href='#Contact'>
              <li className='p-8 text-sm uppercase border-b-4 border-transparent hover:border-gray-400 active:bg-gray-500/5 dark:hover:border-gray-500/20 dark:focus:bg-gray-300/10 dark:text-gray-300'>Contact</li>
            </Link>
            <div className='p-7 cursor-pointer' onClick={() => setTheme(colorTheme)}>
              {colorTheme === 'light' ? (
                <FaSun
                  className='text-red-500 hover:text-blue-500 hidden md:flex'
                  onClick={() => setTheme('light')}
                  size={25}
                />
              ) : (
                <FaMoon
                  className='text-blue-500 hover:text-red-500 hidden md:flex'
                  onClick={() => setTheme('dark')}
                  size={25}
                /> )}
            </div>
          </ul>
          <div className='flex items-center gap-3'>
            <div onClick={handleNav} className='cursor-pointer hover:scale-105 hover:text-blue-500 ease-in duration-200 md:hidden'>
              <AiOutlineMenu size={25} />
            </div>
            <div className='cursor-pointer' onClick={() => setTheme(colorTheme)}>
              {colorTheme === 'light' ? (
                <FaSun
                  className='text-red-500 hover:text-blue-500 flex md:hidden'
                  onClick={() => setTheme('light')}
                  size={25}
                />
              ) : (
                <FaMoon
                  className='text-blue-500 hover:text-red-500 flex md:hidden'
                  onClick={() => setTheme('dark')}
                  size={25}
                /> )}
            </div>
          </div>
        </div>
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}>
        <div className={
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-slate-800 p-10 ease-in duration-300'
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
                <Link href='#Hero'>
                  <li className='py-6 text-sm hover:bg-gray-200 dark:hover:bg-gray-500/20 rounded-md hover:font-bold ease-in duration-200'>Home</li>
                </Link>
                <Link href='#About'>
                  <li className='py-6 text-sm hover:bg-gray-200 dark:hover:bg-gray-500/20 rounded-md hover:font-bold ease-in duration-200'>About</li>
                </Link>
                <Link href='#Skills'>
                  <li className='py-6 text-sm hover:bg-gray-200 dark:hover:bg-gray-500/20 rounded-md hover:font-bold ease-in duration-200'>Skills</li>
                </Link>
                <Link href='#Projects'>
                  <li className='py-6 text-sm hover:bg-gray-200 dark:hover:bg-gray-500/20 rounded-md hover:font-bold ease-in duration-200'>Projects</li>
                </Link>
                <Link href='#Contact'>
                  <li className='py-6 text-sm hover:bg-gray-200 dark:hover:bg-gray-500/20 rounded-md hover:font-bold ease-in duration-200'>Contact</li>
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
  );
};

export default Navbar;