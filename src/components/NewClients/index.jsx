/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import logo from '../../assets/img/spi-logo.svg';
import web from '../../assets/img/web.svg';
import banner from '../../assets/img/banner.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCaseStudiyItem } from '../../state/actions/caseStudyAction';
import Navbar from '../NewHome/SmallHome/components/Navbar';
import Footer from '../NewHome/SmallHome/components/Footer';
import LoadingOverlay from 'react-loading-overlay';
import Overview from './Overview';
import { Redirect, useHistory } from 'react-router-dom';

function Clients({ getCaseStudiyItem, location, caseStudy }) {
  if (caseStudy.caseStudyItem === null) {
    <Redirect from="/client" to="/caseStudy" />;
  }
  useEffect(() => {
    const { caseId } = location;
    document.title = 'StrategyConnect | Clients';
    window.scrollTo(0, 0);
    getCaseStudiyItem(caseId);
  }, []);

  const history = useHistory();

  const { caseStudyItem } = caseStudy;
  return (
    <>
      <LoadingOverlay
        active={caseStudy.caseStudyLoading}
        spinner
        text="Loading client data..."
      >
        <Navbar />
        <div className=" flex lg:flex-row flex-col justify-between lg:items-center lg:mt-40 mt-20 lg:pl-32 pl-4  sm:w-9/12 w-full ">
          <img
            src={logo}
            loading="lazy"
            alt="spi-logo"
            className="self-start h-10"
          />
          <div className="mt-4 lg:mt-0">
            <p className="uppercase text-sm grey-text font-thin">industry</p>
            <p className="text-lg lg:font-semibold font-thin">E-commerce</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="uppercase text-sm grey-text font-thin">CLIENT</p>
            <p className="text-lg lg:font-semibold font-thin">SPI Industries</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="uppercase text-sm grey-text font-thin">YEAR</p>
            <p className="text-lg lg:font-semibold font-thin">2019 - 2020</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="uppercase text-sm grey-text font-thin">Link</p>
            <a
              href="facebok.net"
              target="_blank"
              className="text-lg lg:font-semibold cursor-pointer font-thin flex items-center"
            >
              Website{' '}
              <img src={web} loading="lazy" alt="web" className="ml-2" />
            </a>
          </div>
        </div>

        <p className="lg:ml-32  lg:text-4xl text-lg lg:w-6/12 ml-4 lg:mt-16 mt-8 font-semibold">
          {caseStudyItem.title}
        </p>

        <img
          // src={caseStudyItem.cover_image.url}
          src={banner}
          loading="lazy"
          alt="banner"
          className="lg:mt-24 mt-12"
        />
      </LoadingOverlay>
      <Overview />

      <Footer />
    </>
  );
}

getCaseStudiyItem.propTypes = {
  caseStudy: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  caseStudy: state.caseStudy,
});

export default connect(mapStateToProps, { getCaseStudiyItem })(Clients);
