import React, { useState, useEffect } from 'react';
import quotes from '../../../assets/img/purpleQuote.svg';
import fred from '../../../assets/img/freddie.svg';
import spi from '../../../assets/img/spi-o.svg';
import left from '../../../assets/img/left-arr-black.svg';
import right from '../../../assets/img/right-arr-black.svg';
import disLeft from '../../../assets/img/disLeft.svg';
import disRight from '../../../assets/img/disRight.svg';
import inactive from '../../../assets/img/inactiveAc.svg';
import activeImg from '../../../assets/img/activeAc.svg';
import Carousel, { consts } from 'react-elastic-carousel';

function MyPages({ active, onClick }) {
  return (
    <div
      className="mr-4 mt-4 cursor-pointer"
      onClick={() => {
        onClick();
      }}
    >
      {active ? (
        <img src={activeImg} alt="active" className="" />
      ) : (
        <img src={inactive} alt="inactive" className="" />
      )}
    </div>
  );
}

export default function Testimonials() {
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
    <div className="purple_light lg:py-20 py-10 lg:px-32 px-8 mt-20">
      <div className="flex justify-between lg:flex-row flex-col items-center">
        <h1 className="lg:text-3xl text-xl font-bold">Testimonials</h1>
        <p className="text-sm lg:w-3/6 w-full lg:mt-0 mt-4 grey-text leading-6">
          We hand pick the best team for your specific product from our roster
          of trusted, vetted development teams and facilitate a smooth{' '}
        </p>
      </div>

      <Carousel
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div className="flex items-center">
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <MyPages
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                );
              })}
            </div>
          );
        }}
        showArrows={dimensions.width < 640 ? false : true}
        renderArrow={({ type, onClick, isEdge }) => {
          const pointer =
            type === consts.PREV ? (
              <img src={isEdge ? disLeft : left} alt="" className="mr-4" />
            ) : (
              <img src={isEdge ? disRight : right} alt="" className="" />
            );

          return (
            <button
              onClick={onClick}
              disabled={isEdge}
              className="focus:outline-none"
            >
              {pointer}
            </button>
          );
        }}
        pagination={true}
        itemsToShow={1}
      >
        <div className="flex justify-between   lg:flex-row flex-col mt-10">
          <img src={fred} alt="quotes" className="h-60 cursor-pointer " />
          <div className="lg:w-3/6 w-full mt-8 lg:mt-0">
            <img src={quotes} alt="quotes" className="mx-auto lg:mx-0" />
            <p className="grey-text text-sm mt-4 leading-6">
              StrategyConnect consultants were thorough and committed. I was
              amazed to see the value that was added vs. the cost that was
              charged to us. Highly recommend this new way of engaging star
              consultants! StrategyConnect consultants were thorough and
              committed. I was amazed to see the value that was added vs. the
              costthat was charged to us. Highly recommend{' '}
            </p>

            <div className="mt-4 pt-4 top-divide-line ">
              <img src={spi} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between  lg:flex-row flex-col mt-10">
          <img src={fred} alt="quotes" className="h-60 cursor-pointer " />
          <div className="lg:w-3/6 w-full mt-8 lg:mt-0">
            <img src={quotes} alt="quotes" className="mx-auto lg:mx-0" />
            <p className="grey-text text-sm mt-4 leading-6">
              StrategyConnect consultants were thorough and committed. I was
              amazed to see the value that was added vs. the cost that was
              charged to us. Highly recommend this new way of engaging star
              consultants! StrategyConnect consultants were thorough and
              committed. I was amazed to see the value that was added vs. the
              costthat was charged to us. Highly recommend{' '}
            </p>

            <div className="mt-4 pt-4 top-divide-line ">
              <img src={spi} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between   lg:flex-row flex-col mt-10">
          <img src={fred} alt="quotes" className="h-60 cursor-pointer " />
          <div className="lg:w-3/6 w-full mt-8 lg:mt-0">
            <img src={quotes} alt="quotes" className="mx-auto lg:mx-0" />
            <p className="grey-text text-sm mt-4 leading-6">
              StrategyConnect consultants were thorough and committed. I was
              amazed to see the value that was added vs. the cost that was
              charged to us. Highly recommend this new way of engaging star
              consultants! StrategyConnect consultants were thorough and
              committed. I was amazed to see the value that was added vs. the
              costthat was charged to us. Highly recommend{' '}
            </p>

            <div className="mt-4 pt-4 top-divide-line ">
              <img src={spi} alt="" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
