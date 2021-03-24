import React, { useEffect } from 'react';
// import Navbar from '../Home/SmallHome/components/Navbar';
// import Footer from '../Home/SmallHome/components/Footer';
import Navbar from '../NewHome/SmallHome/components/Navbar';
import Footer from '../NewHome/SmallHome/components/Footer';
import MainAppHero from './MainAppHero';
import MainStepOne from './MainStepOne';
import MainStepThree from './MainStepThree';
import MainStepTwo from './MainStepTwo';
import MainStepFour from './MainStepFour';
import StepFive from './StepFive';

export default function MainApproach() {
  useEffect(() => {
    document.title = 'StrategyConnect | Approach';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <MainAppHero />
      <MainStepOne />
      <MainStepTwo />
      <MainStepThree />
      <MainStepFour />
      <StepFive />
      <Footer />
    </div>
  );
}
