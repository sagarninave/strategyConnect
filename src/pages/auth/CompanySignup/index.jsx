import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import blue from '../../../assets/img/blueImg.webp';
import CompanyFormOne from './CompanyFormOne';

export default function CompanySignup(props) {
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
    <Modal
      visible={props.visible}
      effect="fadeInUp"
      width={
        dimensions.width < 780
          ? '100%'
          : dimensions.width == 1024
          ? '83%'
          : '70%'
      }
      onClickAway={() => props.setVisible(false)}
    >
      <div className=" flex  items-center">
        <div className=" hidden w-3/6 lg:block relative">
          <img src={blue} loading="lazy" alt="placeImage" className="z-10" />

          <div className="absolute bottom-0 px-10  pb-10">
            <p className="text-xl font-bold text-white pb-7 ">
              We helped Adidas to launch in dubai and increased their sales by
              32% in first quarter.
            </p>
          </div>
        </div>

        <CompanyFormOne setVisible={props.setVisible} />
      </div>
    </Modal>
  );
}
