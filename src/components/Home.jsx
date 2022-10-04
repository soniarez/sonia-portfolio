import React, { useEffect, useState } from 'react';
import TrackVisibility from 'react-on-screen';
import soniaImg from '../assets/soniaImg.JPG';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['FrontEnd Developer'];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const ComponentToTrack = ({ isVisible }) => {
    return (
      <h2 className="max-w-md text-4xl font-bold text-white sm:text-7xl ">
        {`I'm a`} <span>{text}</span>
      </h2>
    );
  };

  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-between h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <TrackVisibility>
            <div id="animation" className="hidden md:flex">
              <ComponentToTrack />
            </div>
          </TrackVisibility>
          <p
            id="iphone-se"
            className="text-4xl font-bold text-white  sm:text-7xl md:hidden lg:hidden"
          >
            I'm a FrontEnd Developer
          </p>

          <p className="max-w-md py-4 text-justify text-gray-500 ">
            I'm Sonia Reyes, a FrontEnd Developer with previous studies, and a
            master's degree in Business Administration. I've always been
            passionate about technology and creating things, getting to know and
            understand how things work. 
            <br />
            <br />
            Currently, I'm working mostly with{' '}
            <strong>React, JavaScript, HTML5, CSS3 and Tailwind.</strong>
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-teal-500 to-emerald-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={soniaImg}
            alt="my profile"
            className="w-2/3 max-w-md mx-auto rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
