/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Navbar from '../NewHome/SmallHome/components/Navbar';
import Work from '../NewHome/SmallHome/components/Work';
import Work1 from '../NewHome/SmallHome/components/Work1';
import Footer from '../NewHome/SmallHome/components/Footer';
import Specialised from './Specialised';
import MarketplaceExpert from './MarketplaceExpert';

export default function index() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    document.title = 'StrategyConnect | About Us';
    window.scrollTo(0, 0);

    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div className="m-0 p-0">
      <Navbar />
      <div style={{ backgroundColor: "#F0EFF7"}} className="h-40 px-3 lg:h-96 pb-14 pt-5 lg:pt-28">
        <p className="our-offerings-text text-3xl lg:text-5xl text-black font-semibold text-center mx-auto w-full lg:w-11/12 xl:w-11/12 ">
        The Simplest Solutions for Your Systems
        </p>
        <p className="our-offerings-sub-text text-lg text-black text-center w-11/12 mx-auto font-semibold mt-4 mb-4">
          We are working on a suite of tools to managing complex systems easier, for everyone. 
          We can’t wait to hear what you think. 
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
