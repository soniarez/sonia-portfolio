import React from 'react';

const Footer = () => {
  const links = [
    {
      id: 1,
      title: 'linkedin',
      href: 'https://www.linkedin.com/in/soniareyesp/',
    },
    {
      id: 2,
      title: 'github',
      href: 'https://github.com/soniarez',
    },
    {
      id: 3,
      title: 'email',
      href: 'mailto:sonia.reyes.posada@gmail.com',
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black ">
      <p className="text-gray-500 cursor-default ">By Sonia Reyes 💚</p>
      <ul className="flex ">
        {links.map(link => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
          >
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
