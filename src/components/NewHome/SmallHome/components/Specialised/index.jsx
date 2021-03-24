/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import health from '../../../../../assets/img/health.jpg';
import education from '../../../../../assets/img/education.jpg';
import hTtech from '../../../../../assets/img/h-tech.jpg';
import AI from '../../../../../assets/img/ai.jpg';
import eco from '../../../../../assets/img/eco.jpg';
import xaas from '../../../../../assets/img/xaas.jpg';
import box from '../../../../../assets/img/whiteBall.svg';
import bolt from '../../../../../assets/img/bolt.svg';
import ReactFloaterJs from 'react-floaterjs';
// import Carousel from 'react-elastic-carousel';
import speaker from '../../../../../assets/img/speaker.svg';
import speakerOne from '../../../../../assets/img/speakerOne.svg';
import speakerTwo from '../../../../../assets/img/speakerTwo.svg';
import xaasOne from '../../../../../assets/img/xaas1.svg';
import xaasTwo from '../../../../../assets/img/xaas2.svg';
import xaasThree from '../../../../../assets/img/xaas3.svg';
import otOne from '../../../../../assets/img/ot1.svg';
import otTwo from '../../../../../assets/img/ot2.svg';
import otThree from '../../../../../assets/img/ot3.svg';
import ecoOne from '../../../../../assets/img/eco1.svg';
import ecoTwo from '../../../../../assets/img/eco2.svg';
import ecoThree from '../../../../../assets/img/eco3.svg';
import esOne from '../../../../../assets/img/es1.svg';
import esTwo from '../../../../../assets/img/es2.svg';
import esThree from '../../../../../assets/img/es3.svg';
import dfOne from '../../../../../assets/img/df1.svg';
import dfTwo from '../../../../../assets/img/df2.svg';
import dfThree from '../../../../../assets/img/df3.svg';

export default function index() {
  const [title, setTitle] = useState('Due Diligence');
  const [changeText, setChangeText] = useState(
    'Performing due diligence on potential investment options with high-end analytics tools and subject-matter experts'
  );
  const [activeNumber, setactiveNumber] = useState(0);
  const [activeOne, setactiveOne] = useState(true);
  const [activetwo, setactivetwo] = useState(false);
  const [activeThree, setactiveThree] = useState(false);
  const [activeFour, setactiveFour] = useState(false);
  const [activeFive, setactiveFive] = useState(false);
  const [activeSix, setactiveSix] = useState(false);

  // const items = [
  //   {
  //     id: 1,
  //     image: health,
  //     name: 'Health Care',
  //     text:
  //       'The strategic planning guides teams or individual through various exercises that will help them.',
  //   },
  //   {
  //     id: 2,
  //     image: AI,
  //     name: 'AI',
  //     text:
  //       'The strategic planning guides teams or individual through various exercises that will help them.',
  //   },
  //   {
  //     id: 3,
  //     image: xaas,
  //     name: 'XaaS',
  //     text:
  //       'The strategic planning guides teams or individual through various exercises that will help them.',
  //   },
  //   {
  //     id: 4,
  //     image: education,
  //     name: 'Education',
  //     text:
  //       'The strategic planning guides teams or individual through various exercises that will help them.',
  //   },
  //   {
  //     id: 4,
  //     image: eco,
  //     name: 'E - COmmerce',
  //     text:
  //       'The strategic planning guides teams or individual through various exercises that will help them.',
  //   },
  //   {
  //     id: 4,
  //     image: hTtech,
  //     name: 'Health - Tech',
  //     text:
  //       'The strategic planning guides teams or individual through various exercises that will help them.',
  //   },
  // ];

  const changeRight = [
    {
      iconOne: speaker,
      titleOne: 'Commercial Diligence',
      textOne:
        'Assessment of target’s core competency, industry analysis, customer dynamics, and competitive landscape',
      iconTwo: speakerOne,
      titleTwo: 'Operational Diligence',
      textTwo:
        'Analysis of operational activities across different functions (e.g. sales), organization structure difference and infrastructure',
      iconThree: speakerTwo,
      titleThree: 'Technical Diligence',
      textThree:
        'In-depth review of target’s product core capabilities, including feature set, IP defensibility and monetizable assets',
    },
    {
      iconOne: xaasOne,
      titleOne: 'XaaS Strategy',
      textOne:
        'Defining overall business strategy, and business models to drive growth and manage churn',
      iconTwo: xaasTwo,
      titleTwo: 'Target Capabilities',
      textTwo:
        'Designing business requirements of customer- facing and backend enterprise capabilities to support the XaaS strategy ',
      iconThree: xaasThree,
      titleThree: 'Archiect & Implementation',
      textThree:
        'Architecting and implementing business requirements gathered during capability design',
    },
    {
      iconOne: otOne,
      titleOne: 'Analyse Current State',
      textOne:
        'Understanding and analyzing the overall current state and maturity level of the S&OP Cycle',
      iconTwo: otTwo,
      titleTwo: 'Design Forecasting',
      textTwo:
        'Collaboratively design and pilot forecasting and demand planning models from processes to excel modelling',
      iconThree: otThree,
      titleThree: 'Install S&OP Process',
      textThree:
        'Planning, piloting, refining, and implementing designed solutions along with monitoring and sustainability requirements ',
    },
    {
      iconOne: ecoOne,
      titleOne: 'Define e-com strategy',
      textOne:
        'Defining an organizations ecommerce maturity, and building an e-com/omni preparedness plan',
      iconTwo: ecoTwo,
      titleTwo: 'Design e-com strategy',
      textTwo:
        'Develop e-com blue-print around the firm’s internal structure to achieve smooth transition to online sales',
      iconThree: ecoThree,
      titleThree: 'Going online',
      textThree:
        'Agile roadmap to plan, pilot, refine, and implement designed solutions',
    },
    {
      iconOne: esOne,
      titleOne: 'Market analysis',
      textOne:
        'Performing primary and secondary market research, benchmarking, and market sizing',
      iconTwo: esTwo,
      titleTwo: 'Pitch decks',
      textTwo:
        'Creating tailored decks for different key stakeholders such as investors and clients',
      iconThree: esThree,
      titleThree: 'Modeling',
      textThree:
        'Performing financial modeling and business modeling backed by industry experts',
    },
    {
      iconOne: dfOne,
      titleOne: 'Digital strategy',
      textOne:
        'Articulating company’s digital vision, including defining the target customer,  partner and employee experience',
      iconTwo: dfTwo,
      titleTwo: 'Design capability design',
      textTwo:
        'Describing target-state capabilities required to enable the digital strategy and assessing current capabilities maturity',
      iconThree: dfThree,
      titleThree: 'Archiect & Implementation',
      textThree:
        'Detailing business requirements (policies and process) and system architecture to address gaps and create implementation roadmaps',
    },
  ];

  return (
    <div className="mt-20 hidden xl:block ">
      <p className="text-center lg:text-4xl text-lg font-bold">
        We specialise in
      </p>
      <p
        style={{ color: '#707376' }}
        className="text-base lg:w-4/12 w-11/12 mx-auto light_grey mt-4 text-center lg:mt-6 mt-4 font-thin"
      >
        Delivering end-to-end managed projects in a wide range of industries and
        functions
      </p>

      <div className=" justify-between  hidden xl:flex   mb-20 mt-48 pr-16">
        <div className="switchBg  relative">
          <ReactFloaterJs>
            <img src={bolt} alt="box" className="absolute z-0 pl-28 -top-32" />
          </ReactFloaterJs>
          <ReactFloaterJs>
            <img src={box} alt="box" className="absolute z-0 pl-24 top-96" />
          </ReactFloaterJs>

          <div className="flex content-center justify-between xl:w-6/12 sm:w-11/12 mx-auto items-center">
            <ul className="flex p-3 relative -top-16 justify-between flex-col items-center">
              <li
                onClick={() => {
                  setTitle('Due Diligence');
                  setactiveOne(true);
                  setactivetwo(false);
                  setactiveThree(false);
                  setactiveFour(false);
                  setactiveFive(false);
                  setactiveSix(false);
                  setactiveNumber(0);
                  setChangeText(
                    'We bring in extensive strategy experience to help you achieve your transaction goals'
                  );
                }}
                className={`${
                  activeOne ? 'active_padding' : 'white_padding'
                } p-2 cursor-pointer`}
              >
                <li className="relative" style={{ width: 127.55, height: 129 }}>
                  <LazyLoadImage
                    alt={health}
                    effect="blur"
                    className="h-32 z-0 rounded-lg"
                    src={health}
                  />
                  <div className="h-32 absolute p-bg z-10 w-full top-0 left-0  rounded-lg" />
                  <p className="text-base text-white absolute bottom-0 left-0 pb-2 pl-2 z-20">
                    Due Diligence
                  </p>
                </li>
              </li>

              <li
                onClick={() => {
                  setTitle('XaaS');
                  setactiveOne(false);
                  setactivetwo(true);
                  setactiveThree(false);
                  setactiveFour(false);
                  setactiveFive(false);
                  setactiveSix(false);
                  setactiveNumber(1);
                  setChangeText(
                    'Building XaaS models is complex. We help companies create and execute an effective XaaS strateg'
                  );
                }}
                className={`${
                  activetwo ? 'active_padding mt-11' : 'white_padding mt-11'
                } p-2 cursor-pointer`}
              >
                <li
                  className={`${activetwo ? '' : ''} relative`}
                  style={{ width: 127.55, height: 129 }}
                >
                  <LazyLoadImage
                    alt={AI}
                    effect="blur"
                    className="h-32 z-0 rounded-lg"
                    src={AI}
                  />
                  <div className="h-32 absolute p-bg z-10 w-full top-0 left-0  rounded-lg" />
                  <p className="text-base text-white absolute bottom-0 left-0 pb-2 pl-2 z-20">
                    XaaS
                  </p>
                </li>
              </li>

              <li
                onClick={() => {
                  setTitle(' Operation Transformation');
                  setactiveOne(false);
                  setactivetwo(false);
                  setactiveThree(true);
                  setactiveFour(false);
                  setactiveFive(false);
                  setactiveSix(false);
                  setactiveNumber(2);
                  setChangeText(
                    'We match supply and demand by ensuring collaboration across all departments in an organization and align daily operations with corporate strategy'
                  );
                }}
                className={`${
                  activeThree ? 'active_padding mt-11' : 'white_padding mt-11'
                } p-2 cursor-pointer`}
              >
                <li
                  className={`${activeThree ? '' : ''} relative`}
                  style={{ width: 127.55, height: 129 }}
                >
                  <LazyLoadImage
                    alt={xaas}
                    effect="blur"
                    className="h-32 z-0 rounded-lg"
                    src={xaas}
                  />
                  <div className="h-32 absolute p-bg z-10 w-full top-0 left-0 opacity-30 rounded-lg" />
                  <p className="text-base text-white absolute bottom-0 left-0 pb-2 pl-2 z-20">
                    Operation Transformation
                  </p>
                </li>
              </li>
            </ul>

            <ul className="flex p-3 justify-between relative top-10 flex-col items-center">
              <li
                onClick={() => {
                  setTitle('E-Commerce');
                  setactiveOne(false);
                  setactivetwo(false);
                  setactiveThree(false);
                  setactiveFour(true);
                  setactiveFive(false);
                  setactiveSix(false);
                  setactiveNumber(3);
                  setChangeText(
                    'We help organizations “plan for & implement” steps needed to build their e-commerce capability'
                  );
                }}
                className={`${
                  activeFour ? 'active_padding' : 'white_padding'
                } p-2 cursor-pointer`}
              >
                <li className="relative" style={{ width: 127.55, height: 129 }}>
                  <LazyLoadImage
                    alt={education}
                    effect="blur"
                    className="h-32 z-0 rounded-lg"
                    src={education}
                  />

                  <div className="h-32 absolute p-bg z-10 w-full top-0 left-0 rounded-lg" />
                  <p className="text-base text-white absolute bottom-0 left-0 pb-2 pl-2 z-20">
                    E-Commerce
                  </p>
                </li>
              </li>

              <li
                onClick={() => {
                  setTitle('Enabling Services');
                  setactiveOne(false);
                  setactivetwo(false);
                  setactiveThree(false);
                  setactiveFour(false);
                  setactiveFive(true);
                  setactiveSix(false);
                  setactiveNumber(4);
                  setChangeText(
                    'We provide a variety of enabling services to successfully deliver results across seven service lines '
                  );
                }}
                className={`${
                  activeFive ? 'active_padding mt-11' : 'white_padding mt-11'
                } p-2 cursor-pointer`}
              >
                <li
                  className={`${activeFive ? '' : ''} relative`}
                  style={{ width: 127.55, height: 129 }}
                >
                  <LazyLoadImage
                    alt={eco}
                    effect="blur"
                    className="h-32 z-0 rounded-lg"
                    src={eco}
                  />
                  <div className="h-32 absolute p-bg z-10 w-full top-0 left-0 rounded-lg" />
                  <p className="text-base text-white absolute bottom-0 left-0 pb-2 pl-2 z-20">
                    Enabling Services
                  </p>
                </li>
              </li>

              <li
                onClick={() => {
                  setTitle('Digital First');
                  setactiveOne(false);
                  setactivetwo(false);
                  setactiveThree(false);
                  setactiveFour(false);
                  setactiveFive(false);
                  setactiveSix(true);
                  setactiveNumber(5);
                  setChangeText(
                    'We bring extensive experience and tools to help clients with their digital transformation effort'
                  );
                }}
                className={`${
                  activeSix ? 'active_padding mt-11' : 'white_padding mt-11'
                } p-2 cursor-pointer`}
              >
                <li
                  className={`${activeSix ? '' : ''} relative`}
                  style={{ width: 127.55, height: 129 }}
                >
                  <LazyLoadImage
                    alt={hTtech}
                    effect="blur"
                    className="h-32 z-0 rounded-lg"
                    src={hTtech}
                  />
                  <div className="h-32 absolute p-bg z-10 w-full top-0 left-0 rounded-lg" />
                  <p className="text-base text-white absolute bottom-0 left-0 pb-2 pl-2 z-20">
                    Digital First
                  </p>
                </li>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-7/12">
          <p className="text-3xl font-bold">{title}</p>

          <p
            style={{ color: '#3B3E41' }}
            className="text-base w-7/12 light_grey text-left leading-8 mt-6  font-thin"
          >
            {changeText}
          </p>
          <div className="w-7/12">
            <div className="border-top-thin flex">
              <img
                src={changeRight[activeNumber].iconOne}
                loading="lazy"
                alt="icon"
                className=" mr-4 h-7 relative top-1"
              />
              <div>
                <p className="text-2xl">{changeRight[activeNumber].titleOne}</p>
                <p className="text-sm grey-text font-light mt-4">
                  {changeRight[activeNumber].textOne}
                </p>
              </div>
            </div>

            <div className="border-top-thin flex">
              <img
                src={changeRight[activeNumber].iconTwo}
                loading="lazy"
                alt="icon"
                className=" mr-4 h-7 relative top-1"
              />
              <div>
                <p className="text-2xl">{changeRight[activeNumber].titleTwo}</p>
                <p className="text-sm grey-text font-light mt-4">
                  {changeRight[activeNumber].textTwo}
                </p>
              </div>
            </div>

            <div className="border-top-thin flex">
              <img
                src={changeRight[activeNumber].iconThree}
                alt="icon"
                loading="lazy"
                className=" mr-4 h-7 relative top-1"
              />
              <div>
                <p className="text-2xl">
                  {changeRight[activeNumber].titleThree}
                </p>
                <p className="text-sm grey-text font-light mt-4">
                  {changeRight[activeNumber].textThree}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
