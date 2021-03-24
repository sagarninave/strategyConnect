import React, { useEffect, useState } from 'react';
import icon from '../../../assets/img/Chart-pie.svg';
import journey from '../../../assets/img/journey.png';
import box from '../../../assets/img/jBox.svg';
import bulb from '../../../assets/img/jBulb.svg';
import heart from '../../../assets/img/jHeart.svg';
import plane from '../../../assets/img/jPlane.svg';
import ReactFloaterJs from 'react-floaterjs';

function OurValues() {
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
  const items = [
    {
      img: icon,
      title: 'Dream big',
      text:
        'The Strategic Planning template guides teams or individuals through various exercises.',
    },
    {
      img: icon,
      title: 'Lead by serving others',
      text:
        'The Strategic Planning template guides teams or individuals through various exercises.',
    },
    {
      img: icon,
      title: 'Practice extraordinary kindness',
      text:
        'The Strategic Planning template guides teams or individuals through various exercises.',
    },
    {
      img: icon,
      title: 'Move intentionally fast',
      text:
        'The Strategic Planning template guides teams or individuals through various exercises.',
    },
  ];
  return (
    <div className="purple_re sm:py-16 py-8  xl:mt-14 mt-0 xl:px-64 sm:px-24 px-4">
      <p className="text-sm uppercase text-gray-300">Our Values</p>
      <p className="sm:text-3xl text-xl font-semibold text-white sm:mt-5 mt-2">
        Our core values to reach best-in-class
      </p>

      <div className="flex  xl:flex-row flex-col items-center justify-between">
        <ul className="text-white">
          {items.map((item, i) => {
            return (
              <div className="flex mt-8">
                <img
                  src={item.img}
                  loading="lazy"
                  alt="pie"
                  className="relative sm:-top-4 -top-0 mr-8 h-5 sm:h-auto"
                />

                <div>
                  <p className="sm:text-base text-sm font-semibold text-white ">
                    {item.title}
                  </p>
                  <p className="sm:text-sm text-xs mt-2 font-thin">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
        <div className=" sm:hidden  xl:block lg:ml-16 relative  mt-20 lg:mt-0 mx-auto">
          <ReactFloaterJs>
            <img
              src={plane}
              loading="lazy"
              alt="plane"
              className="absolute lg:-top-16 -top-10 lg:-right-20 -right-2 h-16 lg:h-24"
            />
          </ReactFloaterJs>
          <ReactFloaterJs>
            <img
              src={bulb}
              loading="lazy"
              alt="plane"
              className="absolute top-28 lg:-left-20 -left-10 h-16 lg:h-24"
            />
          </ReactFloaterJs>
          <ReactFloaterJs>
            <img
              src={heart}
              loading="lazy"
              alt="plane"
              className="absolute lg:top-96 top-80 lg:-left-20 h-16 lg:h-24"
            />
          </ReactFloaterJs>
          <ReactFloaterJs>
            <img
              src={box}
              loading="lazy"
              alt="plane"
              style={{ top: dimensions.width < 640 ? 420 : 400 }}
              className="absolute  lg:left-72 left-64 h-16 lg:h-24"
            />
          </ReactFloaterJs>

          <img
            src={journey}
            loading="lazy"
            style={{ height: dimensions.width < 640 ? 460 : 480 }}
            alt="ruby"
            className="ruby_img w-full lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default OurValues;
