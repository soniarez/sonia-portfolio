import React from 'react';
import cardValidation from '../assets/portfolio/cardValidation.png';
import memoryMatch from '../assets/portfolio/memoryMatch.png';
import socialNetwork from '../assets/portfolio/socialNetwork.png';
import mdLinks from '../assets/portfolio/mdLinks.png';
import burguerQueen from '../assets/portfolio/burguerQueen.png';
import itauHackaton from '../assets/portfolio/itauHackaton.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: itauHackaton,
      demo: 'https://vimeo.com/744777924',
      about: 'https://github.com/soniarez/tf-app',
    },
    {
      id: 2,
      src: burguerQueen,
      demo: 'https://es.wikipedia.org/wiki/Lim%C3%B3n',
      about: 'https://scl-020-burger-queen.vercel.app/',
    },
    {
      id: 3,
      src: mdLinks,
      demo: 'https://vimeo.com/744716281',
      about: 'https://www.npmjs.com/package/@soniarez/md-links',
    },
    {
      id: 4,
      src: socialNetwork,
      demo: 'https://vimeo.com/744767542',
      about: 'https://github.com/soniarez/SCL020-social-network.git',
    },
    {
      id: 5,
      src: memoryMatch,
      demo: 'https://vimeo.com/744771984',
      about: 'https://github.com/soniarez/SCL020-memory-match.git',
    },
    {
      id: 6,
      src: cardValidation,
      demo: 'https://vimeo.com/744774243',
      about: 'https://github.com/soniarez/SCL020-card-validation.git',
    },
  ];

  //Another way (not so good) of redirect link
  /*   const takeToDemo = id => {
    projects.map(item => {
      if (item.id === id) {
       window.location.href = `${item.demo}`
      }
    });
  }; */

  return (
    <div
      name="portfolio"
      className="w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen "
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto ">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-teal-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {projects.map(project => (
            <div
              key={project.id}
              className="rounded-lg shadow-md shadow-teal-600"
            >
              <img
                src={project.src}
                alt="my projects"
                className="duration-200 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(project.demo)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(project.about)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  About
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
