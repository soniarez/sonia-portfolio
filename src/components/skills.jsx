import React from 'react';
import css from '../assets/css.png';
import figma from '../assets/figma.png';
import firebase from '../assets/firebase.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import reactImg from '../assets/react.png';
import vite from '../assets/vite.png';

const Skills = () => {
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
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 5,
      src: reactImg,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 6,
      src: node,
      title: 'Node JS',
      style: 'shadow-green-800',
    },
    {
      id: 7,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-yellow-500',
    },
    {
      id: 8,
      src: vite,
      title: 'Vite',
      style: 'shadow-violet-500',
    },
    {
      id: 9,
      src: git,
      title: 'Git',
      style: 'shadow-orange-600',
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-teal-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">Some of the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
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

export default Skills;
