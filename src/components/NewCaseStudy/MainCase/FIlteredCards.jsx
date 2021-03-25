import React, { useState, useEffect } from 'react';
import EllipsisText from 'react-ellipsis-text';
import target from '../../../assets/img/target.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function FIlteredCards({ caseStudy, Loading }) {
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

  let limitCaseStudy =
    caseStudy.length > 10 ? caseStudy.slice(0, 10) : caseStudy;

  return (
    <div className="flex flex-wrap justify-between w-full">
      {Loading.caseStudyLoading ? (
        <p className="text-center mx-auto my-32 text-3xl">Loading...</p>
      ) : caseStudy.length === 0 ? (
        <p className="text-center mx-auto my-32">No Listings Found</p>
      ) : (
        limitCaseStudy.map((item, i) => {
          return (
            <Link
              key={item.id}
              to={{
                pathname: '/client',
                caseId: `${item.id}`,
              }}
            >
              <div className="rounded border mt-7  caseW w-full border-gray-300">
                <div className="relative">
                  <img
                    src={item.cover_image}
                    loading="lazy"
                    alt="tyler"
                    className="lg:h-52 h-28 w-full rounded lg:w-auto"
                  />
                  <div className="tyler-opacity lg:h-52 h-28 absolute top-0 left-0 z-10" />
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
                    {/* {item.title} */}
                  </p>
                  <p className="grey-text mt-2 text-sm lg:text-base font-thin">
                    {/* {item.description} */}
                    The client is one of the leading real estate of a developers
                    with a portfolio comprising enviro...
                  </p>

                  <div className="flex mt-6">
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
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  Loading: state.caseStudy,
});

export default connect(mapStateToProps, {})(FIlteredCards);
