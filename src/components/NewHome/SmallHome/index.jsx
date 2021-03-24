/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import loadable from '@loadable/component';
import Navbar from './components/Navbar';
import SpecialSmall from './components/SpecialSmall';
const Hero = loadable(() => import('./components/Hero'));
const Research = loadable(() => import('./components/Research'));
const Drive = loadable(() => import('./components/Drive'));
const Specialised = loadable(() => import('./components/Specialised'));
const Refined = loadable(() => import('./components/Refined'));
const Work = loadable(() => import('./components/Work'));
const Service = loadable(() => import('./components/Service'));
const Connect = loadable(() => import('./components/Connect'));
const Footer = loadable(() => import('./components/Footer'));
const LatestUpdates = loadable(() =>
  import('./components/Footer/LatestUpdates')
);

function SmallHome({ industryData }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      {/* <Research /> */}
      {/* <Drive /> */}
      {/* <Specialised /> */}
      {/* <SpecialSmall /> */}
      <Work />
      <Refined />
      {/* <Connect /> */}
      {/* <LatestUpdates /> */}
      <Footer />
    </div>
  );
}

// export default SmallHome;

export default SmallHome;
