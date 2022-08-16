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
      <h2 className="text-4xl sm:text-7xl font-bold text-white max-w-md ">
        {`I'm a`} <span>{text}</span>
      </h2>
    );
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <TrackVisibility>
            <div id="animation" className="hidden md:flex">
              <ComponentToTrack />
            </div>
          </TrackVisibility>
          <p id="iphone-se"className=" text-4xl sm:text-7xl md:hidden lg:hidden font-bold text-white">
            I'm a FrontEnd Developer
          </p>

          <p className="text-gray-500 py-4 max-w-md text-justify ">
            I'm Sonia Reyes, a FrontEnd Developer. I've always been passionate
            about technology and creating things, getting to know and understand
            how things work. I also have a background and experience in Business
            Administration.
            <br />
            <br />
            Currently, I'm working mostly with{' '}
            <strong>React, JavaScript, HTML5 and CSS3.</strong>
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={soniaImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
