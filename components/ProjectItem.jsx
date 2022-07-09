import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-tr from-blue-500 to-red-500'>
      <Image
        src={backgroundImg}
        alt='Netflix UI Clone'
        className='rounded-xl group-hover:opacity-10'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-[#ecf0f3] tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-[#ecf0f3] text-center'>TailwindCSS, ReactJs, &amp; Firebase</p>
        <Link href={projectUrl}>
          <p className='cursor-pointer text-lg text-center py-3 rounded-lg bg-[#ecf0f3] text-gray-700 font-bold hover:scale-105 ease-in duration-200'>More Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem;