import React from 'react';
import emptyPro from '../../../../assets/img/emptyPro.svg';

export default function EmptyProjects() {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex items-center w-full lg:w-3/5">
        <img src={emptyPro} alt="" className="" />
        <p
          style={{ color: '#707376' }}
          className="ml-3 text-base lg:text-lg font-light "
        >
          Add your first project. Companies prefer profiles with sound
          portfolio.
        </p>
      </div>
      <button className="purple text-white px-4 py-2 ml-4  mx-auto lg:mx-0 mt-8 lg:mt-0 rounded text-base">
        Add Projects
      </button>
    </div>
  );
}
