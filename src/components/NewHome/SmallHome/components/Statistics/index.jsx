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
      <div className="flex pt-8 mx-5 lg:mb-12 lg:mb-0 justify-between">
        {imageList.map((item) => {
          return (
            <div className="flex flex-col items-center content-center">
              <img
                src={item.img}
                loading="lazy"
                alt="chat"
                className="statisticImg h-6 lg:h-10 md:mt-14"
              />
              <p className="text-lg md:text-3xl text-black font-bold  mt-2 md:mt-7 md:mb-3 leading-10">
                {item.number}
              </p>
              <p className="text-lg md:text-black text-2xl font-medium text-black text-center md:mb-10 lg:leading-7 grey-text">
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