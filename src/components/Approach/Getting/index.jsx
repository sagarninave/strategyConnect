import React, { useEffect, useState } from 'react';
import roc from '../../../assets/img/roc-logo.svg';
import circ from '../../../assets/img/circ.webp';
import dashOne from '../../../assets/img/OneDash.webp';
import dashTwo from '../../../assets/img/dashTwo.webp';
import dashArr from '../../../assets/img/dashArr.svg';

export default function Getting() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
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
    <div className="lg:mt-40 lg:mb-28 mb-16 pt-8 lg:pt-0 lg:mx-32">
      <div className=" mx-auto flex flex-col lg:flex-row justify-center items-center">
        <h1 className="lg:text-4xl text-lg mt-4 lg:mt-0 text-center font-bold">
          Getting started with us
        </h1>
        <img
          loading="lazy"
          src={roc}
          alt=""
          className="md:h-14 md:ml-4 order-first transform -rotate-45"
        />
      </div>
      <p className="grey-text mt-4 font-light lg:w-2/4 text-center mx-auto text-base">
        Get to know more detailed strategic approach focuses on challenging the
        status quo in any industry.
      </p>

      <div className="mt-20 w-5/6 mx-auto flex  lg:flex-row flex-col  justify-center lg:justify-between">
        <div className="w-64 self-center lg:self-auto ">
          <div className="flex items-center justify-center">
            <img src={circ} loading="lazy" alt="" className="lg:h-16 h-9" />
            <p
              className="lg:text-3xl text-base relative lg:-left-10 -left-6"
              style={{ color: '#06045B' }}
            >
              1
            </p>
          </div>
          <p className="text-base font-bold text-center mt-9">
            You create a profile
          </p>
          <p className="text-sm font-light grey-text text-center mt-4">
            Get to know more detailed strategic approach
          </p>
        </div>

        <img
          src={dimensions.width < 840 ? dashArr : dashOne}
          alt="dash"
          loading="lazy"
          className="lg:w-24 w-2 lg:h-6 h-20 self-center lg:self-auto mb-8 lg:mb-0 relative top-3"
        />

        <div className="w-64 self-center lg:self-auto">
          <div className="flex items-center justify-center">
            <img src={circ} alt="" loading="lazy" className="h-9 lg:h-16" />
            <p
              className="lg:text-3xl text-base relative lg:-left-10 -left-6"
              style={{ color: '#06045B' }}
            >
              2
            </p>
          </div>
          <p className="text-base font-bold text-center mt-9">
            Get matched with a project
          </p>
          <p className="text-sm font-light grey-text text-center mt-4">
            Get to know more detailed strategic approach
          </p>
        </div>

        <img
          loading="lazy"
          src={dimensions.width < 840 ? dashArr : dashTwo}
          alt="dash"
          className="lg:w-24 w-2 lg:h-6 h-20 self-center lg:self-auto mb-10 lg:mb-0 relative top-6"
        />

        <div className="w-64 self-center lg:self-auto">
          <div className="flex items-center justify-center">
            <img src={circ} loading="lazy" alt="" className="h-9 lg:h-16" />
            <p
              className="lg:text-3xl text-base relative lg:-left-10 -left-6"
              style={{ color: '#06045B' }}
            >
              3
            </p>
          </div>
          <p className="text-base font-bold text-center mt-9">
            Deliver & build portfolio
          </p>
          <p className="text-sm font-light grey-text text-center mt-4">
            Get to know more detailed strategic approach
          </p>
        </div>
      </div>
    </div>
  );
}
