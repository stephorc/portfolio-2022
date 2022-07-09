import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from './/../public/assets/SH2-mira.png';
// import ContactImg from './/../public/setup.png';

const Contact = () => {
  return (
    <div id='Contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-blue-500'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image
                  src={ContactImg}
                  alt='Mira from Silent Hill 2, Dog ending'
                />
              </div>
              <div>
                <h2>Steph O.</h2>
                <p>Front-End Developer &amp; Designer</p>
                <p>Got a cool web app idea you'd like help bringing to life? 
                  Feel free to contact me (available for freelance or full-time positions) via the following form.</p>
              </div>
              <div>
                <p className='pt-8 uppercase'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-blue-500 ease-in duration-200'>
                      <FaLinkedinIn size={20} />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-green-400 ease-in duration-200'>
                      <FaGithub size={20} />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-yellow-500 ease-in duration-200'>
                      <AiOutlineMail size={20} />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:text-red-500 ease-in duration-200'>
                      <BsFillPersonLinesFill size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Name</label>
                    <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Phone Number</label>
                    <input type="tel" className='border-2 rounded-lg p-3 flex border-gray-300'/>
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor="" className='uppercase text-sm py-2'>Email</label>
                  <input type="email" className='border-2 rounded-lg p-3 flex border-gray-300' />
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor="" className='uppercase text-sm py-2'>Subject</label>
                  <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor="" className='uppercase text-sm py-2'>Message</label>
                  <textarea rows='10' className='border-2 rounded-lg p-3 flex border-gray-300'></textarea>
                </div>
                <button className='w-full p-4 mt-4 text-gray-100'>Send</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='#Hero'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <HiOutlineChevronDoubleUp className='text-blue-500' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;