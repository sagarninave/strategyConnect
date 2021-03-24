import React, { useState, useEffect } from 'react';
import checked from '../../../assets/img/checkB.svg';
import unchecked from '../../../assets/img/unCheck.svg';
import EditPreferences from './EditPreferences';

export default function Preferences() {
  const [editPref, setEditPref] = useState(false);
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
    <div
      style={{ borderTop: '1px solid rgba(10, 10, 10,0.1)' }}
      className="flex flex-wrap items-center justify-between mt-5 lg:mt-10 pt-7 lg:pt-14"
    >
      <div
        className={`flex items-center w-full self-start lg:w-auto mb-7 lg:mb-0 justify-between`}
      >
        <p
          style={{ color: '#38369A' }}
          className="lg:text-lg self-start relative top-2 font-semibold text-base uppercase"
        >
          Preferences
        </p>
        {/* small edit and add btn on small screen */}
        <div className="flex lg:hidden item-center">
          <button
            onClick={() => {
              setEditPref(true);
            }}
            className="border-indigo-800 border rounded text-indigo-800 px-3 "
          >
            Edit
          </button>
        </div>
        {/* small edit and add btn on small screen */}
      </div>
      <div className="w-full lg:w-4/5">
        <div className="">
          <div className="flex flex-wrap  items-center justify-between">
            <p
              style={{ color: '#3B3E41' }}
              className="text-lg font-semibold mb-2 lg:mb-0"
            ></p>
            <div className="lg:flex hidden items-center">
              <button
                onClick={() => {
                  setEditPref(true);
                }}
                style={{ border: '1px solid #38369A', color: '#38369A' }}
                className="text-base rounded px-4 py-2"
              >
                Edit Preferences
              </button>
            </div>
          </div>
          {/* preference body */}
          <div className="lg:mt-14 mt-7">
            {/* item one */}
            <div
              style={{ borderBottom: '1px solid rgba(10, 10, 10,0.1)' }}
              className="pb-10"
            >
              <p className="text-xl">- Your engagement preference</p>
              <div className="flex items-center">
                <div className="flex items-center mt-4 mr-4">
                  <img src={checked} alt="" className=" mr-3" />
                  <p className="text-xl " style={{ color: '#38369A' }}>
                    Full time
                  </p>
                </div>

                <div className="flex items-center mt-4">
                  <img src={unchecked} alt="" className=" mr-3" />
                  <p
                    className="text-xl "
                    style={{ color: 'rgba(112, 115, 118,0.3)' }}
                  >
                    Part time
                  </p>
                </div>
              </div>
            </div>
            {/* item one */}
            {/* item two */}
            <div
              style={{ borderBottom: '1px solid rgba(10, 10, 10,0.1)' }}
              className="pb-10 mt-10"
            >
              <p className="text-xl">- Your location preference</p>
              <div className="flex items-center">
                <div className="flex items-center mt-4 mr-4">
                  <img src={checked} alt="" className=" mr-3" />
                  <p className="text-xl " style={{ color: '#38369A' }}>
                    Remote
                  </p>
                </div>

                <div className="flex items-center mt-4">
                  <img src={unchecked} alt="" className=" mr-3" />
                  <p
                    className="text-xl "
                    style={{ color: 'rgba(112, 115, 118,0.3)' }}
                  >
                    On-site
                  </p>
                </div>
              </div>
            </div>
            {/* item two */}
            {/* item three */}
            <div className="pb-10 mt-10">
              <p className="text-xl">- Your hourly rates in USD</p>
              <div className="flex flex-col lg:flex-row lg:items-center ml-4">
                <div className="flex items-center mt-4">
                  <p style={{ color: '#707376' }} className="text-xl">
                    Remote:
                  </p>
                  <p className="text-base ml-2">
                    $20{' '}
                    <span
                      style={{ color: '#B1B5B9' }}
                      className="text-xs relative lg:-top-0.5"
                    >
                      per hr
                    </span>
                  </p>
                </div>

                <div
                  style={{
                    borderLeft:
                      dimensions.width < 780
                        ? ''
                        : '1px solid rgba(10, 10, 10,0.1)',
                  }}
                  className="flex items-center mt-4 lg:ml-4 lg:pl-4"
                >
                  <p style={{ color: '#707376' }} className="text-xl">
                    On site:
                  </p>
                  <p className="text-base ml-2">
                    $25{' '}
                    <span
                      style={{ color: '#B1B5B9' }}
                      className="text-xs relative lg:-top-0.5"
                    >
                      per hr
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* item three */}
          </div>
          {/* preference body */}
        </div>
      </div>

      <EditPreferences
        visible={editPref}
        setVisible={(val) => {
          setEditPref(val);
        }}
      />
    </div>
  );
}
