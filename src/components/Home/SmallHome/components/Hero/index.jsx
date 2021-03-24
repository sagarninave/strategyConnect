/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import laptop from '../../../../../assets/img/bigLaptop.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import smallLaptop from '../../../../../assets/img/smallLaptop.webp';
import Chat from './Chat';
import World from './World';
import Rocket from './Rocket';
import KickStart from '../Navbar/KickStart';

const imageList = [
  {
    Img: Chat,
    number: '5000+',
    text: 'Consultants & Experts',
  },
  {
    Img: World,
    number: '100+',
    text: 'Clients Covered',
  },
  {
    Img: Rocket,
    number: '200+',
    text: 'Projects Delivered',
  },
];

function index() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  const [showKickstart, setShowKickstart] = useState(false);
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div className="mt-20">
      <p
        style={{ lineHeight: 1.3 }}
        className="lg:text-5xl text-lg sm:text-3xl px-2.5 md:mx-auto md:w-3/5 text-black text-center sm:mt-32 mt-7 font-bold lg:leading-10"
      >
        Precision drive your projects with curated talent
      </p>
      <p className="sm:w-6/12 w-11/12 grey-text lg:text-lg text-base mx-auto sm:mt-5 mt-6  text-center lg:leading-8 font-thin">
        Simplify business complexities with our AI-powered tech platform and a
        portfolio of project-matched specialist resources who bring in valuable
        industry experience.
      </p>

      <p
        onClick={() => {
          setShowKickstart(true);
        }}
        className="mt-10 mx-auto w-36 flex  hover:bg-indigo-900 justify-center items-center py-3 px-3 rounded purple text-white text-base cursor-pointer"
      >
        Start a project
      </p>
      <div className="px-5 lg:px-0 flex justify-center mt-12">
        {dimensions.width <= 940 ? (
          <LazyLoadImage src={smallLaptop} alt={smallLaptop} effect="blur" />
        ) : (
          <LazyLoadImage
            alt={laptop}
            effect="blur"
            className="mx-auto"
            style={{ width: dimensions.width > 1028 ? '100%' : '65%' }}
            src={laptop}
          />
        )}
      </div>

      <div className="lg:mx-56 sm:mx-32 mx-6 pt-10 topborder flex justify-between">
        {imageList.map((item) => {
          return (
            <div className="flex flex-col items-center content-center">
              <item.Img />
              {item.img}
              <p className="text-lg md:text-2xl font-bold md:mt-7 md:mb-3 leading-10">
                {item.number}
              </p>
              <p className="text-base  font-normal  text-center md:mb-10 lg:leading-7 grey-text">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      <div className={`${showKickstart ? 'block' : 'hidden'}`}>
        <KickStart visible={showKickstart} setVisible={setShowKickstart} />
      </div>
    </div>
  );
}

export default index;
