import React from 'react';
import { Link } from 'react-router-dom';
import Marketplacepakage from '../../../assets/img/Marketplacepakage.png';

function index() {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-8 lg:pb-0 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 mb-0 items-center">
        <div className="flex-1 lg:flex justify-center">
          <p className="lg:text-4xl text-lg text-center mt-0 lg:text-center font-bold">
            Marketplace Experts
          </p>
        </div>
      </div>

      <div style={{height: "auto", border: "1px solid #707070" }}
        className="mt-16 w-2/5 mx-auto rounded-md mb-6 pb-6">
        <img src={Marketplacepakage} loading="lazy" alt="Marketplacepakage"
          className="w-full rounded-md"
          style={{ width: "100%", height: "auto" }} />

        <p className="text-3xl px-8 text-black text-left mx-auto font-semibold mt-10">
          Experts on Demand
        </p>
        <p className="textinxl text-lg lg:text-lg lg:text-base px-8 text-#5C5B5B-50 text-left mt-6">
          Access our database of experts and get 5 short calls for free.
        </p>
      </div>

      <div className="p-2 pl-2 mt-10 pt-0 mx-auto rounded-md border-2 lg:my-8" style={{width:"10.2rem"}}>
        <button className="text-white purple lg:w-36 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 pl-10 px-7 rounded">
          <Link to="/market-place-expert"> 
            <p className="relative">Subscribe</p>
          </Link> 
        </button>
      </div>
    </>
  );
}

export default index;
