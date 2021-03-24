import React from 'react';
import Navbar from '../../components/Home/SmallHome/components/Navbar';
import Footer from '../../components/Home/SmallHome/components/Footer';
import AboutProfile from './AboutProfile';
import Experience from './Experience';
import Prodisplay from './Prodisplay';
import ProfileHeading from './ProfileHeading';
import ProfilePicture from './ProfilePicture';
import Projects from './Projects';
import Languages from './Languages';
import Preferences from './Preferences';

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="xl:px-36 px-8 mt-20 ">
        <Prodisplay />
        <div className="lg:border  rounded mt-5   lg:mt-10 lg:mb-20 mb-10  border-gray-100">
          <ProfilePicture />
          <div className="xl:px-20 md:px-10 px-0">
            <ProfileHeading />
            <AboutProfile />
            <Experience />
            <Projects />
            <Languages />
            <Preferences />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
