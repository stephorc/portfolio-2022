import React from 'react';
import Image from 'next/image';

const SkillItem = ({skillImg, title}) => {
  return (
    <div className='flex justify-center items-center text-center cursor-pointer group grayscale hover:grayscale-0 ease-in duration-100'>
      <div className='m-auto relative group-hover:translate-y-[4em] md:group-hover:translate-x-[-5em] ease-in duration-200'>
        <Image
          src={skillImg}
          alt='Skill'
          width='64'
          height='64'
        />
        <div className='relative top-[-3em] left-0 text-[#ecf0f3] dark:text-slate-800 z-[-10] group-hover:translate-y-[-4em] md:group-hover:translate-x-[5em] group-hover:text-black dark:group-hover:text-[#ecf0f3] ease-in duration-200'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;