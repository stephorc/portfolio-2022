import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImGithub } from 'react-icons/im'

const ProjectItem = ({title, backgroundImg, projectUrl, tech, ghub}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-tr from-blue-500 to-red-500'>
      <Image
        src={backgroundImg}
        alt='Netflix UI Clone'
        className='rounded-xl group-hover:opacity-10 ease-in duration-100'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-[#ecf0f3] tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-[#ecf0f3] text-center'>{tech}</p>
        <div className='flex gap-3 justify-evenly items-center'>
          <Link href={projectUrl}>
            <p className='cursor-pointer text-lg text-center py-3 px-6 rounded-lg bg-[#ecf0f3] text-gray-700 font-bold hover:scale-105 ease-in duration-200 lg:px-8'>More Info</p>
          </Link>
          <a href={ghub} target='_blank' rel='noopener noreferrer'>
            <ImGithub
              className='cursor-pointer text-[#ecf0f3] hover:text-black hover:scale-105 ease-in duration-200'
              size={49}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;