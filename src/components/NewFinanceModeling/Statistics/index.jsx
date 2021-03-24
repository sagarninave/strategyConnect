import React from 'react';
import Client1 from '../../../assets/img/Client1.png';
import Consultant1 from '../../../assets/img/Consultant1.png';
import Rocket from '../../../assets/img/rocket.svg';

function index() {
  const imageList = [
    {
      img: Consultant1,
      number: '5000+',
      text: 'Consultants',
    },
    {
      img: Client1,
      number: '100+',
      text: 'Clients',
    },
  ];

  return (
    <div>
      <div className="pt-8 flex  lg:mb-0 mb-12 justify-between">
        {imageList.map((item) => {
          return (
            <div className="flex flex-col items-center content-center">
              <img
                src={item.img}
                loading="lazy"
                alt="chat"
                className="sm:h-12 h-10 md:mt-14"
                style={{ width: "87px", height: "auto" }}
              />
              <p className="text-x3l md:text-3xl text-black font-bold md:mt-7 md:mb-3 leading-10">
                {item.number}
              </p>
              <p className="md:text-black text-2xl font-medium text-black text-center md:mb-10 lg:leading-7 grey-text">
                {item.text}
              </p>
            </div>
          );
        })}
        <div className="flex flex-col items-center content-center">
          <img
            src={Rocket}
            loading="lazy"
            alt="rocket"
            className="sm:h-12 h-10 md:mt-14"
            style={{ width: "70px", height: "auto" }}
          />
          <p className="text-x3l md:text-3xl text-black font-bold md:mt-7 md:mb-3 leading-10">
            200+
          </p>
          <p className="md:text-black text-2xl font-medium text-black text-center md:mb-10 lg:leading-7 grey-text">
            Projects Delivered
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default index;