import React from 'react';
import image1 from '../../../assets/img/img-1.svg';
import image2 from '../../../assets/img/img-2.svg';
import image3 from '../../../assets/img/img-3.svg';
import image4 from '../../../assets/img/img-4.svg';
import image5 from '../../../assets/img/img-5.svg';
import { Link } from 'react-router-dom';

function Experts() {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="w-11/12 mt-4 mx-auto block grey-background lg:hidden px-8 py-4">
      <p className="text-base font-bold grey-text">Industry Experts</p>
      <div className="flex items-center flex-wrap mt-3">
        {images.map((image, i) => {
          return (
            <img
              key={i}
              loading="lazy"
              alt="people"
              src={image}
              className="mr-4 mt-4"
            />
          );
        })}
      </div>

      <p className=" py-2 px-3 rounded purple text-white text-center mt-7 text-sm cursor-pointer">
        <Link Link to="/contact">
          Contact Us
        </Link>
      </p>
    </div>
  );
}

export default Experts;
