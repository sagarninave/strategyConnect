import React, { useState, useEffect } from 'react';
import target from '../../../assets/img/target.svg';
import EllipsisText from 'react-ellipsis-text';
import { connect } from 'react-redux';
import { getCaseStudiyItem } from '../../../state/actions/caseStudyAction';
import { Link } from 'react-router-dom';

function Interested({ caseStudy, getCaseStudiyItem }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  // const images = [tyler, tyler2, tyler3];

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  var aValue = localStorage.getItem('industry');

  let limitCase = JSON.parse(aValue).slice(0, 3);

  return (
    <div className="top-divide-line  my-20">
      <p className="mt-10 sm:text-3xl textxl text-center lg:text-left font-bold">
        You might be interested in
      </p>
      <div className="flex lg:flex-row flex-col flex-wrap justify-between items-center">
        {limitCase.map((item, i) => {
          return (
            <Link
              to={{
                pathname: '/client',
                caseId: `${item.id}`,
              }}
              onClick={() => {
                getCaseStudiyItem(item.id);
                scrollTop();
              }}
              // onClick={scrollTop}
              // onClick={() => {
              //   window.location.reload(false);
              // }}
            >
              <div
                key={i}
                className="rounded border mt-7 xl:w-96 md:w-72 w-full border-gray-300"
              >
                <div className="relative">
                  <img
                    src={item.cover_image}
                    loading="lazy"
                    alt="tyler"
                    className="lg:h-52 h-28 w-full   lg:w-auto"
                  />
                  <div className="tyler-opacity rounded lg:h-52 h-28 absolute top-0 left-0 z-10" />
                  <div className="flex absolute bottom-0 right-0 pr-3 pb-3">
                    {item.industries.map((indus, i) => {
                      return (
                        <p
                          key={indus.id}
                          className={`btn-opacity z-10 p-2 ${
                            i === 1 ? 'mx-2' : ''
                          } rounded text-xs text-white`}
                        >
                          <EllipsisText
                            text={indus.name}
                            length={dimensions.width < 780 ? 15 : 25}
                          />
                          {/* {indus.name} */}
                        </p>
                      );
                    })}

                    {/* <p className="btn-opacity mx-2 z-10 p-2 rounded text-xs text-white">
                        Retailing
                      </p>
                      <p className="btn-opacity z-10 p-2 rounded text-xs text-white">
                        Health care
                      </p> */}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-base font-bold">
                    <EllipsisText text={item.title} length={45} />{' '}
                  </p>
                  <p className="grey-text mt-2 text-sm lg:text-base font-thin">
                    The client is one of the leading real estate of a developers
                    with a portfolio comprising enviro...
                  </p>

                  <div className="flex mt-2">
                    <img
                      src={target}
                      loading="lazy"
                      alt="target"
                      className="mr-2"
                    />
                    <p className="lg:text-sm text-xs grey-text">
                      we helped to achive their target in{' '}
                      <span className="font-bold text-black">
                        First quarter
                      </span>{' '}
                      by increasing the sales by{' '}
                      <span className="font-bold text-black">33%</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  caseStudy: state.caseStudy,
});

export default connect(mapStateToProps, { getCaseStudiyItem })(Interested);
