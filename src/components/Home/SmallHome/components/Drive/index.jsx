import React from 'react';
import Task from './Task';

function index() {
  return (
    <div className="pt-8 lg:mt-10 mt-20 sm:mt-8">
      <p className="text-center sm:text-3xl lg:text-4xl text-xl md:w-3/5 mx-auto px-2.5 font-bold">
        Intuitive, tech enabled platform complements on-demand talent
      </p>
      <p className="text-base  lg:w-5/12  w-11/12 mx-auto grey-text mt-4 text-center mt-6 font-thin">
        Amplify your team’s effectiveness with our library of business solutions
        that find application in a multitude of dynamic business conditions.
      </p>
      <Task />
    </div>
  );
}
export default index;
