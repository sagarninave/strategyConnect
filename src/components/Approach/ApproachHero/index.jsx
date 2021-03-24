import React from 'react';
import guys from '../../../assets/img/test.webp';
import { Link } from 'react-router-dom';

export default function ApproachHero() {
  return (
    <div className="flex flex-col lg:flex-row md:px-16 xl:px-32 px-8 lg:py-48 pt-24  items-center refined-bg">
      <div>
        <h1 className="lg:text-4xl text-base  md:text-center lg:text-left font-bold lg:leading-10">
          Hire world class strategists for your business
        </h1>
        <p className="grey-text text-sm lg:text-lg md:mx-auto lg:mx-0 w-2/3 font-light mt-7">
          Our strategic approach focuses on challenging the status quo in any
          industry.
        </p>
        <button className="mt-10 flex mx-auto lg:mx-0  hover:bg-indigo-900 font-light justify-center items-center py-2 px-3 rounded purple text-white text-lg cursor-pointer">
          <Link to="/freelancer/sign-up/step-one">Join our network</Link>
        </button>
      </div>
      <img
        src={guys}
        alt="icon-img"
        loading="lazy"
        className="h-52 lg:h-96 mt-10 lg:mt-0"
      />
    </div>
  );
}
