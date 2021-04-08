/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import Summary from '../Summary';
import pieActive from '../../../assets/img/pieActive.svg';
import pieInactive from '../../../assets/img/pieInactive.svg';
import arrowActive from '../../../assets/img/arrowActive.svg';
import person from '../../../assets/img/person.svg';
import personActive from '../../../assets/img/personActive.svg';
import challenge from '../../../assets/img/challenge.svg';
import challengeActive from '../../../assets/img/challengeActive.svg';
import roc from '../../../assets/img/roc.svg';
import rocActive from '../../../assets/img/rocActive.svg';
import idea from '../../../assets/img/idea.svg';
import ideaActive from '../../../assets/img/ideaActive.svg';
import image1 from '../../../assets/img/img-1.svg';
import image2 from '../../../assets/img/img-2.svg';
import image3 from '../../../assets/img/img-3.svg';
import image4 from '../../../assets/img/img-4.svg';
import image5 from '../../../assets/img/img-5.svg';
import { Link } from 'react-router-dom';
import Interested from '../Interested/Index';
import Experts from '../Experts';

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

function Overview() {
  const [visibleSection, setVisibleSection] = useState();
  // const [oneActive, setActive] = useState(true);
  // const [twoActive, setTwoActive] = useState(false);
  // const [threeActive, setThreeActive] = useState(false);
  // const [fourActive, setFourActive] = useState(false);
  // const [fiveActive, setFiveActive] = useState(false);

  const images = [image1, image2, image3, image4, image5];

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const overviewRef = useRef(null);
  const challengeRef = useRef(null);
  const approachRef = useRef(null);
  const impactRef = useRef(null);

  const sectionRefs = [
    { section: 'about', ref: aboutRef },
    { section: 'overview', ref: overviewRef },
    { section: 'challenge', ref: challengeRef },
    { section: 'approach', ref: approachRef },
    { section: 'impact', ref: impactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + 65;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  // const setOneActive = (val1, val2, val3, val4, val5) => {
  //   setActive(val1);
  //   setTwoActive(val2);
  //   setThreeActive(val3);
  //   setFourActive(val4);
  //   setFiveActive(val5);
  // };

  return (
    <div className="">
      <div className="mt-20 md:px-10 xl:px-32 w-full flex  justify-between  px-4">
        <div
          ref={headerRef}
          className="hidden lg:block sticky top-20 h-2/4 md:w-3/12  xl:w-2/12"
        >
          <ul>
            <p
              // href="#overview"
              onClick={() => {
                // setOneActive(true, false, false, false, false);
                scrollTo(overviewRef.current);
              }}
              className="flex item-center cursor-pointer"
            >
              <img
                src={visibleSection === 'overview' ? pieActive : pieInactive}
                loading="lazy"
                alt="pieActive"
              />
              <p
                className={`text-base font-bold ${
                  visibleSection === 'overview' ? 'purple_text' : 'grey-text'
                } px-4`}
              >
                Overview
              </p>
              <img
                src={arrowActive}
                loading="lazy"
                alt="arrow"
                className={`h-5 relative ${
                  visibleSection === 'overview' ? '' : 'hidden'
                } top-1`}
              />
            </p>

            <p
              // href="#about"
              onClick={() => {
                // setOneActive(false, true, false, false, false);
                scrollTo(aboutRef.current);
              }}
              className="flex item-center cursor-pointer mt-7"
            >
              <img
                src={visibleSection === 'about' ? personActive : person}
                alt="pieActive"
                loading="lazy"
                style={{
                  marginRight: visibleSection === 'about' ? '' : 7,
                  position: 'relative',
                  left: visibleSection === 'about' ? '' : 4,
                }}
              />
              <p
                className={`text-base font-bold  ${
                  visibleSection === 'about' ? 'purple_text' : 'grey-text'
                }  px-4`}
              >
                About client
              </p>
              <img
                src={arrowActive}
                alt="arrow"
                loading="lazy"
                className={`h-5 relative ${
                  visibleSection === 'about' ? '' : 'hidden'
                } top-1`}
              />
            </p>

            <p
              // href="#challenge"
              onClick={() => {
                // setOneActive(false, false, true, false, false);
                scrollTo(challengeRef.current);
              }}
              className="flex item-center cursor-pointer mt-7"
            >
              <img
                src={
                  visibleSection === 'challenge' ? challengeActive : challenge
                }
                alt="pieActive"
                loading="lazy"
                className=""
              />
              <p
                className={`text-base font-bold ${
                  visibleSection === 'challenge' ? 'purple_text' : 'grey-text'
                } px-4`}
              >
                Challenges
              </p>
              <img
                src={arrowActive}
                loading="lazy"
                alt="arrow"
                className={`h-5 relative ${
                  visibleSection === 'challenge' ? '' : 'hidden'
                } top-1`}
              />
            </p>

            <p
              // href="#approach"
              onClick={() => {
                // setOneActive(false, false, false, true, false);
                scrollTo(approachRef.current);
              }}
              className="flex item-center cursor-pointer mt-7"
            >
              <img
                src={visibleSection === 'approach' ? rocActive : roc}
                alt="pieActive"
                loading="lazy"
                className=""
              />

              <p
                className={`text-base font-bold ${
                  visibleSection === 'approach' ? 'purple_text' : 'grey-text'
                } px-4`}
              >
                Approach
              </p>
              <img
                src={arrowActive}
                alt="arrow"
                loading="lazy"
                className={`h-5 relative ${
                  visibleSection === 'approach' ? '' : 'hidden'
                } top-1`}
              />
            </p>

            <p
              // href="#impact"
              onClick={() => {
                // setOneActive(false, false, false, false, true);
                scrollTo(impactRef.current);
              }}
              className="flex item-center cursor-pointer mt-7"
            >
              <img
                src={visibleSection === 'impact' ? ideaActive : idea}
                alt="pieActive"
                loading="lazy"
                className=""
              />

              <p
                className={`text-base font-bold ${
                  visibleSection === 'impact' ? 'purple_text' : 'grey-text'
                } px-4`}
              >
                Impact
              </p>
              <img
                src={arrowActive}
                alt="arrow"
                loading="lazy"
                className={`h-5 relative ${
                  visibleSection === 'impact' ? 'purple_text' : 'hidden'
                } top-1`}
              />
            </p>
          </ul>

          <div className="flex items-center flex-wrap mt-12">
            {images.map((image, i) => {
              return (
                <img
                  key={i}
                  alt="people"
                  loading="lazy"
                  src={image}
                  className="mr-1 mt-1"
                />
              );
            })}
          </div>

          <p className=" py-2 px-3 rounded purple hover:bg-indigo-900 text-white text-center mt-7 text-sm cursor-pointer">
            <Link Link to="/contact">
              Contact Us
            </Link>
          </p>
        </div>
        <Summary
          aboutRef={aboutRef}
          overviewRef={overviewRef}
          impactRef={impactRef}
          approachRef={approachRef}
          challengeRef={challengeRef}
        />
      </div>
      <Experts />
      <div className="xl:px-32 md:px-10 px-4 sticky top-0">
        <Interested />
      </div>
    </div>
  );
}

export default Overview;
