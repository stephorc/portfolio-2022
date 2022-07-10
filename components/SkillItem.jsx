import React from 'react';
import Image from 'next/image';

const SkillItem = ({skillImg, title}) => {
  return (
    <div className='grid grid-cols-2 gap-4 justify-center items-center grayscale hover:grayscale-0 ease-in duration-100'>
      <div className='m-auto'>
        <Image
          src={skillImg}
          alt='Skill'
          width='64'
          height='64'
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default SkillItem;