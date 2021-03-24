/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import Navbar from '../NewHome/SmallHome/components/Navbar';
import Work from '../NewHome/SmallHome/components/Work';
import Work1 from '../NewHome/SmallHome/components/Work1';
import Footer from '../NewHome/SmallHome/components/Footer';
import Specialised from './Specialised';
import MarketplaceExpert from './MarketplaceExpert';

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
          The Simplest Solutions For Your Systems
        </p>
        <p className="text-lg text-black text-center mx-auto font-semibold mt-4">
          We are working on a suite of tools to managing complex systems easier, for everyone. We can’t <br />
          wait to hear what you think.
        </p>
      </div>
      <div className="xl:px-32 px-0">
        <MarketplaceExpert />
        <Specialised />
      </div>
      {/* <Work /> */}
      <Work1 />
      <Footer />
    </div>
  );
}
