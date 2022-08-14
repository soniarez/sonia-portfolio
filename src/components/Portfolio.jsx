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
    },
    {
      id: 2,
      src: memoryMatch,
      demo: 'https://scl-020-memory-match.vercel.app/',
    },

    {
      id: 3,
      src: socialNetwork,
      demo: 'https://scl-020-social-network.vercel.app/',
    },

    {
      id: 4,
      src: mdLinks,
      demo: 'https://www.npmjs.com/package/@soniarez/md-links',
    },

    {
      id: 5,
      src: burguerQueen,
      demo: 'https://es.wikipedia.org/wiki/Lim%C3%B3n',
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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen lg:pb-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(project => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={project.src}
                alt="my-projects"
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(project.demo)}
                  className="w-1/2 py-3 m-4 hover:scale-150 duration-200"
                >
                  Demo
                </button>
                {/* <button className="w-1/2 py-3 m-4 hover:scale-150 duration-200">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
