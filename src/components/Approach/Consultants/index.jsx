import React from 'react';
import chat from '../../../assets/img/expertOne.svg';
import world from '../../../assets/img/worldwide.svg';
import rocket from '../../../assets/img/rocket.svg';

export default function Consultants() {
  const imageList = [
    {
      img: chat,
      number: '5000+',
      text: 'Consultants & Experts',
    },
    {
      img: world,
      number: '100+',
      text: 'Clients Covered',
    },
    {
      img: rocket,
      number: '200+',
      text: 'Projects Delivered',
    },
  ];

  return (
    <div className="lg:mx-56 mx-6 pt-8 flex  lg:mb-0 mb-12 justify-between">
      {imageList.map((item) => {
        return (
          <div className="flex flex-col items-center content-center">
            <img
              src={item.img}
              loading="lazy"
              alt="chat"
              className="sm:h-12 h-10 md:mt-14"
            />
            <p className="text-lg md:text-2xl font-bold md:mt-7 md:mb-3 leading-10">
              {item.number}
            </p>
            <p className="md:text-base text-sm font-normal  text-center md:mb-10 lg:leading-7 grey-text">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
