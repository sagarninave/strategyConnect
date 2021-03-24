/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../../assets/img/logo.svg';
import arrDown from '../../../../../assets/img/arrDown.svg';
import burger from '../../../../../assets/img/burger.svg';
import close from '../../../../../assets/img/xWhite.svg';
import linkedIn from '../../../../../assets/img/linkedin.svg';
import twitter from '../../../../../assets/img/twitter.svg';
import medium from '../../../../../assets/img/medium.svg';
import Modal from 'react-awesome-modal';
import KickStart from './KickStart';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default function Navbar() {
  const [showVertical, setShowVertical] = useState(false);
  const [showSmallVertical, setShowSmallVertical] = useState(false);
  const [showKickstart, setShowKickstart] = useState(false);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setShowVertical(false));

  const socials = [linkedIn, twitter, medium];
  return (
    <nav className="navbarCont py-3 lg:px-32 px-8 flex items-center justify-between w-full sticky z-30 top-0">
      <div className="flex items-center cursor-pointer">
        <Link to="/">
          <img
            src={logo}
            loading="lazy"
            alt="StategyConnectLogo"
            className="h-6 w-6 cursor-pointer"
          />
        </Link>
        <Link to="/">
          <p className="nunito lg:flex hidden text-sm ml-1.5 relative top-0.5 cursor-pointer">
            StrategyConnect
          </p>
        </Link>
      </div>

      <ul className="items-center xl:flex hidden justify-between w-2/6">
        <li className="no-underline text-base text-black hover:text-gray-500  cursor-pointer">
          <NavLink to="/about" activeClassName="selected">About Us</NavLink>
        </li>
        <li className="no-underline text-base text-black hover:text-gray-500  cursor-pointer">
          <NavLink to="/product-offering" activeClassName="selected">Our Offerings</NavLink>
        </li>
        <li className="no-underline text-base text-black hover:text-gray-500  cursor-pointer">
          <NavLink to="/contact" activeClassName="selected">Contact Us</NavLink>
        </li>
       
      </ul>

      <div className="flex items-center">
        <p
          onClick={() => {
            setShowKickstart(true);
          }}
          className="ml-3.5 py-2 px-9 rounded purple text-white text-sm hover:bg-indigo-900 cursor-pointer"
        >
          Sign In
        </p>
        <img
          onClick={() => setVisibleSidebar(true)}
          src={burger}
          alt="burger"
          className="xl:hidden flex ml-4 cursor-pointer"
        />
        <div className={`${visibleSidebar ? 'block' : 'hidden'}`}>
          <Modal
            visible={visibleSidebar}
            width="100%"
            height="100%"
            effect="fadeInLeft"
            onClickAway={() => setVisibleSidebar(false)}
          >
            <div className="p-4 xl:hidden bg-black h-full overflow-y-scroll">
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-6 w-6 cursor-pointer"
                  />
                  <p className="nunito flex text-white  text-sm ml-1.5 relative top-0.5 cursor-pointer">
                    StrategyConnect
                  </p>
                </div>
                <img
                  src={close}
                  alt="close"
                  className=""
                  onClick={() => {
                    setVisibleSidebar(false);
                  }}
                />
              </div>

              <ul className="pl-4 mt-10">
                <li
                  onClick={() => setVisibleSidebar(false)}
                  className="text-lg font-bold text-white mt-4"
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={() => setVisibleSidebar(false)}
                  className="text-lg font-bold text-white mt-4"
                >
                  <Link to="/approach"> Approach</Link>
                </li>
                <li className="no-underline text-lg mt-4 font-bold text-white flex items-center cursor-pointer">
                  <p
                    onClick={() => {
                      setShowSmallVertical(!showSmallVertical);
                    }}
                  >
                    Verticals
                  </p>
                  <img src={arrDown} alt="arrDown" className="ml-3" />
                </li>
                <ul
                  className={`pl-4 ${showSmallVertical ? 'block' : 'hidden'}`}
                >
                  <li
                    onClick={() => setVisibleSidebar(false)}
                    className="text-lg font-bold text-white mt-4"
                  >
                    <Link to="/coming-soon">Health-tech</Link>
                  </li>
                  <li
                    onClick={() => setVisibleSidebar(false)}
                    className="text-lg font-bold text-white mt-4"
                  >
                    <Link to="/xaas">XaaS</Link>
                  </li>
                  <li
                    onClick={() => setVisibleSidebar(false)}
                    className="text-lg font-bold text-white mt-4"
                  >
                    <Link to="/coming-soon">Artificial intelligence</Link>
                  </li>
                  <li
                    onClick={() => setVisibleSidebar(false)}
                    className="text-lg font-bold text-white mt-4"
                  >
                    <Link to="/coming-soon">E-commerce</Link>
                  </li>
                  <li
                    onClick={() => setVisibleSidebar(false)}
                    className="text-lg font-bold text-white mt-4"
                  >
                    <Link to="/coming-soon">Ed-tech</Link>
                  </li>
                  <li
                    onClick={() => setVisibleSidebar(false)}
                    className="text-lg font-bold text-white mt-4"
                  >
                    <Link to="/caseStudy">All Case Studies</Link>
                  </li>
                </ul>
                <li
                  onClick={() => setVisibleSidebar(false)}
                  className="text-lg font-bold text-white mt-4"
                >
                  <Link to="/about">About us</Link>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-grey-top w-full">
                <p className="text-center text-white text-base font-thin">
                  Let’s craft brillance together
                </p>

                <p
                  onClick={() => {
                    setShowKickstart(true);
                    setVisibleSidebar(false);
                  }}
                  className="py-2 px-4 purple mx-auto w-44 text-center text-white rounded mt-4"
                >
                  Start a project
                </p>

                <div className="mt-10 w-2/4 mx-auto flex justify-between items-center">
                  {socials.map((item, i) => {
                    return (
                      <img src={item} loading="lazy" key={i} alt="socials" />
                    );
                  })}
                </div>
              </div>
            </div>
          </Modal>
        </div>

        <div className={`${showKickstart ? 'block' : 'hidden'}`}>
          <KickStart visible={showKickstart} setVisible={setShowKickstart} />
        </div>
      </div>
    </nav>
  );
}
