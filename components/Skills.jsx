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

const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-blue-500'>Skills</p>
        <h2 className='py-4'>Tech &amp; Languages</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Html}
                  alt='HTML'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Css}
                  alt='CSS'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Javascript}
                  alt='JavaScript'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Python}
                  alt='Python'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div> */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={TailwindCSS}
                  alt='TailwindCSS'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Sass}
                  alt='Sass'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Sass</h3>
              </div>
            </div>
          </div> */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={NodeJs}
                  alt='NodeJs'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={ReactJs}
                  alt='ReactJs'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>ReactJs</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={NextJs}
                  alt='NextJs'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Firebase}
                  alt='Firebase'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={MongoDB}
                  alt='MongoDB'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Aws}
                  alt='AWS'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div> */}
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Mysql}
                  alt='MySQL'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MySQL</h3>
              </div>
            </div>
          </div> */}
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Wordpress}
                  alt='WordPress'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>WordPress</h3>
              </div>
            </div>
          </div> */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={Github}
                  alt='Github'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={AdobeIll}
                  alt='Adobe Illustrator'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Adobe Illustrator</h3>
              </div>
            </div>
          </div>
          {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={AdobeInd}
                  alt='Adobe InDesign'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Adobe InDesign</h3>
              </div>
            </div>
          </div> */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={GoogleAds}
                  alt='Google Ads'
                  width='64'
                  height='64'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Google Ads</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;