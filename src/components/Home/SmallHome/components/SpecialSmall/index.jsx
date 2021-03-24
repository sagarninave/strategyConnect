import React, { useState, useEffect } from 'react';
import ReactFloaterJs from 'react-floaterjs';
import bolt from '../../../../../assets/img/bolt.svg';
// import box from '../../../../../assets/img/whiteBall.svg';
import imageOne from '../../../../../assets/img/health.jpg';
import imageTwo from '../../../../../assets/img/ai.jpg';
import imageThree from '../../../../../assets/img/xaas.jpg';
import imageFour from '../../../../../assets/img/education.jpg';
import imageFive from '../../../../../assets/img/eco.jpg';
import imageSix from '../../../../../assets/img/h-tech.jpg';
import Carousel from 'react-elastic-carousel';
import box2 from '../../../../../assets/img/whiteBall2.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import background from '../../../../../assets/img/boredBlue.png';

export default function SpecialSmall() {
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
      id: 1,
      image: imageOne,
      name: 'Due Diligence',
      number: 3,
      text:
        'Performing due diligence on potential investment options with high-end analytics tools and subject-matter experts',
      titleOne: 'Commercial Diligence',
      titleTwo: 'Operational Diligence',
      titleThree: 'Technical Diligence',
    },
    {
      id: 5,
      image: imageTwo,
      name: 'XaaS',
      number: 4,
      text:
        'Building XaaS models is complex. We help companies create and execute an effective XaaS strateg.',
      titleOne: 'XAAS Strategy',
      titleTwo: 'Target Capabilities',
      titleThree: 'Archiect & Implementation',
    },
    {
      id: 2,
      image: imageThree,
      name: 'Operation Transformation',
      number: 4,
      text:
        'We match supply and demand by ensuring collaboration across all departments in an organization and align daily operations with corporate strategy',
      titleOne: 'Analyse Current State',
      titleTwo: 'Design Forecasting',
      titleThree: 'Install S&OP Process',
    },
    {
      id: 3,
      image: imageFour,
      name: 'E-Commerce',
      text:
        'We help organizations “plan for & implement” steps needed to build their e-commerce capability',
      titleOne: 'Define e-com strategy',
      titleTwo: 'Design e-com strategy',
      titleThree: 'Going online',
      number: 2,
    },
    {
      id: 6,
      image: imageFive,
      name: 'Enabling Services',
      text:
        'We provide a variety of enabling services to successfully deliver results across seven service lines ',
      titleOne: 'Market analysis',
      titleTwo: 'Pitch decks',
      titleThree: 'Modeling',
      number: 4,
    },
    {
      id: 7,
      image: imageSix,
      name: 'Digital First',
      text:
        'We bring extensive experience and tools to help clients with their digital transformation effort',
      titleOne: 'Digital strategy',
      titleTwo: 'Design capability design',
      titleThree: 'Archiect & Implementation',
      number: 3,
    },
  ];
  return (
    <div className="xl:hidden block mt-10 px-4">
      <h3 className="text-xl text-center font-bold">We are specialised in</h3>
      <p style={{ color: '#707376' }} className="text-center mt-4">
        Freemium apps lack depth, polish, & privacy, while trool lack
        affordability throughtfull design.
      </p>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
        className=" w-full mt-20 relative"
      >
        <ReactFloaterJs>
          <img
            src={bolt}
            alt="box"
            className="absolute z-0 pl-28 -top-14 -left-28  h-12"
          />
        </ReactFloaterJs>
        <ReactFloaterJs>
          <img
            src={box2}
            alt="box"
            className="absolute z-0 pl-24 -top-20 right-0  "
          />
        </ReactFloaterJs>
        <div>
          <Carousel
            showArrows={false}
            enableSwipe={true}
            breakPoints={[
              { width: 1, itemsToShow: 1 },
              {
                width: 550,
                itemsToShow: 2,
                itemsToScroll: 1,
                pagination: false,
              },
              { width: 850, itemsToShow: 3 },
              { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
              { width: 1450, itemsToShow: 5 },
              { width: 1750, itemsToShow: 6 },
            ]}
            pagination={false}
            style={{
              paddingLeft: dimensions.width <= 940 ? 18 : 0,
            }}
          >
            {/* <div className="flex items-enter justify-between sm:pl-32 pl-5 overflow-x-scroll w-full"> */}
            {items.map((item) => (
              <div
                style={{ height: 522 }}
                className="p-3.5 border border-gray-100 matrix sm:mr-0 flex flex-col justify-between sm:mx-5 mr-4 mb-2 focus:outline-none rounded bg-white "
                key={item.id}
              >
                <LazyLoadImage
                  alt={item.image}
                  style={{ width: '100%' }}
                  effect="blur"
                  loading="lazy"
                  className="rounded h-44"
                  src={item.image}
                />
                <p className="text-base font-bold text-black">{item.name}</p>
                <p className="text-xs light_grey leading-5 bottom_grey font-thin">
                  {item.text}
                </p>

                <p className=" text-black mt-3 research-top text-sm">
                  - {item.titleOne}
                </p>
                <p className=" text-black mt-3 research-top text-sm">
                  - {item.titleTwo}
                </p>
                <p className=" text-black mt-3 research-top text-sm">
                  - {item.titleThree}
                </p>

                <p
                  //   onClick={() => {
                  //     setVis(true);
                  //   }}
                  className="purple_re text-white p-2 rounded hover:bg-indigo-900 cursor-pointer text-center w-full mt-4"
                >
                  know more
                </p>
              </div>
            ))}
            {/* </div> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
