import React, { useState } from 'react';
import Navbar from '../Home/SmallHome/components/Navbar';
import Footer from '../Home/SmallHome/components/Footer';
import ApproachHero from './ApproachHero';
import Consultants from './Consultants';
import Benefits from './Benefits';
import Getting from './Getting';
import Testimonials from './Testimonials';
import Logos from './Logos';
import Talent from './Talent';

export default function Approach() {
  return (
    <>
      <Navbar />
      <ApproachHero />
      <Consultants />
      <Benefits />
      <Getting />
      <Testimonials />
      <Logos />
      <Talent />
      <Footer />
    </>
  );
}
