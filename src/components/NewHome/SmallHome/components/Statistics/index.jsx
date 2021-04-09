import React from 'react';
import Client from '../../../../../assets/img/Clients.png';
import Consultant from '../../../../../assets/img/Consultants.png';
import Rocket from '../../../../../assets/img/Rocket.png';

function index() {
  const imageList = [
    {
      img: Consultant,
      number: '5000+',
      text: 'Consultants',
    },
    {
      img: Client,
      number: '100+',
      text: 'Clients',
    },
    {
      img: Rocket,
      number: '200+',
      text: 'Projects Delivered',
    },
  ];

  return (
    <div>
      <div className="lg:mx-56 sm:mx-32 mx-6 pt-10 topborder flex justify-between">
        {imageList.map((item) => {
          return (
            <div className="flex flex-col items-center content-center">
              <img
                src={item.img}
                loading="lazy"
                alt="chat"
                className="statisticImg h-6 lg:h-10 md:mt-14"
              />
              <p className="text-lg md:text-2xl font-bold md:mt-7 md:mb-3 leading-10">
                {item.number}
              </p>
              <p className="text-base font-normal text-center md:mb-10 lg:leading-7 grey-text">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
}

export default index;