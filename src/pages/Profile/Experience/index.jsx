import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import halfBar from '../../../assets/img/halfBar.svg';
import fullBar from '../../../assets/img/fullBar.svg';
import oneBar from '../../../assets/img/oneBar.svg';
import info from '../../../assets/img/info.svg';
import Information from './Information';
import AddExperienceModal from './AddExperienceModal';

const experience = [
  {
    text: 'Health care',
    ex: 2,
    hover: 'Experience : 3-8 years',
  },
  {
    text: 'Artificial intelligence',
    ex: 3,
    hover: 'Experience : 10 + years',
  },
  {
    text: 'Design',
    ex: 2,
    hover: 'Experience : 3-8 years',
  },
  {
    text: 'Automobile',
    ex: 1,
    hover: 'Experience : 1-2 years',
  },
];
const functionalCap = [
  {
    text: 'Illustrator',
    ex: 2,
    hover: 'Experience : 3-8 years',
  },
  {
    text: 'Graphic Design',
    ex: 3,
    hover: 'Experience : 10 + years',
  },
];

export default function Experience() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  const [addEx, setAddEx] = useState(false);
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
      className="flex flex-wrap justify-between mt-10 pt-14"
    >
      <div className="flex items-center w-full lg:w-auto mb-7 lg:mb-0 justify-between">
        <p
          style={{ color: '#38369A' }}
          className="lg:text-lg self-start relative lg:top-1 font-semibold text-base uppercase"
        >
          EXPERIENCE
        </p>
        {/* small edit and add btn on small screen */}
        <div className="flex lg:hidden item-center">
          <button className="border-indigo-800 border rounded text-indigo-800 px-3 ">
            Edit
          </button>
          <button className="purple ml-4 rounded text-white font-bold text-3xl px-2 ">
            +
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
            >
              - Industry focus
            </p>
            <div className="lg:flex hidden items-center">
              <button
                style={{ border: '1px solid #38369A', color: '#38369A' }}
                className="text-base rounded px-4 py-2"
              >
                Edit Experience
              </button>
              <button
                onClick={() => {
                  setAddEx(true);
                }}
                className="purple text-white px-4 py-2 ml-4 rounded text-base"
              >
                Add Experience
              </button>
            </div>
          </div>
          <div className="flex items-center flex-wrap justify-between">
            {experience.map((item, index) => {
              return (
                <div
                  key={index + 'dfjhkjnb'}
                  className="border flex flex-col lg:flex-row lg:items-center lg:w-96 w-full justify-between rounded mt-3 lg:mt-7 border-gray-200 px-4  py-2 lg:h-16"
                >
                  <p
                    style={{ color: '#707376' }}
                    className=" text-base text-left lg:w-32"
                  >
                    {item.text}
                  </p>
                  <div
                    style={{
                      borderTop:
                        dimensions.width < 780 ? '1px solid #E0E3E7' : '',
                    }}
                    className="flex  w-full pt-3 lg:pt-0 mt-0 mt-2 items-center"
                  >
                    <img
                      src={
                        item.ex === 1
                          ? oneBar
                          : item.ex === 2
                          ? halfBar
                          : fullBar
                      }
                      alt=""
                      className="lg:pr-5 h-2 relative -left-12 lg:left-0 w-full"
                    />
                    <ReactTooltip className="customTool" />

                    <img
                      src={info}
                      data-tip={item.hover}
                      alt=""
                      style={{ borderLeft: '1px solid #D1D4D8' }}
                      className="pl-4 cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:mt-10 mt-5">
          <p
            style={{ color: '#3B3E41' }}
            className="text-lg mb-2 font-semibold lg:mb-0"
          >
            - Functional capabilities
          </p>

          <div className="flex items-center flex-wrap justify-between">
            {functionalCap.map((item, index) => {
              return (
                <div
                  key={index + 'dfjhkjnb'}
                  className="border flex flex-col lg:flex-row lg:items-center lg:w-96 w-full justify-between rounded mt-3 lg:mt-7 border-gray-200 px-4  py-2 lg:h-16"
                >
                  <p
                    style={{ color: '#707376' }}
                    className=" text-base text-left lg:w-40"
                  >
                    {item.text}
                  </p>
                  <div
                    style={{
                      borderTop:
                        dimensions.width < 780 ? '1px solid #E0E3E7' : '',
                    }}
                    className="flex  w-full pt-3 lg:pt-0 mt-0 mt-2 items-center"
                  >
                    <img
                      src={
                        item.ex === 1
                          ? oneBar
                          : item.ex === 2
                          ? halfBar
                          : fullBar
                      }
                      alt=""
                      className="lg:pr-5 h-2 relative -left-12 lg:left-0 w-full"
                    />
                    <ReactTooltip className="customTool" />

                    <img
                      src={info}
                      data-tip={item.hover}
                      alt=""
                      style={{ borderLeft: '1px solid #D1D4D8' }}
                      className="pl-4 cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Information />

        <AddExperienceModal
          visible={addEx}
          setVisible={(val) => {
            setAddEx(val);
          }}
        />
      </div>
    </div>
  );
}
