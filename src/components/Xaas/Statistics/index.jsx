import React, { useState } from 'react';
import statistics from '../../../assets/img/statistics.svg';
import crocDis from '../../../assets/img/crocsDis.svg';
import crocActive from '../../../assets/img/crocsActive.svg';
import ikeaActive from '../../../assets/img/ikea-active.svg';
import ikeaDis from '../../../assets/img/ikeaDis.svg';
import ubiDis from '../../../assets/img/ubiDis.svg';
import ubiActive from '../../../assets/img/ubisoft-active.svg';

export default function Statistics() {
  const [iconOne, setIconOne] = useState(true);
  const [iconTwo, setIconTwo] = useState(false);
  const [iconThree, setIconThree] = useState(false);

  const setOneActive = (val1, val2, val3) => {
    setIconOne(val1);
    setIconTwo(val2);
    setIconThree(val3);
  };
  return (
    <div className="pt-20 xl:px-32 px-8">
      <h1 className="font-bold lg:text-center lg:text-3xl text-2xl mt-12 lg:mt-0">
        Statistics
      </h1>
      <p className="mt-2 lg:w-3/6 w-full text-base lg:text-sm font-thin grey-text-dark leading-6 mx-auto lg:text-center">
        We hand pick the best team for your specific product from our roster of
        trusted, vetted development teams and facilitate a smooth
      </p>

      <div className="mt-20 flex flex-col lg:flex-row justify-between ">
        <div className="lg:w-1/3  w-full">
          <p className="text-2xl font-bold ">Proactive cost management</p>
          <p className="text-sm grey-text mt-3 leading-7 lg:w-72 w-full">
            Surveys measure your team’s engagement across 10 Key Metrics – We
            hand pick the best team for your specific product from our roster of
            trusted, vetted development teams and facilitate a smooth but we
            want to make sure you know how to act on and improve your results,
            too. That’s why you’ll find case studies, analyses and how-to
            articles designed to improve your Metrics, directly in your Survey
            Report. We hand pick the best team for your specific product from
            our roster of trusted{' '}
          </p>
          {/* brow div bottom */}
          <div className="padding_top_border mt-10 flex items-center justify-between   lg:w-2/3 w-full">
            <img
              src={iconOne ? crocActive : crocDis}
              onClick={() => {
                setOneActive(true, false, false);
              }}
              alt="croc"
              className="h-3 cursor-pointer"
            />
            <img
              src={iconTwo ? ubiActive : ubiDis}
              alt="croc"
              onClick={() => {
                setOneActive(false, true, false);
              }}
              className="h-7 cursor-pointer"
            />
            <img
              onClick={() => {
                setOneActive(false, false, true);
              }}
              src={iconThree ? ikeaActive : ikeaDis}
              alt="croc"
              className="h-4 cursor-pointer"
            />
          </div>
          {/* brow div bottom */}
        </div>
        <div className="mt-10  lg:mt-0">
          <img src={statistics} alt="stats" className="" />
        </div>
      </div>
    </div>
  );
}
