import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  }
};
function Subscription() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  // var subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  return (
    <div>
      {/* Easy subscription Plan */}
      <div className="pb-0 lg:pb-10 xl:pb-10 pt-5 lg:pt-14 xl:pt-14">
        <p className="businessHeading text-center xl:text-2xl text-2xl font-bold">
          Easy Subscriptions Plans
        </p>
        <p className="font-medium text-md xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-2 text-center font-thin">
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
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-16 mr-16" 
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
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-16 mr-16" 
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
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-16 mr-16" 
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
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-16 mr-16" 
                 style={{ width: "11.4rem", position:"absolute", bottom:15}}>              
              <button onClick={openModal} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Row 2 */}

      <div className="px-auto pt-0">
        <p className="sm:text-2xl lg:text-2xl text-black font-semibold text-center mx-auto lg:w-11/12 xl:w-11/12 sm:w-11/12 w-11/12">
          Couldn't find what you were looking for?
        </p>
        <div style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px'}}
            className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16">
          <button onClick={openModal2} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
            <p className="relative" style={{ margin: 'auto' }}>Customize</p>
          </button>
        </div>
        <p className="text-lg customisepara light_grey grey-text text-gray text-center mx-auto font-medium mt-5 mb-12">
          Customize as per your need.
        </p>
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <h4 className="text-lg md:text-2xl font-bold leading-10 text-center">
              Kickstart Engagement
              <span className="floatRight">
                <button onClick={closeModal}>
                  <AiOutlineCloseCircle />
                </button>
              </span>
            </h4>
            <p className="font-semibold text-md mt-3 xl:w-10/12 w-11/12 mx-auto light_grey grey-text text-center font-thin">
              It takes less than a minute
            </p>
          </div>
          <form class="formInline">
            <input type="text" id="namee" placeholder="Name" />
            <input type="text" id="Organisation" placeholder="Organisation Name" />
            <input type="text" id="Email" placeholder="Email ID" />
            <input type="text" id="Phone" placeholder="Phone Number" />
            <textarea placeholder="Message"></textarea>
            <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
              <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative" style={{ margin: 'auto' }}>Submit</p>
              </button>
            </div>
          </form>
        </Modal>

        {/* Modal second */}

        <Modal
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal2}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <h4 className="text-lg md:text-2xl font-bold leading-10 text-center">
              Project Information
            <span className="floatRight">
                <button onClick={closeModal2}>
                  <AiOutlineCloseCircle />
                </button>
              </span>
            </h4>
            <p className="font-semibold text-md mt-3 xl:w-10/12 w-11/12 mx-auto light_grey grey-text text-center font-thin">
              Lets talk about everything.
            </p>
          </div>
          <form class="formInline">
            <input type="text" id="name" placeholder="Name" />
            <input type="text" id="Organisation Name" placeholder="Organisation Name" />
            <input type="text" id="Email ID" placeholder="Email ID" />
            <input type="text" id="Phone Number" placeholder="Phone Number" />
            <input type="text" id="Industry" placeholder="Industry" />
            <input type="text" id="Project Title" placeholder="Project Title" />
            <textarea placeholder="Project Description"></textarea>
            {/* <button type="submit" className="btnButton">Submit</button> */}
            <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
              <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative" style={{ margin: 'auto' }}>Submit</p>
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Subscription;