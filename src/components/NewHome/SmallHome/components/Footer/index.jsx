/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import logo from '../../../../../assets/img/logo.svg';
import linkedin from '../../../../../assets/img/linkedin.svg';
import twitter from '../../../../../assets/img/twitter.svg';
import medium from '../../../../../assets/img/medium.svg';
import location from '../../../../../assets/img/location.svg';
import mail from '../../../../../assets/img/mail.svg';
import tech from '../../../../../assets/img/tech.svg';
import phone from '../../../../../assets/img/phone-call.svg';
import { Link } from 'react-router-dom';

function index() {
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
    <footer className="bg-black xl:px-16 2xl:px-32 px-8 ">
      <div className="flex flex-col lg:flex-row justify-between items-center  pt-9 bg-black">
        {/* column one */}
        <div className="flex  md:mr-8 lg:flex-col justify-between   relative lg:top-4 w-full lg:w-auto ">
          <Link
            to="/"
            className={`${
              dimensions.width < 640 ? '' : 'footer_border'
            } flex items-center cursor-pointer  lg:-mt-12`}
          >
            <img
              src={logo}
              loading="lazy"
              alt="StategyConnectLogo"
              className="h-6 w-6 cursor-pointer"
            />
            <p
              className={`nunito text-white text-base ml-1.5 font-bold relative top-0.5 cursor-pointer ${
                dimensions.width < 640 ? 'hidden' : ''
              }`}
            >
              StrategyConnect
            </p>
          </Link>

          <p className={`text-base text-white mt-6 hidden lg:flex `}>
            Social Media
          </p>

          <div
            className={`flex items-center relative w-2/5 lg:w-auto justify-between mt-4  ${
              dimensions.width < 640 ? '-top-2' : ''
            }`}
          >
            <img
              src={linkedin}
              loading="lazy"
              alt="linkedIn"
              className="cursor-pointer"
            />
            <img
              src={twitter}
              loading="lazy"
              alt="twitter"
              className="cursor-pointer"
            />
            <img
              src={medium}
              loading="lazy"
              alt="medium"
              className="cursor-pointer"
            />
          </div>

          {/* <p className="no-underline text-white lg:grey-text text-xl text-left cursor-pointer hover:text-gray-300 mt-4 ">
            <Link style={{ borderBottom: '1px solid white' }} to="/freelancer">
              Freelance
            </Link>
          </p> */}
        </div>
        {/* column one */}

        {/* column two */}
        <div
          className={` text-white   ${
            dimensions.width < 1040 ? '' : 'right-divide-line'
          }  lg:pr-10  relative xl:pr-10 2xl:pr-20 lg:top-2 `}
        >
          <p
            className={`text-base font-semi-bold lg:mb-2  ${
              dimensions.width < 640 ? 'hidden' : ''
            }`}
          >
            Website
          </p>

          <ul
            className={`flex  flex-row lg:flex-col w-72   lg:w-auto mt-4 lg:mt-0  lg:justify-between mx-auto flex-wrap`}
          >
            <li className="no-underline text-white lg:grey-text  hover:text-gray-300 cursor-pointer text-sm text-left lg:mt-0 mt-2 mr-8 lg:mr-0 font-thin">
              <Link to="/">Home</Link>
            </li>
            <li className="no-underline text-white lg:grey-text text-sm hover:text-gray-300 cursor-pointer text-left lg:mt-3 mt-2 mr-8 lg:mr-0 font-thin">
              <Link to="/approach">Approach</Link>
            </li>
            <li className="no-underline text-white lg:grey-text text-sm text-left cursor-pointer hover:text-gray-300 lg:mt-3 mt-2 mr-8 lg:mr-0 font-thin">
              <Link to="/caseStudy">Case Studies</Link>
            </li>
            <li className="no-underline text-white lg:grey-text text-sm text-left cursor-pointer hover:text-gray-300 lg:mt-3 mt-2 mr-8 lg:mr-0 font-thin">
              <Link to="/about">About Us</Link>
            </li>
            {/* <li className="no-underline text-white lg:grey-text text-sm text-left cursor-pointer hover:text-gray-300 lg:mt-3 mt-2 mr-8 lg:mr-0 font-thin">
              <Link to="/freelancer">Join as Freelncer</Link>
            </li>
            <li className="no-underline text-white lg:grey-text text-sm text-left cursor-pointer hover:text-gray-300 lg:mt-3 mt-2 mr-8 lg:mr-0 font-thin">
              <Link to="/">Privacy Policy</Link>
            </li> */}
          </ul>
        </div>

        {/* column two */}

        {/* column three */}
        <div
          className={`text-white ${
            dimensions.width < 1040 ? '' : 'right-divide-line'
          } lg:pr-10 2xl:pr-20 xl:pr-10  relative top-2 -left-5 lg:h-56 `}
        >
          <p className="text-base hidden lg:flex font-semi-bold">Contact Us</p>
          <ul className="flex flex-col">
            <li className="no-underline grey-text text-sm  text-left md:mt-4 mt-8 flex font-thin">
              <img
                src={location}
                loading="lazy"
                alt="location"
                className="self-start"
              />
              <span>
                <p className="ml-6 w-64 lg:w-48 xl:w-80">
                  Feed Speed FZ LL, TwoFour54,
                  Abu Dhabi.
                </p>
                {/* <p className="ml-6 w-80 hidden xl:block footer-top-line">
                  8 The Greens, Dover, Delaware 19901, USA.
                </p> */}
              </span>
            </li>
            <li className="no-underline grey-text text-sm flex  md:mt-4 mt-8 text-left font-thin">
              <img src={mail} loading="lazy" alt="location" className="" />
              <p className="ml-6">info@strategyconnect.co</p>
            </li>
            <li className="no-underline grey-text text-sm flex  md:mt-8 mt-8 font-thin">
              <img src={phone} loading="lazy" alt="location" className="" />
              <p className="ml-6">+971 527344538</p>
            </li>
          </ul>
        </div>

        {/* column three */}

        {/* column four */}
        <div className="text-white hidden relative sm:-left-8 lg:block">
          <p className="text-base font-semi-bold">
            Get the latest updates in your inbox
          </p>

          <div className="w-72 flex mt-6 items-center">
            <input
              type="text"
              placeholder="Email ID"
              className="focus:outline-none py-1.5 border-none px-3 bg-white text-black font-thin text-base rounded"
            />
            <p className="py-2 px-4 ml-2 hover:bg-indigo-900 text-white purple rounded cursor-pointer text-sm">
              Subscribe
            </p>
          </div>
          <p className="grey-text w-72 mt-3 text-sm text-left  font-thin">
            Don’t worry, we hate spam too.
          </p>

          <div className="flex tech-top-line items-center">
            <p className="grey-text text-sm text-left  font-thin">Backed by</p>
            <img src={tech} loading="lazy" alt="techstars" className="ml-4" />
          </div>
        </div>

        {/* column four */}
      </div>
      <div className="py-3 mt-8 bg-black top-divide-line">
        <p className="text-center grey-text text-sm">
          Copyright @ 2021 StrategyConnect Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default index;
