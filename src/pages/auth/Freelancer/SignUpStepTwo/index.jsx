import React from 'react';
import man from '../../../../assets/img/sai.webp';
import ikea from '../../../../assets/img/ikea-white.svg';
import SignUpTwoForm from './SignUpTwoForm';

export default function SignUpStepTwo() {
  return (
    <div className=" w-full flex items-center">
      <div className="h-screen hidden lg:block relative w-3/5">
        <img src={man} alt="placeImage" className="z-10 h-screen w-full" />
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 195, 238, 0.7) 78.65%, rgba(0, 195, 238, 0.95) 100%)',
          }}
          className="w-full  h-full z-20 absolute top-0 left-0 px-20"
        >
          <div className="absolute bottom-0 pb-10 ">
            <h1 className="text-xl font-semibold text-white w-4/5 pb-7 ">
              Working with StrategyConnect is always a pleasure. I got an
              opportunity to work with Fortune 500 brands and expanded their
              business in Singapore.
            </h1>
            <div style={{ borderTop: '1.5px solid #FFFFFF' }} className="w-4/5">
              <p className="text-white text-xl text-left font-semibold mt-7 mb-5">
                Sai Pavan Chowdary, consultant with Strategyconnect
              </p>

              <div className="flex items-center">
                <p className="text-white text-base font-light text-left mr-4">
                  Worked with
                </p>
                <img src={ikea} alt="ikea-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpTwoForm />
    </div>
  );
}
