import React, { useEffect, useState } from 'react';
import imageOne from '../../../assets/img/img-1Small.svg';
import imageTwo from '../../../assets/img/img-2Small.svg';
import imageThree from '../../../assets/img/img-3Small.svg';
import imageFour from '../../../assets/img/img-4Small.svg';
import left from '../../../assets/img/left-arr-black.svg';
import disleft from '../../../assets/img/disLeft.svg';
import disRight from '../../../assets/img/disRight.svg';
import right from '../../../assets/img/right-arr-black.svg';
import smallIcon from '../../../assets/img/smallIcon.svg';
import KickStart from '../../Home/SmallHome/components/Navbar/KickStart';
import Carousel, { consts } from 'react-elastic-carousel';

export default function XaasExpert() {
  const items = [
    {
      id: 1,
      image: imageOne,
      name: 'Vibhor Sahare',
      number: 3,
      text:
        'Hi, I am Vibhor. I have around 10 years of experience in leading P&L, Enterprise Sales, Angel investing etc.',
      Specialised: 'Specialised in E-commerce',
    },
    {
      id: 2,
      image: imageFour,
      name: 'Ujval Nanavati',
      number: 4,
      text:
        'Hi, I am Ujval Nanavati. I have around 14+ years in various corporate roles in variety of organizations.',
      Specialised: 'Specialised in Finance advisory',
    },
    {
      id: 3,
      image: imageTwo,
      name: 'Mohamed Nassar',
      number: 4,
      text:
        'Hi, I am Nassar. I am expert in employing modern financial procedures to achieve organizational objectives.',
      Specialised: 'Specialised in Financial Planning',
    },
    {
      id: 5,
      image: imageThree,
      name: 'Devanjan Sinha',
      text:
        'Hi, I am Devanjan. I have 12+ years of cross-functional leadership experience in a cross finance, product management.',
      number: 2,
      Specialised: 'Specializes in Financial Budgeting',
    },
    {
      id: 4,
      image: imageFour,
      name: 'Ujval Nanavati',
      number: 4,
      text:
        'Hi, I am Ujval Nanavati. I have around 14+ years in various corporate roles in variety of organizations.',
      Specialised: 'Specialised in Finance advisory',
    },
    {
      id: 6,
      image: imageThree,
      name: 'Devanjan Sinha',
      text:
        'Hi, I am Devanjan. I have 12+ years of cross-functional leadership experience in a cross finance, product management.',
      number: 2,
      Specialised: 'Specializes in Financial Budgeting',
    },
  ];
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  const [vis, setVis] = useState(false);
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
    <div className="mt-10 w-full sm:pt-14 pt-8  purple_light lg:pb-32">
      <div className="sm:px-32 px-5">
        <p className="sm:text-4xl text-2xl  text-center font-extrabold">
          Some of our experts in XaaS
        </p>
      </div>

      <div className="mt-14  sm:pb-0 pb-0   splice">
        <Carousel
          showArrows={dimensions.width < 840 ? false : true}
          renderArrow={({ type, onClick, isEdge }) => {
            const pointer =
              type === consts.NEXT ? (
                <img
                  src={isEdge ? disRight : right}
                  alt="skj"
                  className="relative"
                  style={{ top: -1, height: 31 }}
                />
              ) : (
                <img
                  src={isEdge ? disleft : left}
                  alt="sljm"
                  className="mr-20 "
                  style={{ height: isEdge ? 32 : 31 }}
                />
              );
            return (
              <div
                style={{ right: dimensions.width < 640 ? 0 : '44%' }}
                className="absolute -bottom-20 flex flex-row items-center  mx-auto"
              >
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
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
            { width: 850, itemsToShow: 3 },
            { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
            { width: 1450, itemsToShow: 4 },
            { width: 1750, itemsToShow: 6 },
          ]}
          pagination={false}
          // itemsToShow={4}
          style={{
            paddingLeft: dimensions.width <= 640 ? 18 : 100,
            position: 'relative',
            top: dimensions.width <= 640 ? 82 : 0,
          }}
        >
          {/* <div className="flex items-enter justify-between sm:pl-32 pl-5 overflow-x-scroll w-full"> */}
          {items.map((item) => (
            <div
              className="p-3.5  sm:mr-0 mr-4 mb-2 shadow focus:outline-none rounded bg-white w-72"
              key={item.id}
            >
              <img src={item.image} alt="girl" className="rounded h-44" />
              <p className="text-sm font-medium text-black mt-2">{item.name}</p>
              <p className="text-xs light_grey leading-5 bottom_grey font-thin">
                {item.text}
              </p>

              <p className="font-medium text-black mt-3 text-sm">
                {item.Specialised}
              </p>

              <div className="flex justify-between items-center mt-7">
                <img src={smallIcon} alt="smallIcon" className="" />
                <p className="font-semibold text-sm purple_text">
                  +{item.number} More
                </p>
              </div>

              <p
                onClick={() => {
                  setVis(true);
                }}
                className="purple_re text-white p-2 rounded hover:bg-indigo-900 cursor-pointer  text-center w-full mt-7"
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
