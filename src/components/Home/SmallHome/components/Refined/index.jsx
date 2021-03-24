import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import rocket from '../../../../../assets/img/bigRocket.svg';

export default function index() {
  return (
    <div className="flex lg:py-14 py-16 lg:px-32 px-8 justify-between refined-bg md:mt-10 xl:mt-0 mt-12 items-center">
      <div className="flex-1 hidden lg:flex  justify-center">
        <LazyLoadImage
          alt={rocket}
          effect="blur"
          style={{ height: '24rem', flexGrow: 1 }}
          className="hidden lg:flex h-96 flex-1"
          src={rocket}
        />
      </div>
      {/* <img src={rocket} alt="rocket" className="hidden md:flex h-96 flex-1" /> */}

      <div className="flex-1">
        <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
          Contextualized, Specialist Talent Through Flexible Engagement.
        </p>
        <p className="text-base lg:text-sm  lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-6 font-thin">
          Create a handpicked A-team to drive mission-critical projects at the
          speed and accuracy you need
        </p>
        <p className="mt-10 w-32 flex justify-center  hover:bg-indigo-900 items-center py-3 px-3 rounded purple text-white mx-auto lg:mx-0 text-base cursor-pointer">
          <Link to="/approach">Our Approach</Link>
        </p>
      </div>
    </div>
  );
}
