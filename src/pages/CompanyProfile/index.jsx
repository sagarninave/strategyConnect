import React from 'react';
import Navbar from '../../components/Home/SmallHome/components/Navbar';
import Footer from '../../components/Home/SmallHome/components/Footer';
import AboutProfile from '../Profile/AboutProfile';
import Experience from '../Profile/Experience';
import ProfileHeading from '../Profile/ProfileHeading';
import ProfilePicture from '../Profile/ProfilePicture';
import Projects from '../Profile/Projects';
import pep from '../../assets/img/company.webp';
import zazzy from '../../assets/img/zazzy.svg';

export default function CompanyProfile() {
  return (
    <>
      <Navbar />
      <div className="xl:px-36 px-8 mt-20 ">
        <div className="lg:border  rounded mt-5   lg:mt-10 lg:mb-20 mb-10  border-gray-100">
          <ProfilePicture img={pep} />
          <div className="xl:px-20 md:px-10 px-0">
            <ProfileHeading logo={zazzy} name="Zazzy.studio" />
            <AboutProfile />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
