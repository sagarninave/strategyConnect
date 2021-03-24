import React, { useEffect } from 'react';
import Navbar from '../NewHome/SmallHome/components/Navbar';
import Footer from '../NewHome/SmallHome/components/Footer';
import LatestUpdates from '../NewHome/SmallHome/components/Footer/LatestUpdates';
import Engagement from './Engagement';
import Address from './Address';

function Contact() {
  useEffect(() => {
    document.title = 'StrategyConnect | Contact';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="lg:text-3xl text-xl text-center font-semibold mt-20 lg:px-48 px-4">
        Get in touch with us
      </h1>
      <p className="text-sm grey-text text-center mt-2 lg:px-48 px-4">
        Let’s scale your brand, together
      </p>
      <Engagement />
      <Address />
      <LatestUpdates />
      <Footer />
    </div>
  );
}

export default Contact;
