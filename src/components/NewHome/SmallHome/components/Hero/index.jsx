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
import './hero.css';

function Index() {

  const imgList = [who, what, why, consultants1, consultants2, consultants3]
  const carouselRef = useRef(null);

  return (
    <div>
      <Carousel
        ref={carouselRef}
        style={{ backgroundColor: "#fff", paddingTop:"30px", paddingBottom:"40px"}}
        enableAutoPlay
        autoPlaySpeed={2000}
        onNextEnd={(nextItemObject, currentPageIndex) => {
          if (nextItemObject.index === imgList.length-1 && currentPageIndex === imgList.length-1) {
            setTimeout(() => {
              nextItemObject = carouselRef.current.goTo(0)
            }, 1500)
          }
        }}
        itemsToShow={1}
        pointer={false}
        showArrows={false}
      >
        {
          imgList.map((item, index) => {
            return <LazyLoadImage
              alt={item}
              effect="blur"
              className="mx-auto"
              style={{ width: '100%', marginBottom:'20px'}}
              src={item}
            />
          })
        }
      </Carousel>
    </div>
  );
}

export default Index;
