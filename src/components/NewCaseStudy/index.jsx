/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Navbar from '../NewHome/SmallHome/components/Navbar';
import Footer from '../NewHome/SmallHome/components/Footer';
import CaseHero from './CaseHero';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCaseStudies } from '../../state/actions/caseStudyAction';
import MainCase from './MainCase';

function CaseStudy({ getCaseStudies }) {
  useEffect(() => {
    getCaseStudies();

    document.title = 'StrategyConnect | CaseStudy';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <CaseHero />
      <MainCase />
      <Footer />
    </div>
  );
}

getCaseStudies.propTypes = {
  caseStudy: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  caseStudy: state.caseStudy,
});

export default connect(mapStateToProps, { getCaseStudies })(CaseStudy);
