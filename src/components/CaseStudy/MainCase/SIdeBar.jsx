/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import logo from '../../../assets/img/logo.svg';
import close from '../../../assets/img/xBlack.svg';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIndustries } from '../../../state/actions/startProjectAction';
import {
  getCaseStudiesByIndustries,
  getCaseStudiesByProjectTag,
} from '../../../state/actions/caseStudyAction';

function SIdeBar({
  search,
  visibleSidebar,
  setVisibleSidebar,
  arrDown,
  startProject,
  getIndustries,
  setName,
  name,
  getCaseStudiesByProjectTag,
  getCaseStudiesByIndustries,
  setProjName,
  projectName,
  type,
  setType,
}) {
  //   const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [dropOne, setDropOne] = useState(false);
  const [dropTwo, setDropTwo] = useState(false);
  useEffect(() => {
    getIndustries();
  }, []);
  const dropItems = [
    {
      smallText: 'Industry',
      bigText: 'Health care',
      drop: dropOne,
      setDrop: setDropOne,
    },
    {
      smallText: 'Project types',
      bigText: 'Capital raising',
      drop: dropTwo,
      setDrop: setDropTwo,
    },
  ];

  const projectT = [
    {
      id: 13,
      name: 'Capital Raising',
    },
    {
      id: 5,
      name: 'Financial & Ops Modeling',
    },
    {
      id: 9,
      name: 'Due Diligence',
    },
    {
      id: 12,
      name: 'Go-To-Market',
    },
    {
      id: 17,
      name: 'Process Reengineering',
    },
  ];

  return (
    <div className="lg:w-3/12">
      <div className="hidden lg:block">
        <div className="border rounded border-gray-300 flex justify-between items-center p-3.5">
          <input
            type="text"
            // value={type === 1 ? name : projectName}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
            className="border-none focus:outline-none text-base font-thin"
            placeholder="Search project"
          />

          <img src={search} loading="lazy" alt="search" className="" />
        </div>
        <div>
          {dropItems.map((item, i) => {
            return (
              <div
                key={i}
                style={{ background: 'rgba(177,175,229,0.1)' }}
                className="rounded p-5 mt-4 cursor-pointer"
              >
                <div
                  onClick={() => {
                    const me = item.setDrop;
                    me(!item.drop);
                  }}
                  className="flex justify-between"
                >
                  <p className="font-thin text-sm grey-text">
                    {item.smallText}
                  </p>

                  <img
                    src={arrDown}
                    loading="lazy"
                    alt="arrow Down"
                    className={`${
                      i === 0 && name.length === 0
                        ? 'flex'
                        : i === 1 && projectName.length !== 0
                        ? 'hidden'
                        : type === 1 && i === 0
                        ? 'hidden'
                        : 'flex'
                    }`}
                  />
                </div>
                <div
                  className="flex items-center transition duration-500 ease-in-out justify-between"
                  onClick={() => {
                    const me = item.setDrop;
                    me(!item.drop);
                  }}
                >
                  <p className="text-lg font-bold">
                    {i === 0 && name.length === 0
                      ? null
                      : i === 1 && projectName.length !== 0
                      ? projectName
                      : type === 1 && i === 0
                      ? name
                      : null}
                  </p>

                  <img
                    src={arrDown}
                    loading="lazy"
                    alt="arrow Down"
                    className={`${
                      i === 0 && name.length === 0
                        ? 'hidden'
                        : i === 1 && projectName.length !== 0
                        ? 'flex'
                        : type === 1 && i === 0
                        ? 'flex'
                        : 'hidden'
                    }`}
                  />
                </div>

                {i === 0 ? (
                  <span className={`${item.drop ? 'block' : 'hidden'}`}>
                    {startProject.loading ? (
                      <h1>Loading...</h1>
                    ) : (
                      startProject.industries.map((industry, index) => {
                        return (
                          <p
                            key={industry.id + index}
                            onClick={() => {
                              setName(industry.name);
                              setType(1);
                              setProjName('');
                              getCaseStudiesByIndustries(industry.id);
                              const me = item.setDrop;
                              me(!item.drop);
                            }}
                            className="text-lg font-thin mt-2 hover:text-gray-500 w-full"
                          >
                            {industry.name}
                          </p>
                        );
                      })
                    )}
                  </span>
                ) : (
                  <span className={`${item.drop ? 'block' : 'hidden'}`}>
                    {startProject.loading ? (
                      <h1>Loading...</h1>
                    ) : (
                      projectT.map((proj, index) => {
                        return (
                          <p
                            key={proj.id + index}
                            onClick={() => {
                              setProjName(proj.name);
                              setType(2);
                              setName('');
                              getCaseStudiesByProjectTag(proj.id);
                              const me = item.setDrop;
                              me(!item.drop);
                            }}
                            className="text-lg font-thin mt-2 hover:text-gray-500 w-full"
                          >
                            {proj.name}
                          </p>
                        );
                      })
                    )}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${visibleSidebar ? 'block' : 'hidden'}`}>
        <Modal
          visible={visibleSidebar}
          width="100%"
          height="100%"
          effect="fadeInLeft"
          onClickAway={() => setVisibleSidebar(false)}
        >
          <div className="p-4 lg:hidden bg-white h-full relative overflow-y-scroll">
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <img
                  src={logo}
                  loading="lazy"
                  alt="logo"
                  className="h-6 w-6 cursor-pointer"
                />
                <p className="nunito flex  text-sm ml-1.5 relative top-0.5 cursor-pointer">
                  StrategyConnect
                </p>
              </div>
              <img
                src={close}
                loading="lazy"
                alt="close"
                className=""
                onClick={() => {
                  setVisibleSidebar(false);
                }}
              />
            </div>

            <div>
              {dropItems.map((item, i) => {
                return (
                  <div
                    key={i}
                    style={{ background: 'rgba(177,175,229,0.1)' }}
                    className="rounded p-5 mt-4 cursor-pointer"
                  >
                    <p className="font-thin text-sm grey-text">
                      {item.smallText}
                    </p>
                    <div
                      className="flex items-center transition duration-500 ease-in-out justify-between"
                      onClick={() => {
                        const me = item.setDrop;
                        me(!item.drop);
                      }}
                    >
                      <p className="text-lg font-bold">
                        {i === 0 && name.length === 0
                          ? null
                          : i === 1 && projectName.length !== 0
                          ? projectName
                          : type === 1 && i === 0
                          ? name
                          : null}
                      </p>

                      <img
                        src={arrDown}
                        loading="lazy"
                        alt="arrow Down"
                        className=""
                      />
                    </div>

                    {i === 0 ? (
                      <span className={`${item.drop ? 'block' : 'hidden'}`}>
                        {startProject.loading ? (
                          <h1>Loading...</h1>
                        ) : (
                          startProject.industries.map((industry, index) => {
                            return (
                              <p
                                key={industry.id + index}
                                onClick={() => {
                                  setName(industry.name);
                                  setType(1);
                                  setProjName('');
                                  getCaseStudiesByIndustries(industry.id);
                                  const me = item.setDrop;
                                  me(!item.drop);
                                }}
                                className="text-lg font-thin mt-2 hover:text-gray-500 w-full"
                              >
                                {industry.name}
                              </p>
                            );
                          })
                        )}
                      </span>
                    ) : (
                      <span className={`${item.drop ? 'block' : 'hidden'}`}>
                        {startProject.loading ? (
                          <h1>Loading...</h1>
                        ) : (
                          projectT.map((proj, index) => {
                            return (
                              <p
                                key={proj.id + index}
                                onClick={() => {
                                  setProjName(proj.name);
                                  setType(2);
                                  setName('');
                                  getCaseStudiesByProjectTag(proj.id);
                                  const me = item.setDrop;
                                  me(!item.drop);
                                }}
                                className="text-lg font-thin mt-2 hover:text-gray-500 w-full"
                              >
                                {proj.name}
                              </p>
                            );
                          })
                        )}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <p
              onClick={() => {
                setVisibleSidebar(false);
              }}
              className="purple h-10  rounded text-center w-28 mx-auto absolute bottom-12 left-32 text-white flex justify-center items-center  lg:hidden"
            >
              Close
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
}

getIndustries.propTypes = {
  startProject: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  startProject: state.startProject,
});

export default connect(mapStateToProps, {
  getIndustries,
  getCaseStudiesByIndustries,
  getCaseStudiesByProjectTag,
})(SIdeBar);
