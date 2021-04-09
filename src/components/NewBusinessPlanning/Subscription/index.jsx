import React, { useState } from 'react';
import KickstartEngagement from "../../NewPopup/KickstartEngagement";
import Project from "../../NewPopup/Project";

function Subscription() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [industry, setIndustry] = useState();

  function openModal(et) {
    setIndustry(et)
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
              Market <br /> Analysis</p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Assessment of market scenario including
                  customer segmentation, target customer
                  personas, and market size estimation.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Identifying unique value proposition and
                  market positioning.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Identifying competitor segmentation by
                  product offering, price, customer focus,
                  geography and traction.
                </p>
              </li>
            </ul>
            <div className="kickstart-popup-button p-2 pl-2 pt-0 rounded-md border-2"
              style={{ width: "11.4rem", position: "absolute", bottom: 15, left:"5.5rem" }}>
              <button onClick={() => openModal("Market Analysis")} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{ borderBottom: '1px solid #B1B5B9', marginBottom: '15px', padding: '9px 0px' }}>
              Business <br /> Traction Analysis
              </p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Identifying key levers of success and
                    market traction such as ARR, MRR and
                    projected growth trends.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Highlighting key customer(s) acquired.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Underlining revenue and customer
                    growth trends.
                  </p>
              </li>
            </ul>
            <div className="kickstart-popup-button p-2 pl-2 pt-0 rounded-md border-2"
              style={{ width: "11.4rem", position: "absolute", bottom: 15, left:"5.5rem" }}>
              <button onClick={() => openModal("Business Traction Analysis")} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
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
              Operational <br />  Viability</p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Evaluating sales channels and <br />
                    marketing strategy.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Assessing organization growth.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Assessing technology readiness.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Addressing cost optimization through
                    outsourcing and creative procurement
                    strategies.
                  </p>
              </li>
            </ul>
            <div className="kickstart-popup-button p-2 pl-2 pt-0 rounded-md border-2"
              style={{ width: "11.4rem", position: "absolute", bottom: 15, left:"5.5rem" }}>
              <button onClick={() => openModal("Operational Viability")} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{ borderBottom: '1px solid #B1B5B9', marginBottom: '15px', padding: '9px 0px' }}>
              Financial Viability <br />  & Planning
            </p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Evaluating key financial ratios.
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
                  Assessing the cost of customer acquisition.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Creating cash flow growth scenarios.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Developing comprehensive 3 to 5-year
                  growth roadmap with clearly defined
                  milestones.
                </p>
              </li>
            </ul>
            <div className="kickstart-popup-button p-2 pl-2 pt-0 rounded-md border-2"
              style={{ width: "11.4rem", position: "absolute", bottom: 15, left:"5.5rem" }}>
              <button onClick={() => openModal("Financial Viability & Planning")} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
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
         <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button onClick={openModal2} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
            <p className="relative" style={{ margin: 'auto' }}>Customize</p>
          </button>
        </div>
        <p className="marketplace-subheading font-medium text-lg xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-2 text-center font-thin">
        Customize as per your need.
        </p>
      </div>

      <KickstartEngagement 
        open={modalIsOpen} 
        close={closeModal} 
        enquiry_type="Business Planning" 
        industry={industry}
      />
      
      <Project 
        open={modalIsOpen2} 
        close={closeModal2}
        enquiry_type="Business Planning" 
      />

    </div>
  );
}

export default Subscription;