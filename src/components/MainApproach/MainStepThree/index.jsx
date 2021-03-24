import React, { useState, useEffect } from 'react';
import paper from '../../../assets/img/app3.svg';
import pap4 from '../../../assets/img/pap4.svg';
import pap5 from '../../../assets/img/pap5.svg';
import arrRight from '../../../assets/img/appFor.svg';
import LineThree from './LineThree';

export default function MainStepThree() {
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
      className="flex lg:px-32 px-8"
      style={{ backgroundColor: 'rgba(179, 244, 250,0.1' }}
    >
      <LineThree />
      <div className="ml-4 play">
        {/* bottom with top border */}
        <div>
          <p style={{ color: '#38369A' }} className="text-xs font-bold">
            SPRINT / STEP-3
          </p>
          <h1 className="lg:text-3xl text-lg font-bold mt-3">
            Sprint-based Project Execution
          </h1>
          <p
            className="font-light mt-4 text-base lg:w-3/4 w-full"
            style={{ color: '#3B3E41' }}
          >
            Create an agile sprint-based action plan to achieve the deliverables
          </p>

          <div className="flex flex-col lg:flex-row items-center mt-20">
            <img
              src={paper}
              loading="lazy"
              alt=""
              style={{ height: dimensions.width < 780 ? 230 : 430 }}
            />
            <div className="lg:ml-14 ml-0">
              <div className=" mt-8 lg:mt-0">
                <img src={pap4} alt="" className="h-6 lg:h-auto" />
                <p className="font-bold text-base mt-3">
                  Develop preliminary list of hypotheses
                </p>

                <ul>
                  <li className="flex mt-3">
                    <img src={arrRight} alt="" className="relative -top-3" />
                    <p className="grey-text text-base font-light lg:w-3/5 w-full ml-3">
                      Conduct baseline research to formulate initial hypotheses
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
                <img src={pap5} alt="" className="h-6 lg:h-auto " />
                <p className="font-bold text-base mt-3">
                  Conduct analysis and gather insights
                </p>

                <ul>
                  <li className="flex mt-3">
                    <img src={arrRight} alt="" className="relative -top-3" />
                    <p className="grey-text text-base font-light lg:w-3/5 w-full ml-3">
                      Collaborate with your team of experts and consultants
                    </p>
                  </li>
                  <li className="flex mt-3">
                    <img src={arrRight} alt="" className="relative -top-3" />
                    <p className="grey-text text-base font-light lg:w-3/5 w-full ml-3">
                      Leverage daily check-ins to drive progress
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
