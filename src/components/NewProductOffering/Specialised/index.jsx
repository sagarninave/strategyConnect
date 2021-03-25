import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import BusinessPlanning from '../../../assets/img/(PO)businesplanning.png';
import FinancialModeling from '../../../assets/img/(PO)financialmodelling.png';
import GoToMarketPlanning from '../../../assets/img/(PO)gotomarket.png';

export default function index() {
  return (
    <>
      <div style={{backgroundColor:"#fff"}} className="flex lg:py-8 lg:pb-0 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex-1 lg:flex justify-center">
           <p className="lg:text-4xl text-lg text-center mt-6 lg:text-left font-bold">
            We Specialised In          
          </p>
        </div>
      </div>

      <div style={{backgroundColor:"#fff"}} className="flex mb-10 lg:mb-10 lg:py-8 py-8 lg:px-16 px-8 justify-start refined-bg xl:mt-10 items-center">
        <div className="flex-1 hidden lg:flex lg:justify-start">
          <LazyLoadImage
            alt={BusinessPlanning}
            effect="blur"
            style={{ height: '10rem', flexGrow: 1 }}
            className="hidden lg:flex h-96 flex-initial"
            src={BusinessPlanning}
          />
        </div>

        <div className="flex-1 ml-28 lg:-mt-10">
          <p className="lg:text-3xl text-lg text-center lg:text-left font-bold mt-5 lg:mt-5 md:mt-5">
            Business Planning
          </p>
          <p className="font-medium text-base lg:text-lg lg:w-full text-center lg:text-left mx-auto lg:mx-0 grey-text mt-5 font-thin">
            We develop a thorough business analysis that can  
            make your business investor and market-ready
          </p>
          <div className="p-2 pl-2 mt-5 pt-0 rounded-md border-2" style={{width:"10.2rem"}}>
            <button className="text-white purple lg:w-36 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
              <Link to="/business-planning"> 
                <p className="relative">Get Started</p> 
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#fff"}} className="flex mb-10 lg:mb-10 lg:py-1 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex-1 mr-0 lg:-mt-16 justify-start">
          <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
            Financial Modeling
          </p>
          <p className="font-medium text-base lg:text-xl-lg lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-5 font-thin">
            We Create an exhaustive and easy to use 
            financial model that can scale with your business
          </p>
          <div className="p-2 pl-2 mt-5 pt-0 rounded-md border-2" style={{width:"10.2rem"}}>
            <button className="text-white purple lg:w-36 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
              <Link to="/finance-modeling"> 
                <p className="relative">Get Started</p> 
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex justify-end">
          <LazyLoadImage
            alt={FinancialModeling}
            effect="blur"
            style={{ height: '10rem', flexGrow: 1 }}
            className="hidden lg:flex h-96 flex-1"
            src={FinancialModeling}
          />
        </div>
      </div>

      <div style={{backgroundColor:"#fff"}} className="flex lg:py-8 py-8 lg:pb-0 lg:px-16 px-8 justify-start refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex-1 hidden lg:flex lg:justify-start">
          <LazyLoadImage
            alt={GoToMarketPlanning}
            effect="blur"
            style={{ height: '10rem', flexGrow: 1 }}
            className="hidden lg:flex h-96 flex-initial"
            src={GoToMarketPlanning}
          />
        </div>
        <div className="flex-1 ml-28 lg:-mt-16">
          <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
            Go-To Market Strategy
          </p>
          <p className="font-medium text-base lg:text-lg lg:w-full text-center lg:text-left mx-auto lg:mx-0 grey-text mt-5 font-thin">
            We uncover deep insights that can help your business 
            fast track its entry to the market of interest.
          </p>
          <div className="p-2 pl-2 mt-5 pt-0 rounded-md border-2" style={{width:"10.2rem"}}>
            <button className="text-white purple lg:w-36 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
              <Link to="/go-to-market-strategy"> 
                <p className="relative">Get Started</p> 
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
