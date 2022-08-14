import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'skills',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Sonia</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(link => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link.link} smooth duration={500}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setHamburgerMenu(!hamburgerMenu)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {hamburgerMenu ? <FaTimes size={30} /> : <FaBars sise={30} />}
      </div>
      {hamburgerMenu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
          {links.map(link => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setHamburgerMenu(!hamburgerMenu)} to={link.link} smooth duration={500}>
              {link.link}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
