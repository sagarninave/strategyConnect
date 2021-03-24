import React, { useEffect, useState, useRef } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import disRight from '../../../assets/img/rightDis.svg';
import pageAct from '../../../assets/img/pageAct.svg';
import pageIn from '../../../assets/img/pageInact.svg';
import rightEn from '../../../assets/img/rightEn.svg';
import disLeft from '../../../assets/img/leftDis.svg';
import leftEn from '../../../assets/img/leftEn.svg';

export default function Prodisplay() {
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

  const carousel = useRef();
  return (
    <div
      style={{
        border: '1.5px solid #98BA12',
        background: 'rgba(227, 250, 139, 0.1)',
      }}
      className="flex lg:flex-row flex-col py-4 lg:px-10 px-4 w-full justify-between items-center rounded"
    >
      {/* progree bar */}
      <div className="flex lg:w-2/6 w-full items-center">
        <p
          className="font-bold lg:text-2xl text-sm lg:mr-5  mr-2"
          style={{ color: '#98BA12' }}
        >
          62%
        </p>

        <div className="progress ">
          <div
            role="progressbar"
            class="progress-bar bg-info progress-bar-striped"
            style={{ width: '62%' }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      {/* progree bar */}

      <div
        style={{
          borderTop:
            dimensions.width < 780 ? ' 1px solid rgba(152, 186, 18,0.15)' : '',
        }}
        className="flex items-center mt-3  lg:mt-0 pt-3 lg:pt-0 justify-between"
      >
        {/* carousel  */}
        <div
          style={{
            borderRight:
              dimensions.width < 780
                ? ' 1px solid rgba(152, 186, 18,0.15)'
                : '',
          }}
          className="flex relative -left-2 items-center"
        >
          <img
            src={disLeft}
            alt=""
            onClick={() => {
              carousel.current.slidePrev();
            }}
            className="cursor-pointer hidden lg:flex mr-10"
          />
          <Carousel
            ref={carousel}
            showArrows={false}
            breakPoints={[
              { width: 1, itemsToShow: 1 },
              {
                width: 550,
                itemsToShow: 2,
                itemsToScroll: 1,
                pagination: false,
              },
              { width: 850, itemsToShow: 3 },
              { width: 1150, itemsToShow: 1, itemsToScroll: 1 },
              { width: 1450, itemsToShow: 5 },
              { width: 1750, itemsToShow: 6 },
            ]}
            //     pagination={false}
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <div className="flex items-center">
                  {pages.map((page) => {
                    const isActivePage = activePage === page;
                    return (
                      <img
                        key={page}
                        alt=""
                        className="mx-2 lg:mt-3 mt-2"
                        src={isActivePage ? pageAct : pageIn}
                        onClick={() => onClick(page)}
                        active={isActivePage}
                      />
                    );
                  })}
                </div>
              );
            }}
            itemsToShow={4}
            style={{
              width: dimensions.width < 780 ? 227 : 330,
            }}
          >
            <p className="lg:text-sm text-xs  lg:text-center grey-text">
              Please add more about your work and professional details to your
              profile
            </p>
            <p className="lg:text-sm text-xs lg:text-center grey-text">
              Please add more about your work and professional details to your
              profile
            </p>
            <p className="lg:text-sm text-xs  lg:text-center grey-text">
              Please add more about your work and professional details to your
              profile
            </p>
          </Carousel>
          <img
            src={rightEn}
            alt=""
            onClick={() => {
              carousel.current.slideNext();
            }}
            className="cursor-pointer hidden lg:flex ml-10"
          />
        </div>
        {/* carousel  */}

        <button
          className="rounded py-1 lg:ml-10 ml-0 text-white text-sm lg:px-5 px-3 font-bold"
          style={{ background: '#98BA12' }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
