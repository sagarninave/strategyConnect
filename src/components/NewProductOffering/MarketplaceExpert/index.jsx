import React from 'react';
import { Link } from 'react-router-dom';
import Marketplacepakage from '../../../assets/img/Marketplacepakage.png';

function index() {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-8 lg:pb-0 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 mb-0 items-center">
        <div className="flex-1 lg:flex justify-center">
          <p className="market-expert-text xl:text-4xl mt-5 mb-0 text-center lg:text-center font-bold">
            Marketplace Experts
          </p>
        </div>
      </div>

      <div style={{height: "auto", border: "1px solid #707070" }}
        className="mt-5 lg:mt-10 w-3/5 lg:w-2/5 mx-auto rounded-md mb-6 pb-6">
        <img src={Marketplacepakage} loading="lazy" alt="Marketplacepakage"
          className="w-full rounded-md"
          style={{ width: "100%", height: "auto" }} />

        <p className="text-lg lg:text-3xl xl:text-3xl text-black text-left font-semibold ml-3 lg:ml-0 xl:mr-3 lg:px-8 xl:px-8 mx-auto mt-5 lg:mt-10 xl:mt-10">
          Experts on Demand
        </p>
        <p className="textinxl lg:text-lg lg:px-8 xl:px-8 gray-text text-left mt-3 ml-3 mr-3 lg:ml-0 xl:mr-3 lg:mt-6">
          Access our database of experts and get 5 short calls for free.
        </p>
      </div>

      {/* Desktop Button */}
      <div className="showInDesktop p-2 pl-2 mt-10 pt-0 mx-auto rounded-md border-2 lg:my-8" style={{width:"10.2rem"}}>
        <button className="text-white purple lg:w-36 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 pl-10 px-7 rounded">
          <Link to="/market-place-expert"> 
            <p className="relative">Subscribe</p>
          </Link> 
        </button>
      </div>

      {/* Mobile Button */}
      <div className="showInMobile p-2 pl-2 pr-0 mt-5 pt-0 marketExpertSubscribe mx-auto rounded-md border-2">
        <button className="marketExpertSubscribeButton text-white purple justify-between border-none focus:outline-none rounded">
          <Link to="/market-place-expert">
            <p className="relative">Subscribe</p>
          </Link>
        </button>
      </div>
    </>
  );
}

export default index;
