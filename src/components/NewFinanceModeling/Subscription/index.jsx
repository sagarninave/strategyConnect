import React, { useState } from 'react';
import KickstartEngagement from "../../NewPopup/KickstartEngagement";
import Project from "../../NewPopup/Project";

function Subscription() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  return (
    <div>
      {/* Easy subscription Plan */}
      <div className="pb-10 pt-8">
        <p className="text-center xl:text-4xl text-2xl font-bold mt-4">          
          Easy Subscriptions Plans
        </p>
        <p className="marketplace-subheading font-medium text-lg xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-2 text-center font-thin">
          No contracts. No surprise fees.
        </p>
      </div>

      {/* Row 1 */}
      <div className="pt-8 lg:flex lg:mb-0 mb-4 justify-between">
        <div className="flex flex-col mb-8 w:7/12 items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{
                borderBottom: '1px solid #B1B5B9',
                marginBottom: '15px', padding: '9px 0px'
              }}>
              Revenue and <br /> Cost Projections
            </p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Identify revenue drivers and cost streams
                  through primary and secondary research
                  and do financial projections for income and
                  expenses.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Refining the operating expenses as per
                  the scale of the business.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Estimating the capital expenditure
                  essential for running the business.
                </p>
              </li>
            </ul>
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-14 mr-14" 
                 style={{ width: "11.4rem", position:"absolute", bottom:15}}>              
              <button onClick={openModal} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{ borderBottom: '1px solid #B1B5B9', marginBottom: '15px', padding: '9px 0px' }}>
              Financial <br /> Statements
            </p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Preparing Profit and Loss statements,
                    Balance Sheets. and Cash Flow
                    Statements.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Identifying business KPIs, financial ratios,
                    and unit economics, presented through
                    visually appealing infographics.
                  </p>
              </li>
            </ul>
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-14 mr-14" 
                 style={{ width: "11.4rem", position:"absolute", bottom:15}}>              
              <button onClick={openModal} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Row 1 */}
      {/* Row 2 */}
      <div className="pt-8 lg:flex lg:mb-0 mb-4 justify-between">
        <div className="flex flex-col mb-8 items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{ borderBottom: '1px solid #B1B5B9', marginBottom: '15px', padding: '9px 0px' }}>
              Business Valuations <br /> and Sensitivity Analysis
            </p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Company valuation through discounted
                    cash flow method, EBITDA multiples and
                    through ROI and other investment-
                    related metrics.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Undertaking sensitivity analysis to <br />
                    assess “what-if” scenarios and measure
                    the impact of input assumptions.
                  </p>
              </li>
            </ul>
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-14 mr-14" 
                 style={{ width: "11.4rem", position:"absolute", bottom:15}}>              
              <button onClick={openModal} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{ borderBottom: '1px solid #B1B5B9', marginBottom: '15px', padding: '9px 0px' }}>
              Creating a Scalable <br /> Financial Model Structure
            </p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Preparing easy  understand the model <br />
                  flow using videos with professional  <br />
                  voice-overs.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Evaluating unit economics.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Preparing an index for the model.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Creating a modular structure of the  <br />
                    model to allow for addition/removal of a  <br />
                    business units and geographies.
                </p>
              </li>
            </ul>
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-14 mr-14" 
                 style={{ width: "11.4rem", position:"absolute", bottom:15}}>              
              <button onClick={openModal} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Row 2 */}

      <div className="pb-10 pt-8">
        <p className="text-center xl:text-4xl text-2xl font-bold mt-4">          
        Couldn't find what you were looking for?
        </p>
         <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-14 mr-14" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button onClick={openModal2} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
            <p className="relative" style={{ margin: 'auto' }}>Customize</p>
          </button>
        </div>
        <p className="marketplace-subheading font-medium text-lg xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-2 text-center font-thin">
        Customize as per your need.
        </p>
      </div>
      
      {/* <div className="px-auto pt-0">
        <p className="sm:text-2xl lg:text-2xl text-black font-semibold text-center mx-auto lg:w-11/12 xl:w-11/12 sm:w-11/12 w-11/12">
          Couldn't find what you were looking for?
        </p>
        <div style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px'}}
            className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-14 mr-14">
          <button onClick={openModal2} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
            <p className="relative" style={{ margin: 'auto' }}>Customize</p>
          </button>
        </div>
        <p className="text-lg customisepara light_grey grey-text text-gray text-center mx-auto font-medium mt-5 mb-12">
          Customize as per your need.
        </p>
      </div> */}

      <KickstartEngagement open={modalIsOpen} close={closeModal} enquiry_type="Financial Marketing"/>
      <Project open={modalIsOpen2} close={closeModal2}/>

    </div>
  );
}

export default Subscription;