import React from 'react';
import emptyLang from '../../../../assets/img/langEmpty.svg';

export default function EmptyLanguage() {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex items-center w-full lg:w-3/5">
        <img src={emptyLang} alt="" className="" />
        <p
          style={{ color: '#707376' }}
          className="ml-3 text-base lg:text-lg font-light "
        >
          Please add your preferred language details here
        </p>
      </div>
      <button className="purple text-white px-4 py-2 ml-4  mx-auto lg:mx-0 mt-8 lg:mt-0 rounded text-base">
        Add Languages
      </button>
    </div>
  );
}
