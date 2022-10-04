import React from 'react';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import figma from '../assets/figma.png';
import firebase from '../assets/firebase.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import reactImg from '../assets/react.png';
import vite from '../assets/vite.png';

const SkillSet = () => {
  const techs = [
    {
      id: 1,
      src: figma,
      title: 'Figma',
      style: 'shadow-emerald-600',
    },
    {
      id: 2,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 3,
      src: css,
      title: 'CSS3',
      style: 'shadow-blue-500',
    },
    {
      id: 4,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-teal-500',
    },
    {
      id: 5,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 6,
      src: reactImg,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 7,
      src: node,
      title: 'Node JS',
      style: 'shadow-green-800',
    },
    {
      id: 8,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-yellow-500',
    },
    {
      id: 9,
      src: vite,
      title: 'Vite',
      style: 'shadow-violet-500',
    },
    {
      id: 10,
      src: git,
      title: 'Git',
      style: 'shadow-orange-600',
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <p className="inline p-2 text-4xl font-bold border-b-4 border-teal-500">
            Skills
          </p>
          <p className="py-6">Some of the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(tech => (
            <div
              key={tech.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}
            >
              <img src={tech.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default SkillSet;
