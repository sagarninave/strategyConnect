/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import Navbar from '../NewHome/SmallHome/components/Navbar';
import Footer from '../NewHome/SmallHome/components/Footer';
import Statistics from '../NewHome/SmallHome/components/Statistics';
import Subscription from './Subscription';

export default function index() {
  useEffect(() => {
    document.title = 'StrategyConnect | About Us';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="m-0 p-0">
      <Navbar />
      <div style={{ backgroundColor: "#F0EFF7"}} className="h-36 lg:h-96 px-auto pt-5 lg:pt-28">
        <p className="our-offerings-text lg:text-5xl text-black font-semibold text-center mx-auto w-full lg:w-11/12 xl:w-11/12 ">
          Financial Modeling
        </p>
        <p className="our-offerings-sub-text text-lg px-3 text-black text-center mx-auto font-semibold mt-4">
          We create an exhaustive and easy to use a financial model that can scale with your business
        </p>
      </div>
      <div className="xl:px-32 px-0">
        <Statistics />
        <Subscription />
      </div>
      <Footer />
    </div>
  );
}
