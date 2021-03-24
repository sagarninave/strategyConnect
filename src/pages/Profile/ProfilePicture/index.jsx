import React, { useState, useEffect } from 'react';
import cactus from '../../../assets/img/cactus.webp';
import camera from '../../../assets/img/photoBtn.svg';

export default function ProfilePicture(props) {
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
    <div>
      <div
        style={{
          backgroundImage: `url(${props.img ? props.img : cactus})`,
          height: dimensions.width < 780 ? 108 : 401,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className=" relative w-auto"
      >
        <img
          src={camera}
          alt=""
          className="absolute h-5 w-5 lg:h-auto w-auto right-0 bottom-0 lg:mr-6 mr-3 lg:mb-8  mb-3 cursor-pointer"
        />
      </div>
    </div>
  );
}
