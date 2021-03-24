/* eslint-disable no-extend-native */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import zohoLogo from '../../assets/img/zoho-logo.svg';
import stripeLogo from '../../assets/img/Stripe-Logo.svg';
import slackLogo from '../../assets/img/slack-logo.svg';
import roc from '../../assets/img/roc-logo.svg';
import nikeLogo from '../../assets/img/nike-logo.svg';
import hike from '../../assets/img/hike.svg';
import global from '../../assets/img/global.svg';
import Navbar from '../Home/SmallHome/components/Navbar';
import Footer from '../Home/SmallHome/components/Footer';
import WhatWeDo from './WhatWeDo';
import gsap from 'gsap';
import XaasExpert from './XaasExpert';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import RelatedCase from './RelatedCase';

export default function Xaas() {
  const [myState, setState] = useState(null);
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };
  const loopArray = [
    {
      logo: zohoLogo,
      icon: global,
      text: 'Market Expansion by 48%',
    },
    {
      logo: slackLogo,
      icon: hike,
      text: 'sales by 65%',
    },
    {
      logo: stripeLogo,
      icon: hike,
      text: 'sales by 40%',
    },
    {
      logo: nikeLogo,
      icon: roc,
      text: 'Launched in dubai',
    },
  ];

  const one = loopArray.random();
  const two = loopArray.random();
  const three = loopArray.random();
  const four = loopArray.random();

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variaable to clear it
      setState(Date.now());
    }, 5000);

    return () => clearInterval(intervalId); //This is important
  }, []);

  useEffect(() => {
    document.title = 'StrategyConnect | Xaas';
    window.scrollTo(0, 0);
    gsap.from('.zoho', {
      opacity: 0,
      x: -100,
      duration: 2,
    });

    slack();
  }, []);

  const slack = () => {
    gsap.from('.slack', {
      opacity: 0,
      y: -100,
      duration: 2,
    });
    stripe();
  };
  const stripe = () => {
    gsap.from('.stripe', {
      opacity: 0,
      x: 100,
      duration: 2,
    });
    nike();
  };
  const nike = () => {
    gsap.from('.nike', {
      opacity: 0,
      y: 100,
      duration: 2,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-32 relative w-9/12 lg:block hidden border border-white mx-auto h-96 map">
        <div className="w-6/12 mx-auto mt-40 ">
          <p className="text-xs purple_text z-30 text-center uppercase font-bold">
            we are the pioneers
          </p>
          <p className="text-center text-3xl z-30 font-bold mt-2 ">
            We helped 40+ companies globally setting up XaaS business
          </p>
        </div>

        <div className="zoho top-0 flex items-center left-0 absolute">
          <div className="flex items-center py-3 px-2 bg-white matrix  rounded">
            <img src={one.icon} alt="hike" className="" />
            <p className="text-base ml-2 ">{one.text}</p>
          </div>
          <div className=" h-20 w-20 flex rounded-full matrix  ml-2 bg-white items-center justify-center">
            <img src={one.logo} alt="Zoho" className="  " />
          </div>
        </div>

        <div className="slack flex items-center  right-0 top-0 absolute">
          <div className=" h-20 w-20 flex rounded-full mr-2 matrix  ml-2 bg-white items-center justify-center">
            <img src={two.logo} alt="Zoho" className="" />
          </div>
          <div className="flex items-center justify-center bg-white py-3 px-2 matrix rounded">
            <img src={two.icon} alt="hike" className="" />
            <p className="text-base ml-2 relative ">{two.text}</p>
          </div>
        </div>

        <div className="stripe bottom-0 left-0 flex items-center absolute">
          <div className="flex items-center justify-center py-3 px-2 bg-white matrix rounded">
            <img src={three.icon} alt="hike" className="" />
            <p className="text-base ml-2 ">{three.text}</p>
          </div>

          <div className=" h-20 w-20 flex rounded-full matrix  ml-2 bg-white items-center justify-center">
            <img src={three.logo} alt="Zoho" className="" />
          </div>
        </div>

        <div className="nike bottom-0 right-0 flex items-center absolute">
          <div className=" h-20 w-20 flex rounded-full mr-2 matrix  ml-2 bg-white items-center justify-center">
            <img src={four.logo} alt="Zoho" className="" />
          </div>
          <div className="flex items-center bg-white py-3 px-2 matrix rounded">
            <img src={four.icon} alt="hike" className="" />
            <p className="text-base ml-2">{four.text}</p>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <XaasExpert />
      <Statistics />
      <Testimonials />
      <RelatedCase />
      <Footer />
    </div>
  );
}
