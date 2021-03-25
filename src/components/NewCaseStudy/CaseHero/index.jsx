import React from 'react';
import calender from '../../../assets/img/calender.svg';

function CaseHero() {
  return (
    <div className="navbarCont w-full lg:px-32 px-4 py-8 mb-8 flex justify-between items-center">
      <div>
        <h1 className="lg:text-3xl text-xl font-bold">Case Studies</h1>
        <p
          style={{ color: '#3B3E41' }}
          className="text-lg grey-text font-light lg:mt-4 mt-2"
        >
          Leadership insights to fast-track your way to being a great leader.
        </p>
      </div>
      <img
        src={calender}
        loading="lazy"
        className="h-64 hidden lg:flex"
        alt="celender"
      />
    </div>
  );
}

export default CaseHero;
