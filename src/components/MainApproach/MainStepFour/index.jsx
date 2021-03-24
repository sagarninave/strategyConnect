import React, { useState, useEffect } from 'react';
import paper from '../../../assets/img/app4.svg';
import arrRight from '../../../assets/img/appFor.svg';
import pap6 from '../../../assets/img/pap6.svg';
import pap7 from '../../../assets/img/pap7.svg';

import LineFour from './LineFour';

export default function MainStepFour() {
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
      className="flex px-12 lg:px-32"
      style={{ backgroundColor: 'rgba(140, 170, 226, 0.1)' }}
    >
      <LineFour />
      <div
        style={{
          paddingTop:
            dimensions.width > 1290 ? 225 : dimensions.width == 1280 ? 216 : 40,
        }}
        className="lg:ml-8 ml-0"
      >
        {/* bottom with top border */}
        <div className=" relative -top-5">
          <p style={{ color: '#38369A' }} className="text-xs font-bold">
            CLOSURE / STEP-4
          </p>
          <h1 className="lg:text-3xl text-lg font-bold mt-3">
            Final Readout and Closure
          </h1>
          <p
            className="font-light mt-4 text-base lg:w-3/4 w-full"
            style={{ color: '#3B3E41' }}
          >
            Deliverables are consolidated including the necessary
            recommendations to the client
          </p>

          <div className="flex flex-col lg:flex-row items-center mt-20">
            <img
              src={paper}
              loading="lazy"
              alt=""
              style={{ height: dimensions.width < 740 ? 230 : 430 }}
            />
            <div className="lg:ml-14 ml-0">
              <div>
                <img src={pap6} alt="" className="h-6 lg:h-auto" />
                <p className="font-bold text-base mt-3">
                  Develop final deliverables
                </p>

                <ul>
                  <li className="flex mt-3">
                    <img src={arrRight} alt="" className="relative -top-3" />
                    <p className="grey-text text-base font-light ml-3  lg:w-4/5 w-full">
                      Provide recommendations and align on final outcomes
                    </p>
                  </li>
                </ul>
              </div>

              {/* border two */}
              <div
                style={{
                  borderTop: ' 0.5px solid rgba(0,0,0,0.15)',
                  marginTop: 38,
                  paddingTop: 40,
                }}
                className="mb-16 lg:mb-0"
              >
                <img src={pap7} alt="" className="h-6 lg:h-auto" />
                <p className="font-bold text-base mt-3">
                  Hand-off to the client
                </p>

                <ul>
                  <li className="flex mt-3">
                    <img src={arrRight} alt="" className="relative -top-3" />
                    <p className="grey-text text-base font-light ml-3  lg:w-4/5 w-full">
                      All relevant material is handed over with final knowledge
                      transfer
                    </p>
                  </li>
                </ul>
              </div>
              {/* border two */}
            </div>
          </div>
        </div>
        {/* bottom with top border */}
      </div>
    </div>
  );
}
