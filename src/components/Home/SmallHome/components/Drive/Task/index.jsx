/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import hands from '../../../../../../assets/img/tabHands.png';
import handTwo from '../../../../../../assets/img/tabTwo.png';
import handThree from '../../../../../../assets/img/tabThree.png';
import task from '../../../../../../assets/img/task.svg';
import network from '../../../../../../assets/img/network.svg';
import business from '../../../../../../assets/img/business.svg';

export default function index() {
  const [activeOne, setActiveOne] = useState(true);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  const [actyiveImage, setActiveImage] = useState(hands);
  return (
    <div className="xl:mx-32 mx-8 lg:mt-20 mt-20 pale">
      <div className="xl:w-6/12 w-8/12 w_border bg-white relative lg:h-16 -top-7 hidden lg:flex  px-7 pt-3 mx-auto rounded items-center justify-between">
        <p
          onClick={() => {
            setActiveOne(true);
            setActiveTwo(false);
            setActiveThree(false);
            setActiveImage(hands);
          }}
          className={`text-base font-semibold  ${
            activeOne ? 'active_purple' : 'inactive_purple'
          }   cursor-pointer`}
        >
          On-demand teams
        </p>
        <p
          onClick={() => {
            setActiveOne(false);
            setActiveTwo(true);
            setActiveThree(false);
            setActiveImage(handTwo);
          }}
          className={`text-base font-semibold  
          ${activeTwo ? 'active_purple' : 'inactive_purple'}
           cursor-pointer`}
        >
          Business library
        </p>
        <p
          onClick={() => {
            setActiveOne(false);
            setActiveTwo(false);
            setActiveThree(true);
            setActiveImage(handThree);
          }}
          className={`text-base font-semibold  
          ${activeThree ? 'active_purple' : 'inactive_purple'}
           cursor-pointer`}
        >
          Easy integration
        </p>
      </div>

      <p
        className={`text-base w-6/12 mx-auto hidden ${
          activeOne ? 'lg:flex' : ''
        } grey-text text-center  font-thin`}
      >
        Access top experts, consulting and tech boutiques curated from diverse
        industries and sectors.
      </p>

      <p
        className={`text-base w-6/12 mx-auto hidden ${
          activeTwo ? 'lg:flex' : ''
        } grey-text text-center relative left-10 font-thin`}
      >
        Tap into the cumulative knowledge of 200+ projects and 5000+ experts.
      </p>

      <p
        className={`text-base w-6/12 mx-auto hidden ${
          activeThree ? 'lg:flex' : ''
        } grey-text text-center font-thin`}
      >
        Integrated with best-in-class project management tools that fit
        seamlessly with your operations.
      </p>

      <img
        src={actyiveImage}
        loading="lazy"
        alt="tabHands"
        className="mt-10 mx-auto h-1/12 hidden lg:flex"
      />

      <div className="lg:hidden flex flex-col py-8 px-5 items-center">
        <div className="flex">
          <img
            src={task}
            loading="lazy"
            alt="developer"
            className="relative sm:-top-7"
          />
          <div className="ml-4">
            <p className="text-base font-semibold text-black">
              Task Management
            </p>
            <p className="mt-2 grey-text text-sm font-thin">
              Integrated with best-in-class task management applications.
              Integrated with best-in-class task.
            </p>
          </div>
        </div>

        <div className="flex mt-4 sm:mt-16">
          <img
            src={network}
            loading="lazy"
            alt="developer"
            className="relative sm:-top-7"
          />
          <div className="ml-4">
            <p className="text-base font-semibold text-black">
              Digital Collaboration
            </p>
            <p className="mt-2 grey-text text-sm font-thin">
              Integrated with best-in-class task management applications.
              Integrated with best-in-class task.
            </p>
          </div>
        </div>

        <div className="flex mt-4 sm:mt-16">
          <img
            src={business}
            loading="lazy"
            alt="developer"
            className="relative sm:-top-7"
          />
          <div className="ml-4">
            <p className="text-base font-semibold text-black">
              Progress Visibility
            </p>
            <p className="mt-2 grey-text text-sm font-thin">
              Integrated with best-in-class task management applications.
              Integrated with best-in-class task.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
