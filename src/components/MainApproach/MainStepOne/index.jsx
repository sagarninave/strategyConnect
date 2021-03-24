import React, { useState, useEffect } from 'react';
import paper from '../../../assets/img/app1.svg';
import pie from '../../../assets/img/pap1.svg';
import arrRight from '../../../assets/img/appFor.svg';
import FirstLine from './FirstLine';

export default function MainStepOne() {
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
    <div
      className="flex lg:px-32 px-8 pb-20 lg:pb-0"
      style={{ backgroundColor: 'rgba(177,175,229,0.05)' }}
    >
      <FirstLine />
      <div
        style={{
          paddingTop:
            dimensions.width > 1290 ? 204 : dimensions.width == 1280 ? 175 : 40,
        }}
        className="ml-4"
      >
        <p style={{ color: '#38369A' }} className="text-xs font-bold">
          SCOPE / STEP-1
        </p>
        <h1 className="lg:text-3xl text-lg font-bold mt-3">
          Scope and Engagement Model Alignment
        </h1>
        <p
          className="font-light mt-4 text-base lg:w-3/4 "
          style={{ color: '#3B3E41' }}
        >
          Start with a definition of the scope of work and a set an engagement
          model with on-demand access to top professionals who will align to
          your strategic needs.
        </p>

        <div className="flex lg:flex-row flex-col items-center mt-16">
          <img
            src={paper}
            alt=""
            loading="lazy"
            style={{ height: dimensions.width > 780 ? 430 : 200 }}
          />
          <div className="lg:ml-14 mx-auto md:w-2/6 mt-16 lg:mt-0 w-full lg:w-auto ">
            <img src={pie} alt="" className="hidden lg:flex" />
            <p className="font-bold text-base mt-3">
              Align on problem statement
            </p>

            <ul>
              <li className="flex mt-3">
                <img src={arrRight} alt="" className="" />
                <p className="grey-text text-base font-light ml-3">
                  Key deliverables
                </p>
              </li>
              <li className="flex mt-3">
                <img src={arrRight} alt="" className="" />
                <p className="grey-text text-base font-light ml-3">
                  Resource requirements
                </p>
              </li>
              <li className="flex mt-3">
                <img src={arrRight} alt="" className="" />
                <p className="grey-text text-base font-light ml-3">
                  Engagement model
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
