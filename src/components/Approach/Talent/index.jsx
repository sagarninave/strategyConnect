import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import phone from '../../../assets/img/hire.webp';
import CompanySignup from '../../../pages/auth/CompanySignup';

export default function Talent() {
  const [visible, setVisible] = useState(false);
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
    <div
      style={{ backgroundColor: 'rgba(177, 175, 229, 0.22)' }}
      className="flex px-8 py-4 pb-0 pt-11  lg:px-0 justify-between flex-col lg:flex-row items-center content-center lg:pr-32 "
    >
      <img
        src={phone}
        loading="lazy"
        alt="hands"
        className=" sm:flex md:h-60"
      />

      <div className="sm:w-5/12 w-full mx-auto sm:mx-0">
        <p
          style={{ color: '#38369A' }}
          className="sm:text-3xl text-base text-white lg:mt-0 mt-8 text-center lg:text-left font-bold"
        >
          Top talent is in high demand.
        </p>
        <p className="sm:text-base relative left-1 text-black lg:text-left text-center mt-6 text-sm lg:w-9/12  font-thin">
          This can be considered the heart of the online store. we are not
          talking.
        </p>
      </div>

      <p
        style={{ width: dimensions.width == 1024 ? 160 : 160 }}
        onClick={() => {
          setVisible(true);
        }}
        to="/company-signup"
        className="flex justify-center purple_re px-4 mb-12 lg:mb-0 hover:bg-indigo-900 items-center  mt-8 lg:mt-0 rounded text-white h-11 flex justify-center items-center text-base cursor-pointer"
      >
        <p>Start Hiring</p>
      </p>
      <CompanySignup
        visible={visible}
        setVisible={(val) => {
          setVisible(val);
        }}
      />
    </div>
  );
}
