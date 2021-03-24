import React, { useState, useEffect } from 'react';
import sai from '../../../assets/img/sai.webp';
import uploadWhite from '../../../assets/img/uploadWhite.svg';
import purpEdit from '../../../assets/img/purpEdit.svg';
import editWhite from '../../../assets/img/editWhite.svg';
import resumeWhite from '../../../assets/img/resumeWhite.svg';
import downloadWhite from '../../../assets/img/downloadWhite.svg';
import whiteArrDown from '../../../assets/img/whiteArrDown.svg';
import whiteArrUp from '../../../assets/img/whiteArrUp.svg';
import heart from '../../../assets/img/heart.svg';
import design from '../../../assets/img/design.svg';
import brain from '../../../assets/img/brain.svg';
import EditProfile from './EditProfile';
import ShareModal from './ShareModal';

const specialtyArray = [
  {
    img: heart,
    text: 'Health care',
  },
  {
    img: design,
    text: 'Design',
  },
  {
    img: brain,
    text: 'Artificial Intelligence',
  },

  {
    img: heart,
    text: 'Health care',
  },
];

export default function ProfileHeading(props) {
  const [resume, setResume] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center">
      <img
        src={props.logo ? props.logo : sai}
        style={{ border: '12px solid white', borderRadius: 25 }}
        alt=""
        className="lg:h-40 h-32 w-32 lg:w-40 rounded -top-10 relative "
        loading="lazy"
      />

      <div className="lg:ml-10 w-full">
        <div className="flex lg:flex-row flex-col items-center w-full justify-between ">
          <h1 className="lg:text-3xl text-lg font-bold">
            {props.name ? props.name : 'Sai pavan chowdary Y'}
          </h1>
          {/* mobile view */}
          <p
            style={{
              color: '#707376',
            }}
            className="font-medium text-sm lg:hidden"
          >
            12 Years of experience
          </p>
          <div style={{ color: '#707376' }} className="block lg:hidden">
            <div className="flex items-center flex-wrap  justify-between ">
              <p
                style={{ color: ' #3B3E41' }}
                className="text-sm mt-3 font-medium "
              >
                Specialised in:
              </p>
              {specialtyArray.map((item, index) => {
                return (
                  <div
                    key={index + 'dkhjnkm'}
                    className="flex mt-3 items-center "
                  >
                    <div
                      style={{ borderRadius: '50%' }}
                      className={`h-1 bg-gray-300 ${
                        index === 0 ? 'hidden' : ''
                      } w-1 mx-1`}
                    />
                    <img src={item.img} alt="" className="mr-2 h-5" />
                    <p className="text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* mobile view */}

          <div
            style={{
              borderTop:
                dimensions.width < 780
                  ? '1px solid rgba(177, 181, 185,0.4)'
                  : '',
            }}
            className="flex w-full lg:w-auto px-3 lg:px-0  items-center relative mt-5 lg:mt-0 pt-5 lg:pt-0 justify-between"
          >
            <button
              onClick={() => {
                setEditProfile(true);
              }}
              style={{ color: '#38369A', border: '1px solid #38369A' }}
              className="flex items-center lg:text-base text-sm rounded py-1.5  px-4"
            >
              <img
                src={purpEdit}
                alt=""
                className="mr-2 hidden lg:block"
                loading="lazy"
              />
              Edit
            </button>

            <button
              onClick={() => {
                setShareModal(true);
              }}
              className="flex text-white purple mx-3 hover:bg-indigo-900 items-center lg:text-base text-sm  rounded py-1.5 px-4"
            >
              <img
                src={uploadWhite}
                alt=""
                className="mr-2 hidden lg:block"
                loading="lazy"
              />
              Share
            </button>

            <button
              onClick={() => {
                setResume(!resume);
              }}
              className="flex text-white purple hover:bg-indigo-900 items-center lg:text-base text-sm  rounded py-1.5 px-4"
            >
              <img
                src={resumeWhite}
                alt=""
                className="mr-2 hidden lg:block"
                loading="lazy"
              />
              <span
                className="pr-2"
                style={{ borderRight: '1px solid rgba(255, 255, 255,0.4)' }}
              >
                Resume
              </span>
              <img
                src={resume ? whiteArrDown : whiteArrUp}
                alt=""
                className="ml-2"
              />
            </button>
            {/* dropdown COntent */}
            <div
              style={{
                width: dimensions.width < 780 ? 112 : 144.85,
                top: dimensions.width < 780 ? 50 : 34,
                right: dimensions.width < 780 ? 12 : null,
              }}
              className={`absolute ${resume ? '' : 'hidden'} right-0`}
            >
              <div className="flex lg:px-5 px-2 lg:py-2 py-1 text-sm lg-text-base items-center cursor-pointer purple hover:bg-indigo-900 text-white w-full">
                <img src={editWhite} alt="" className="hidden lg:block" />
                <p className="ml-2">Edit</p>
              </div>
              <div
                style={{
                  borderBottomLeftRadius: '0.25rem',
                  borderBottomRightRadius: '0.25rem',
                }}
                className="flex lg:px-5 px-2.5 lg:py-2 py-1 text-sm lg-text-baseitems-center cursor-pointer purple hover:bg-indigo-900 text-white w-full"
              >
                <img
                  src={downloadWhite}
                  alt=""
                  className="relative hidden lg:block -top-0.5"
                />
                <p className="ml-2">Download</p>
              </div>
            </div>
            {/* dropdown COntent */}
          </div>
        </div>

        <div className="lg:flex hidden  mt-5">
          <p
            style={{
              color: '#3B3E41',
              borderRight: '1px solid rgba(177, 181, 185,0.8)',
            }}
            className="font-semibold text-lg h-6 w-64"
          >
            12 Years of experience
          </p>
          <div
            style={{ color: '#707376' }}
            className="flex ml-2 justify-between"
          >
            <p className=" text-lg w-40">Specialised in:</p>
            <div className="flex items-center flex-wrap justify-items-end ">
              {specialtyArray.map((item, index) => {
                return (
                  <div key={index + 'dkhjnkm'} className="flex items-center ">
                    <div
                      style={{ borderRadius: '50%' }}
                      className={`h-1 bg-gray-300 ${
                        index === 0 ? 'hidden' : ''
                      } w-1 mx-1`}
                    />
                    <img src={item.img} alt="" className="mr-2" />
                    <p className="text-lg">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <EditProfile
        visible={editProfile}
        setVisible={(val) => {
          setEditProfile(val);
        }}
      />

      <ShareModal
        visible={shareModal}
        setVisible={(val) => {
          setShareModal(val);
        }}
      />
    </div>
  );
}
