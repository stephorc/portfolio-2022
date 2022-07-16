import React from 'react';
import Image from 'next/image';
import Html from './/../public/assets/skills/html.png';
import Css from './/../public/assets/skills/css.png';
import Javascript from './/../public/assets/skills/javascript.png';
// import Python from './/../public/assets/skills/python.png';
import TailwindCSS from './/../public/assets/skills/tailwind.png';
// import Sass from './/../public/assets/skills/sass.png';
import NodeJs from './/../public/assets/skills/node.png';
import ReactJs from './/../public/assets/skills/react.png';
import NextJs from './/../public/assets/skills/nextjs.png';
import Firebase from './/../public/assets/skills/firebase.png';
import MongoDB from './/../public/assets/skills/mongo.png';
// import Aws from './/../public/assets/skills/aws.png';
// import Mysql from './/../public/assets/skills/mysql.png';
// import Wordpress from './/../public/assets/skills/wordpress.png';
import Github from './/../public/assets/skills/github.png';
import AdobeIll from './/../public/assets/skills/adobeill.png';
// import AdobeInd from './/../public/assets/skills/adobeind.png';
import GoogleAds from './/../public/assets/skills/googleads.png';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <div id='Skills' className='w-full p-2 py-16 lg:pb-44'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-blue-500'>Skills</p>
        <h2 className='py-4 dark:text-gray-100'>Tech &amp; Languages</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={Html}
              title='HTML'
              alt='HTML'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={Css}
              title='CSS'
              alt='CSS'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={Javascript}
              title='JavaScript'
              alt='JavaScript'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={TailwindCSS}
              title='TailwindCSS'
              alt='TailwindCSS'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={NodeJs}
              title='NodeJs'
              alt='NodeJs'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={ReactJs}
              title='ReactJs'
              alt='ReactJs'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={NextJs}
              title='NextJs'
              alt='NextJs'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={Firebase}
              title='Firebase'
              alt='Firebase'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={MongoDB}
              title='MongoDB'
              alt='MongoDB'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={Github}
              title='Github'
              alt='Github'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={AdobeIll}
              title='Adobe Illustrator'
              alt='Adobe Illustrator'
            />
          </div>
          <div className='p-6 hover:scale-105 ease-in duration-200'>
            <SkillItem
              skillImg={GoogleAds}
              title='Google Ads'
              alt='Google Ads'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;