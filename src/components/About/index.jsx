/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import Navbar from '../Home/SmallHome/components/Navbar';
import Work from '../Home/SmallHome/components/Work';
import Footer from '../Home/SmallHome/components/Footer';
import OurStory from './OurStory';
import OurValues from './OurValues';

export default function index() {
  useEffect(() => {
    document.title = 'StrategyConnect | About Us';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <p className="sm:text-3xl text-xl font-semibold text-center xl:w-5/12 sm:w-8/12 w-11/12 mx-auto sm:mt-32 mt-20">
          We empower businesses and prepare them for scalable success
        </p>
        <p className="text-sm grey-text text-center mx-auto  mt-4">
          With streamlined advisory services
        </p>
      </div>
      <div className="xl:px-32 px-0">
        <OurStory />
      </div>

      {/* <OurValues /> */}
      <Work />
      <Footer />
    </div>
  );
}
