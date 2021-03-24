/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import Navbar from '../NewHome/SmallHome/components/Navbar';
import Footer from '../NewHome/SmallHome/components/Footer';
import Statistics from './Statistics';
import Subscription from './Subscription';

export default function index() {
  useEffect(() => {
    document.title = 'StrategyConnect | About Us';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="m-0 p-0">
      <Navbar />
      <div style={{ backgroundColor: "#F0EFF7", height: "440px" }} className="px-auto sm:pt-32 pt-20">
        <p className="sm:text-5xl lg:text-5xl text-black font-semibold text-center mx-auto lg:w-11/12 xl:w-11/12 sm:w-11/12 w-11/12">
          Business Planning
        </p>
        <p className="text-lg text-black text-center mx-auto font-semibold mt-4">
          We develop a thorough business analysis that can make your <br />
          business investor and market-ready
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
