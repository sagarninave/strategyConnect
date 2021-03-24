import React, { useState, useEffect } from 'react';
import logo from '../../../assets/img/logo.svg';
import line from '../../../assets/img/oneline.svg';

export default function MainAppHero() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div className="px-8 lg:px-0">
      <h1
        style={{ color: '#38369A' }}
        className="lg:text-5xl text-lg font-bold text-center   lg:mt-48 mt-24"
      >
        Welcome to StrategyConnect
      </h1>
      <p className="text-base grey-text text-center lg:w-2/6 font-light mx-auto mt-4">
        We leveraged a sprint-based, collaborative approach to enable an
        informed decision.
      </p>
      <div>
        <img
          src={logo}
          alt=""
          className=" mx-auto lg:mb-16 xl:mb-0 mt-8 mb-20 lg:mb-0"
        />
      </div>
      <img
        src={line}
        loading="lazy"
        alt=""
        className="hidden xl:flex mx-auto relative mt-4 tallLine"
        style={{
          left: dimensions.width == 1280 ? -247 : '-20%',
          // width: dimensions.width == 1280 ? 500 : 'auto',
        }}
      />
    </div>
  );
}
