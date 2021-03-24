import React, { useEffect, useState } from 'react';
import pie from '../../../assets/img/xaasPie.svg';

export default function WhatWeDO() {
  const textArray = [
    {
      heading: 'Increase Growth Rate',
    },
    {
      heading: 'Revenue recognition',
    },
    {
      heading: 'Pricing Strategy',
    },
    {
      heading: 'Reduce Bounce Rate',
    },
    {
      heading: 'Scale Budget Efficiently',
    },
    {
      heading: 'Integrations',
    },
  ];
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
    <div className="xl:px-32 mx-4 ">
      <div
        className={`${
          dimensions.width < 768 ? '' : 'padding_top_border'
        } mt-32 `}
      >
        <p className="text-center lg:text-3xl text-xl font-bold">What we do</p>
        <p className="lg:mt-4 mt-2 lg:text-base text-lg text-center lg:w-3/6 w-full mx-auto font-thin">
          we work alongside your team and brand to be your external growth team,
          with in-house team. we create high performance content.
        </p>
      </div>

      <div className="lg:mt-10 flex items-center w-full  justify-between mx-auto  flex-wrap">
        {textArray.map((item, i) => {
          return (
            <div className="lg:w-60 w-full mt-10 lg:ml-16 mx-4 lg:mx-0" key={i}>
              <img src={pie} alt="pie" className="h-6" />
              <p className="font-bold text-base mt-2">{item.heading}</p>
              <p className="font-thin text-sm mt-2 leading-6">
                Understand the speed at which your company collects cash by
                measuring Days Sales Outstanding
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
