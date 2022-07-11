import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NetflixClone from './/../public/assets/projects/Netflix-Clone-stephorc-github.png';
import Hosted from './/../public/assets/projects/Hosted-stephorc-github.png';
import Manage from './/../public/assets/projects/Manage-Landing-stephorc-github.png';
import Huddle from './/../public/assets/projects/Huddle-Landing-stephorc-github.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='Projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-blue-500'>Projects</p>
        <h2 className='py-4 dark:text-gray-100'>What I've Built / My Builds</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Netflix UI Clone'
            backgroundImg={NetflixClone}
            projectUrl='/Netflix-Clone-stephorc-github'
            tech='TailwindCSS, ReactJs, &amp; Firebase'
            ghub='https://github.com/stephorc/react-tailwind-netflix'
          />
          <ProjectItem
            title='Hosted Landing Page'
            backgroundImg={Hosted}
            projectUrl='/Hosted-stephorc-github'
            tech='TailwindCSS &amp; Vanilla JavaScript'
            ghub='https://github.com/stephorc/booking-site-landing'
          />
          <ProjectItem
            title='Manage Landing Page'
            backgroundImg={Manage}
            projectUrl='/Manage-Landing-stephorc-github'
            tech='TailwindCSS &amp; Vanilla JavaScript'
            ghub='https://github.com/stephorc/tailwind-manage-landing'
          />
          <ProjectItem
            title='Huddle Landing Page'
            backgroundImg={Huddle}
            projectUrl='/Huddle-Landing-stephorc-github'
            tech='HTML/CSS &amp; Vanilla JavaScript'
            ghub='https://github.com/stephorc/huddle-landing-curved'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;