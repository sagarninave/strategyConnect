import React from 'react';
import soon from '../../assets/img/coming-soon.webp';
import Navbar from '../../components/Home/SmallHome/components/Navbar';
import Footer from '../../components/Home/SmallHome/components/Footer';

export default function index() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-24 lg:mt-48 mb-8 lg:mb-16">
        <img
          src={soon}
          alt=""
          loading="lazy"
          className="mx-auto max-w-xs md:max-w-xl"
        />
      </div>

      <h1 className="text-center font-bold text-base lg:text-4xl mb-20 lg:mb-40">
        Hold tight! We are working on this page.
      </h1>
      <Footer />
    </>
  );
}
