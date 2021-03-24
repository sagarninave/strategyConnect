import React from 'react';
import woman from '../../../../assets/img/pgOneImg.webp';
import img10 from '../../../../assets/img/Crocs.svg';
import img12 from '../../../../assets/img/amatus.svg';
import img13 from '../../../../assets/img/leoa.svg';
import img14 from '../../../../assets/img/oimenu.svg';
import SignUpOneForm from './SignUpOneForm';

export default function SignUpStepOne() {
  const imgArray = [img10, img12, img13, img14];
  return (
    <div className=" w-full flex  items-center">
      <div className="h-screen hidden lg:block relative w-3/5">
        <img src={woman} alt="placeImage" className="z-10 h-screen w-full" />
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(56, 54, 154, 0.8) 77.08%, rgba(56, 54, 154, 0.96) 100%)',
          }}
          className="w-full  h-full z-20 absolute top-0  left-0 px-20"
        >
          <div className="absolute bottom-0 pb-10">
            <h1 className="text-4xl font-bold text-white w-4/5 pb-7 ">
              Work with the best brands in the industry.
            </h1>
            <div style={{ borderTop: '1.5px solid #FFFFFF' }}>
              <p className="text-white text-sm text-center mt-7 mb-5">
                Trusted by
              </p>

              <div className="flex items-center justify-between ">
                {imgArray.map((item, index) => {
                  return <img src={item} key={index} alt="logo" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpOneForm />
    </div>
  );
}
