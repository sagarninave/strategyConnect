import React, { useState, useEffect } from 'react';
import paper from '../../../assets/img/app2.svg';
import pap2 from '../../../assets/img/pap2.svg';
import p from '../../../assets/img/p.svg';
import pap3 from '../../../assets/img/pap3.svg';
import female from '../../../assets/img/femaleDash.png';
import arrRight from '../../../assets/img/appFor.svg';
import SecondLine from './SecondLine';

export default function MainStepTwo() {
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
    <div className="flex lg:px-32 px-8 " style={{ backgroundColor: 'white' }}>
      <SecondLine />
      <div
        style={{
          paddingTop:
            dimensions.width > 1290 ? 204 : dimensions.width == 1280 ? 167 : 40,
        }}
        className="lg:ml-4 ml-0"
      >
        <div
          className="flex flex-col lg:flex-row items-center lg:w-8/12 w-full pb-10"
          style={{ borderBottom: '0.6px solid rgba(0, 0, 0,0.15)' }}
        >
          <img
            src={p}
            alt=""
            style={{
              left: dimensions.width == 1280 ? -91 : -105,
              top: dimensions.width == 1280 ? 0 : -5,
            }}
            className="relative hidden xl:flex"
          />
          <img
            src={female}
            loading="lazy"
            alt=""
            className=""
            style={{ height: dimensions.width < 740 ? 70 : 100 }}
          />
          <p
            style={{ color: '#3B3E41' }}
            className="ml-3 lg:text-sm text-base mt-6 lg:mt-0"
          >
            We will assign dedicated consultants and industry experts needed to
            deliver on the scope of work.
          </p>
        </div>

        {/* bottom with top border */}
        <div className="mt-10">
          <p style={{ color: '#38369A' }} className="text-xs font-bold">
            KICK-OFF / STEP-2
          </p>
          <h1 className="lg:text-3xl text-lg font-bold mt-3">
            Resource Allocation and Kick-off
          </h1>
          <p
            className="font-light mt-4 text-base lg:w-3/4 w-full"
            style={{ color: '#3B3E41' }}
          >
            Set up an A+ team of experts and layout the methodology of the
            engagement.
          </p>

          <div className="flex flex-col lg:flex-row items-center mt-20">
            <img
              loading="lazy"
              src={paper}
              alt=""
              style={{ height: dimensions.width < 740 ? 230 : 430 }}
            />
            <div className="lg:ml-14 ml-0 ">
              <div className=" mt-8 lg:mt-0">
                <img src={pap2} alt="" className="h-6 lg:h-auto" />
                <p className="font-bold text-base mt-3">
                  Finalize team structure and resources
                </p>

                <ul>
                  <li className="flex mt-3">
                    <img src={arrRight} alt="" className="relative -top-3" />
                    <p className="grey-text text-base font-light lg:w-3/5 w-full ml-3">
                      Review proposed resource and SME profiles and finalize the
                      team structure
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
                <img src={pap3} alt="" className="h-6 lg:h-auto" />
                <p className="font-bold text-base mt-3">
                  Align on methodology and key milestones
                </p>

                <ul>
                  <li className="flex mt-3">
                    <img src={arrRight} alt="" className="relative -top-3" />
                    <p className="grey-text text-base font-light lg:w-3/5 w-full ml-3">
                      Discuss research plan (survey, interviews, etc.) and key
                      activities
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
