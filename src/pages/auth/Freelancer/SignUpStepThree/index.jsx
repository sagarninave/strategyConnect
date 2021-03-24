import React from 'react';
import projects from '../../../../assets/img/projects.webp';
import SignUpThreeForm from './SignUpThreeForm';

export default function SignUpStepThree() {
  return (
    <div className=" w-full flex items-center">
      <div
        style={{ backgroundColor: '#06045B' }}
        className="h-screen hidden lg:flex justify-center flex-col items-center  relative w-3/5"
      >
        <h1 className="font-bold text-4xl text-white mb-10">
          Build your profile
        </h1>
        <img
          src={projects}
          alt="placeImage"
          className="z-10"
          style={{ height: 460 }}
        />
        <p
          style={{ width: 500 }}
          className="text-xl font-medium text-center mt-8 text-white"
        >
          Successufull brands like to work with consultants showcasing detailed
          work experience.
        </p>
      </div>
      <SignUpThreeForm />
    </div>
  );
}
