import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AboutImg from './/../public/assets/what-i-do.jpg';

const About = () => {
  return (
    <div id='About' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-blue-500'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>// Just your friendly, neighborhood Web Dev</p>
          <p className='py-2 text-gray-600'>
            I've been very fortunate in my life to have the means neccessary 
            for completing the age-old journey that is man's search for self. 
            Though I could never say that I've reach the end, as I don't believe 
            there is one, I've managed to parse through many a datapoint and come 
            to find peace in who I truly am: a gamer. Press <span className='text-blue-500 cursor-pointer hover:font-bold'>F</span> 
            to pay respects.
          </p>
          <p className='py-2 text-gray-600'>
            As a young professional, I've spent my time getting a degree at the Universtiy of Central Florida. 
            In Creative Writing, of course. The only <em>real</em> option. Sorry CS nerds, your 
            degree doesn't exist...&hearts; Programming passion...
          </p>
          {/* <p>
            A self-taught Frontend Developer with a Bachelor's degree in Creative Writing. 
            I have 3+ years of experience in teaching and 2+ years of experience in marketing, graphic design, and software development.
          </p> */}
          <Link href='/'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} alt="/" className='rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default About;