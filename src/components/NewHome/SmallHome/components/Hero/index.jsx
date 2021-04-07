
import React, { useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Carousel from 'react-elastic-carousel';
import who from '../../../../../assets/img/who.png';
import what from '../../../../../assets/img/what.png';
import why from '../../../../../assets/img/why.png';
import consultants1 from '../../../../../assets/img/sliderconsultants1.png';
import consultants2 from '../../../../../assets/img/sliderconsultants2.png';
import consultants3 from '../../../../../assets/img/sliderconsultants3.png';

import mobileWho from '../../../../../assets/img/mobileWho.png';
import mobileWhat from '../../../../../assets/img/mobileWhat.png';
import mobileWhy from '../../../../../assets/img/mobileWhy.png';
import mobileConsultants1 from '../../../../../assets/img/mobileConsultants1.png';
import mobileConsultants2 from '../../../../../assets/img/mobileConsultants2.png';
import mobileConsultants3 from '../../../../../assets/img/mobileConsultants3.png';

import './hero.css';

function Index() {

  const desktopImgList = [who, what, why, consultants1, consultants2, consultants3]
  const mobileImgList = [mobileWho, mobileWhat, mobileWhy, mobileConsultants1, mobileConsultants2, mobileConsultants3]
  const carouselRefDesktop = useRef(null);
  const carouselRefMobile = useRef(null);

  return (
    <>
      {/* Desktop */}
      <div className="showInDesktop">
        <Carousel
          ref={carouselRefDesktop}
          className="marginSlider"
          enableAutoPlay
          autoPlaySpeed={4000}
          onNextEnd={(nextItemObject, currentPageIndex) => {
            if (nextItemObject.index === desktopImgList.length - 1 && currentPageIndex === desktopImgList.length - 1) {
              setTimeout(() => {
                nextItemObject = carouselRefDesktop.current.goTo(0)
              }, 1500)
            }
          }}
          itemsToShow={1}
          pointer={false}
          showArrows={false}
        >
          {
            desktopImgList.map((item, index) => {
              return <LazyLoadImage
                alt={item}
                effect="blur"
                className="mx-auto"
                style={{ width: '100%', marginBottom: '20px' }}
                src={item}
              />
            })
          }
        </Carousel>
      </div>


      {/* mobile */}
      <div className="showInMobile">
        <Carousel
          ref={carouselRefMobile}
          className="marginSlider"
          enableAutoPlay
          autoPlaySpeed={4000}
          onNextEnd={(nextItemObject, currentPageIndex) => {
            if (nextItemObject.index === mobileImgList.length - 1 && currentPageIndex === mobileImgList.length - 1) {
              setTimeout(() => {
                nextItemObject = carouselRefMobile.current.goTo(0)
              }, 1500)
            }
          }}
          itemsToShow={1}
          pointer={false}
          showArrows={false}
        >
          {
            mobileImgList.map((item, index) => {
              return <LazyLoadImage
                alt={item}
                effect="blur"
                className="mx-auto"
                style={{ width: '100%', marginBottom: '20px' }}
                src={item}
              />
            })
          }
        </Carousel>
      </div>
    </>
  );
}

export default Index;