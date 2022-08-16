import React from 'react';
import cardValidation from '../assets/portfolio/cardValidation.png';
import memoryMatch from '../assets/portfolio/memoryMatch.png';
import socialNetwork from '../assets/portfolio/socialNetwork.png';
import mdLinks from '../assets/portfolio/mdLinks.png';
import burguerQueen from '../assets/portfolio/burguerQueen.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: cardValidation,
      demo: 'https://iankat.github.io/SCL020-card-validation/src/',
      about: "https://github.com/soniarez/SCL020-card-validation.git",
    },
    {
      id: 2,
      src: memoryMatch,
      demo: 'https://scl-020-memory-match.vercel.app/',
      about: "https://github.com/soniarez/SCL020-memory-match.git",
    },

    {
      id: 3,
      src: socialNetwork,
      demo: 'https://scl-020-social-network.vercel.app/',
      about: "https://github.com/soniarez/SCL020-social-network.git",
    },

    {
      id: 4,
      src: mdLinks,
      demo: 'https://www.npmjs.com/package/@soniarez/md-links',
      about: "https://github.com/soniarez/SCL020-md-links.git",
    },

    {
      id: 5,
      src: burguerQueen,
      demo: 'https://es.wikipedia.org/wiki/Lim%C3%B3n',
      about: "https://scl-020-burger-queen.vercel.app/",
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
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(project => (
            <div key={project.id} className="shadow-md shadow-teal-600 rounded-lg">
              <img
                src={project.src}
                alt="my projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(project.demo)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => window.open(project.about)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
