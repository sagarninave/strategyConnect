import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../../../../../assets/img/bigEmail.svg';

export default function index() {
  return (
    <div className=" purple_re flex px-8 py-4 lg:py-0  lg:px-0 justify-between flex-col lg:flex-row items-center content-center lg:pr-32 ">
      <img src={phone} loading="lazy" alt="hands" className="hidden lg:flex" />

      <div className="lg:w-5/12 w-full mx-auto lg:mx-0">
        <p className="lg:text-2xl text-base text-white text-center lg:text-left font-bold">
          Have Something in mind? Let’s connect.
        </p>
        <p className="lg:text-base text-white lg:text-left text-center mt-2 text-xs  font-thin">
          Connect with us and tell us your needs and we will come back with a
          suitable proposal
        </p>
      </div>

      <Link
        to="/contact"
        className=" w-32 flex justify-center  hover:bg-gray-100 items-center  mt-8 lg:mt-0 rounded bg-white purple_text lg:h-12 h-10 flex justify-center items-center text-base xl:text-xl cursor-pointer"
      >
        <p>Contact Us</p>
      </Link>
    </div>
  );
}
