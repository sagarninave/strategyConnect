/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import imageOne from '../../../../../assets/img/img-1Small.png';
import imageTwo from '../../../../../assets/img/img-2Small.png';
import imageThree from '../../../../../assets/img/img-3Small.png';
import imageFour from '../../../../../assets/img/img-4Small.png';
import left from '../../../../../assets/img/left-arr-black.svg';
import disleft from '../../../../../assets/img/disLeft.svg';
import disRight from '../../../../../assets/img/disRight.svg';
import right from '../../../../../assets/img/right-arr-black.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReadMoreAndLess from 'react-read-more-less';
// import seek from '../../../../../assets/img/seek.svg';
// import adi from '../../../../../assets/img/adi.svg';
// import flora from '../../../../../assets/img/flora.svg';
import deloitte from '../../../../../assets/img/deloitte.png';
import booze from '../../../../../assets/img/booze.png';
import gaadi from '../../../../../assets/img/gaadi.png';
import ic from '../../../../../assets/img/ic.png';
import gfh from '../../../../../assets/img/gfh.png';
import madon from '../../../../../assets/img/madon.png';
import fun from '../../../../../assets/img/fun.png';
import besix from '../../../../../assets/img/besix.png';
import dlc from '../../../../../assets/img/dlc.png';
import putnam from '../../../../../assets/img/putnam.png';
import merrill from '../../../../../assets/img/merrill.png';
import mac from '../../../../../assets/img/mac.png';
import KickStart from '../Navbar/KickStart';
import Carousel, { consts } from 'react-elastic-carousel';

function index() {
  const items = [
    {
      id: 1,
      image: imageOne,
      name: 'Vibhor Sahare',
      number: 3,
      text:
        'Hi, I am Vibhor. I have around 10 years of experience in leading P&L, Enterprise Sales, Angel investing etc.',
      Specialised: 'Specialised in E-commerce',
      logos: [deloitte, booze, gaadi],
    },
    {
      id: 5,
      image: imageFour,
      name: 'Ujval Nanavati',
      number: 4,
      text:
        'Hi, I am Ujval Nanavati. I have around 14+ years in various corporate roles in variety of organizations.',
      Specialised: 'Specialised in Finance advisory',
      logos: [ic, gfh, madon],
    },
    {
      id: 2,
      image: imageTwo,
      name: 'Mohamed Nassar',
      number: 4,
      text:
        'Hi, I am Nassar. I am expert in employing modern financial procedures to achieve organizational objectives.',
      Specialised: 'Specialised in Financial Planning',
      logos: [fun, besix, dlc],
    },
    {
      id: 3,
      image: imageThree,
      name: 'Devanjan Sinha',
      text:
        'Hi, I am Devanjan. I have 12+ years of cross-functional leadership experience in a cross finance, product management.',
      number: 2,
      Specialised: 'Specializes in Financial Budgeting',
      logos: [putnam, merrill, mac],
    },
    {
      id: 6,
      image: imageFour,
      name: 'Ujval Nanavati',
      number: 4,
      text:
        'Hi, I am Ujval Nanavati. I have around 14+ years in various corporate roles in variety of organizations.',
      Specialised: 'Specialised in Finance advisory',
      logos: [ic, gfh, madon],
    },
    {
      id: 7,
      image: imageOne,
      name: 'Vibhor Sahare',
      number: 3,
      text:
        'Hi, I am Vibhor. I have around 10 years of experience in leading P&L, Enterprise Sales, Angel investing etc.',
      Specialised: 'Specialised in E-commerce',
      logos: [deloitte, booze, gaadi],
    },
  ];
  // const logos = [seek, adi, flora];
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
  const [vis, setVis] = useState(false);
  return (
    <div className="mt-10 w-full sm:pt-14 pt-8  purple_light ">
      <div className="lg:px-32 sm:px-24 px-2">
        <p className="sm:text-4xl text-xl sm:text-left text-center px-10 sm:px-0 font-bold">
          Meet Our Experts
        </p>
        <p className="md:text-base grey-text text-lg md:w-8/12 w-full text-center sm:text-left light_grey mt-4 font-thin">
          Our large network of vertical experts specialists guranatee effect
          tangible efficiencies and profitable outcomes to your strategic
          initiatives.
        </p>
      </div>

      <div className="mt-14  lg:pb-14 pb-0   splice">
        <Carousel
          showArrows={dimensions.width < 640 ? false : true}
          renderArrow={({ type, onClick, isEdge }) => {
            const pointer =
              type === consts.NEXT ? (
                <img src={isEdge ? disRight : right} alt="" className=" h-6" />
              ) : (
                <img
                  src={isEdge ? disleft : left}
                  alt=""
                  loading="lazy"
                  style={{ height: 26 }}
                  className="mr-10 "
                />
              );
            return (
              <div className="absolute -top-14 right-0 mr-20">
                <button
                  onClick={onClick}
                  disabled={isEdge}
                  className="focus:outline-none "
                >
                  {pointer}
                </button>
              </div>
            );
          }}
          enableSwipe={true}
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
            { width: 850, itemsToShow: 3 },
            { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
            { width: 1450, itemsToShow: 5 },
            { width: 1750, itemsToShow: 6 },
          ]}
          pagination={false}
          // itemsToShow={4}
          style={{
            paddingLeft: dimensions.width <= 940 ? 18 : 89,
            position: 'relative',
            top: dimensions.width <= 640 ? 82 : 0,
          }}
        >
          {/* <div className="flex items-enter justify-between sm:pl-32 pl-5 overflow-x-scroll w-full"> */}
          {items.map((item) => (
            <div
              className="p-3.5 matrix sxl sm:mr-0 sm:mx-5 mr-4 mb-2 focus:outline-none rounded bg-white lg:w-80 sm:w-64 w-full"
              key={item.id}
            >
              <LazyLoadImage
                alt={item.image}
                effect="blur"
                style={{ width: '100%' }}
                className="rounded w-full h-44"
                src={item.image}
              />
              {/* <img src={item.image} alt="" className="rounded w-full h-44" /> */}
              <p className="text-sm font-medium text-black mt-2">{item.name}</p>
              <p className="text-xs light_grey leading-5 bottom_grey font-thin">
                <ReadMoreAndLess
                  className="purple_text text-base font-semibold ml-2 cursor-pointer"
                  charLimit={90}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  {item.text}
                </ReadMoreAndLess>
              </p>

              <p className="font-bold text-black mt-3 research-top text-sm">
                {item.Specialised}
              </p>

              <div className="flex justify-between items-center mt-4">
                {item.logos.map((item, i) => {
                  return (
                    <LazyLoadImage
                      alt={item}
                      effect="blur"
                      className="h-5"
                      src={item}
                    />
                  );
                })}

                {/* </div> */}
              </div>

              <p
                onClick={() => {
                  setVis(true);
                }}
                className="purple_re text-white p-2 rounded hover:bg-indigo-900 cursor-pointer text-center w-full mt-4"
              >
                Get In Touch
              </p>
            </div>
          ))}
          {/* </div> */}
        </Carousel>
      </div>

      <div className={`${vis ? 'block' : 'hidden'}`}>
        <KickStart visible={vis} setVisible={setVis} />
      </div>
    </div>
  );
}

export default index;
