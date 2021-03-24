import React, { useState, useEffect } from 'react';
import clients from '../../../assets/img/customer.png';
import light from '../../../assets/img/light-b.png';
import handShake from '../../../assets/img/hand-shake.webp';
import skills from '../../../assets/img/skills.webp';

export default function Benefits() {
  const content = [
    {
      img: clients,
      heading: 'Curated Clients',
      text:
        'We only expose you with clients who are crystal clear on their project requirements.',
    },
    {
      img: light,
      heading: 'Knowledge Support',
      text:
        'Access our wide knowledge base to hit the ground running on your engagement from Day 1',
    },
    {
      img: skills,
      heading: 'Core Competence',
      text:
        'Our ML model ensures that you are given opportunities that are aligned to your core strengths.',
    },
    {
      img: handShake,
      heading: 'Trusted Partner',
      text:
        'We manage your engagement pipeline, contracts and payments so that you can focus ',
    },
  ];
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div
      style={{ backgroundColor: '#06045B' }}
      className="lg:py-20 py-8 px-8 lg:px-32"
    >
      <h1 className="lg:text-4xl text-base font-bold text-white text-center leading-10">
        Benefits of joining as consultant
      </h1>
      <p
        style={{ color: '#E0E3E7' }}
        className="text-center lg:w-1/3 mx-auto text-sm lg:text-base mt-4"
      >
        Our strategic approach focuses on challenging the status quo in any
        industry.
      </p>

      <div className="lg:mt-28 mt-20 text-white flex justify-center lg:flex-row items-center md:justify-between flex-wrap">
        {content.map((item, index) => {
          return (
            <div
              key={index + 'bigTime'}
              className={`pt-10 px-5 pb-9 refined-border mt-7 ${
                index > 2 && dimensions.width == 1280 ? 'xl:mt-8' : 'xl:mt-0'
              } `}
            >
              <img
                src={item.img}
                loading="lazy"
                alt="clients"
                className="h-8"
              />
              <p className="text-lg font-semibold mt-6">{item.heading}</p>

              <p className="text-sm mt-5" style={{ color: '#E0E3E7' }}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
