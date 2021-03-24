import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import close from '../../../../assets/img/cancel.svg';
import ReactTooltip from 'react-tooltip';
import EllipsisText from 'react-ellipsis-text';
import twitter from '../../../../assets/img/twitter-link.svg';
import linkedin from '../../../../assets/img/linkedin-link.svg';
import link from '../../../../assets/img/star.svg';
import google from '../../../../assets/img/google-link.svg';

export default function ShareModal(props) {
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
  //   const bigHeight = (80 / 100) * dimensions.height;
  //   const smallHeight = dimensions.height;
  return (
    <Modal
      visible={props.visible}
      effect="fadeInUp"
      width={
        dimensions.width < 780
          ? '100%'
          : dimensions.width == 1200
          ? '45%'
          : dimensions.width == 1024
          ? '50%'
          : '40%'
      }
      onClickAway={() => props.setVisible(false)}
    >
      <div
        style={{ height: dimensions.width < 780 ? 'auto' : 'auto' }}
        className="rounded-lg bg-white "
      >
        <div
          style={{ borderBottom: '1px solid rgba(56, 54, 154,0.1)' }}
          className="flex items-center justify-between p-8"
        >
          <p className="lg:text-xl text-base uppercase">
            share with people OR groups
          </p>
          <img
            src={close}
            alt=""
            onClick={() => {
              props.setVisible(false);
            }}
            className="cursor-pointer"
          />
        </div>
        {/* main content */}
        <div className="xl:px-12 px-8 pb-12">
          <div className="flex items-center mt-8 justify-center">
            <img src={link} alt="" className="mr-3" loading="lazy" />
            <h2 className="text-xl font-bold ">Get Link</h2>
          </div>

          <div
            style={{ background: '#F2F5F8', borderRadius: 5 }}
            className="border-none flex items-center p-2 mt-7"
          >
            <p
              className="text-sm pr-3 mr-3 "
              style={{ color: '#707376', borderRight: '1px solid #D1D4D8' }}
            >
              <EllipsisText
                text={' www.scdesign.com/123/abc.kj123jdbschjklertbvnmqwer'}
                length={dimensions.width < 780 ? '30' : '55'}
              />
            </p>

            <button
              //   data-tip="Copied"
              //   data-event="click focus"
              className="text-indigo-600 text-sm "
            >
              Copy Link
              <ReactTooltip globalEventOff="click" />
            </button>
          </div>

          <div
            className="mt-9 pt-10 flex items-center justify-center"
            style={{ borderTop: '1px solid rgba(56, 54, 154,0.1)' }}
          >
            <img src={google} alt="" className="" />
            <img src={linkedin} alt="" className="mx-8" />
            <img src={twitter} alt="" className="" />
          </div>
        </div>
        {/* main content */}
      </div>
    </Modal>
  );
}
