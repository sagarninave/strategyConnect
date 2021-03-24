import React, { useRef, useEffect, useState } from 'react';
import chat from '../../../assets/img/chatBox.webp';
import person from '../../../assets/img/appTest1.webp';
import personTwo from '../../../assets/img/appTest2.webp';
// import left from '../../../assets/img/left-arr-black.svg';
import disleft from '../../../assets/img/disLeft.svg';
// import disRight from '../../../assets/img/disRight.svg';
import right from '../../../assets/img/right-arr-black.svg';
import Carousel from 'react-elastic-carousel';

export default function Testimonials() {
  const carousel = useRef();
  const testimony = [
    {
      img: person,
      name: 'Leo Austin Morton',
      job: 'Health care strategist',
      text:
        'You made it so simple. My new site is so much faster and easier to workwith than my old site. I just choose the page, make the change and click save.',
    },
    {
      img: personTwo,
      name: 'Catherine Simmons',
      job: 'Automation strategist',
      text:
        'You made it so simple. My new site is so much faster and easier to work with than my old site. ',
    },
    {
      img: personTwo,
      name: 'Simmons Catherine',
      job: 'Design strategist',
      text:
        'You made it so simple. My new site is so much faster and easier to workwith than my old site. I just choose the page, make the change and click save.',
    },
    {
      img: person,
      name: 'Leo Austin Morton',
      job: 'Artificial intelligence strategist',
      text:
        'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
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
    <div
      style={{ backgroundColor: 'rgba(179, 244, 250, 0.27)' }}
      className="lg:px-16 px-8 lg:py-32 lg:pt-32 pt-16 pb-16 flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="lg:w-6/12">
        <img
          src={chat}
          alt="chatImage"
          className="h-44 mx-auto lg:mx-0 lg:h-56"
        />

        <p className="lg:text-3xl text-xl text-center  lg:text-left font-bold mt-10">
          What they say ?
        </p>
        <p className="grey-text lg:text-base text-sm text-center font-light mt-7">
          Our strategic approach focuses on challenging the status quo{' '}
        </p>
      </div>

      <div className="lg:flex items-center hidden  flex-wrap">
        <div
          style={{
            border: '2px solid #1CC8EE',
            // maxWidth: dimensions.width == 1024 ? 258 : 358,
          }}
          className="xl:p-7 p-3 rounded ml-10 mb-10 fourBlue"
        >
          <p className="leading-7 font-medium xl:text-base text-sm text-black font-light">
            {testimony[0].text}
          </p>
          <div className="mt-7 flex items-center  ">
            <img
              loading="lazy"
              src={testimony[0].img}
              alt="person"
              className="h-12"
            />
            <div className="ml-4">
              <p className="text-base font-bold">{testimony[0].name}</p>
              <p className="text-sm grey-text font-light">{testimony[0].job}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            border: '2px solid #1CC8EE',
            // maxWidth: dimensions.width == 1024 ? 258 : 358,
          }}
          className="xl:p-7 p-3 rounded ml-10 mb-10 fourBlue"
        >
          <p className="leading-7 font-medium xl:text-base text-sm text-black font-light">
            {testimony[1].text}
          </p>
          <div className="mt-7 flex items-center  ">
            <img
              src={testimony[1].img}
              loading="lazy"
              alt="person"
              className="h-12"
            />
            <div className="ml-4">
              <p className="text-base font-bold">{testimony[1].name}</p>
              <p className="text-sm grey-text font-light">{testimony[1].job}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            border: '2px solid #1CC8EE',
            // maxWidth: dimensions.width == 1024 ? 258 : 358,
          }}
          className="xl:p-7 p-3 rounded ml-10 mb-10 fourBlue"
        >
          <p className="leading-7 font-medium xl:text-base text-sm text-black font-light">
            {testimony[2].text}
          </p>
          <div className="mt-7 flex items-center  ">
            <img
              src={testimony[2].img}
              loading="lazy"
              alt="person"
              className="h-12"
            />
            <div className="ml-4">
              <p className="text-base font-bold">{testimony[2].name}</p>
              <p className="text-sm grey-text font-light">{testimony[2].job}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            border: '2px solid #1CC8EE',
            // maxWidth: dimensions.width == 1024 ? 258 : 358,
          }}
          className="xl:p-7 p-3 rounded ml-10 relative -top-4 mb-10 fourBlue"
        >
          <p className="leading-7 font-medium xl:text-base text-sm text-black font-light">
            {testimony[3].text}
          </p>
          <div className="mt-7 flex items-center  ">
            <img
              src={testimony[3].img}
              loading="lazy"
              alt="person"
              className="h-12"
            />
            <div className="ml-4">
              <p className="text-base font-bold">{testimony[3].name}</p>
              <p className="text-sm grey-text font-light">{testimony[3].job}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full block lg:hidden">
        <Carousel
          ref={carousel}
          className="mt-16 lg:hidden"
          showArrows={false}
          enableSwipe={true}
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
            { width: 850, itemsToShow: 3 },
            { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
            { width: 1450, itemsToShow: 5 },
            { width: 1750, itemsToShow: 6 },
          ]}
          pagination={false}
        >
          {testimony.map((item, index) => {
            return (
              <div
                key={index + 'kdjvnm'}
                style={{ border: '2px solid #1CC8EE', maxWidth: 328 }}
                className="p-4 rounded"
              >
                <p className="leading-7 font-medium text-base text-black font-light">
                  {item.text}
                </p>
                <div className="mt-7 flex items-center  ">
                  <img
                    src={item.img}
                    loading="lazy"
                    alt="person"
                    className="h-12"
                  />
                  <div className="ml-4">
                    <p className="text-base font-bold">{item.name}</p>
                    <p className="text-sm grey-text font-light">{item.job}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="flex items-center relative left-4 w-2/6  mt-16 mx-auto">
          <img
            onClick={() => carousel.current.slidePrev()}
            src={disleft}
            loading="lazy"
            alt=""
            style={{ height: 26 }}
            className="mr-4 cursor-pointer"
          />
          <img
            onClick={() => carousel.current.slideNext()}
            src={right}
            loading="lazy"
            alt=""
            style={{ height: 26 }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
