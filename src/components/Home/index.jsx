/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import SmallHome from './SmallHome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCaseStudies } from '../../state/actions/caseStudyAction';

function Home({ getCaseStudies }) {
  useEffect(() => {
    getCaseStudies();
    document.title = 'StrategyConnect | Home';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SmallHome />
    </div>
  );
}

getCaseStudies.propTypes = {
  caseStudy: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getCaseStudies })(Home);
