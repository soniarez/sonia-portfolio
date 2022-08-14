import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">
            About:
          </p>
          <p className="text-xl mt-20">
            Welcome to my site!
            <br />
            <br />
            My name is Sonia Reyes, and as you may have noticed, I'm a Front End
            Developer based in Chile. But I haven't always been a web developer.
            I studied, and for years worked in the business related field.
          </p>
          <br />
          <p className="text-xl">
            In 2019 I had the amazing opportunity of getting into Start-Up Chile
            with a project focused on construtech. And from there, I fell in
            love with the tech world. I took a leap of faith and made my
            decition that coding was my thing. That is how in 2022 I applied and
            was selected to enter Laboratoria's full-time FrontEnd Bootcamp.
          </p>
          <br />
          <p className='text-xl'>
            Right now, I work mostly with React, Javascript, HTML and CSS. Also,
            my background in business has helped me to create projects with a
            broad vision that seeks to create and improve user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
