import React from 'react';
import makeTheImpossible from '../assets/makeTheImpossible1.jpg';

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b md:h-screen from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full p-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-justify">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-teal-500 text-white">
              About
            </p>
          </div>

          <p className="max-w-md ">
            My name is Sonia Reyes, and as you may have noticed, I'm a Front End
            Developer based in Chile. I also studied, and worked for years in
            the business and project management related field.
          </p>

          <p className="max-w-md mt-2 ">
            In 2019 I had the amazing opportunity of getting into Start-Up Chile
            with a startup focused on construtech. And from there, I fell in
            love with the tech world. <br /> In 2022, I applied and was selected
            to enter Laboratoria's full-time FrontEnd Bootcamp, where I realized
            that coding is my thing!
            <p className="max-w-md mt-2">
              In addition, my background in business has helped me to develop
              projects with a broad vision that seeks to create and improve user
              experience.
            </p>
          </p>
        </div>

        <div>
          <img
            src={makeTheImpossible}
            alt="my motto"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
