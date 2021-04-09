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
     
      <div className="pb-10 pt-8">
        <p className="text-center xl:text-4xl text-2xl font-bold mt-4">          
          Easy Subscriptions Plans
        </p>
        <p className="marketplace-subheading font-medium text-lg xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-2 text-center font-thin">
          No contracts. No surprise fees.
        </p>
      </div>

      <div className="pt-8 lg:pt-0 mb-8 flex lg:mb-8 xl:mb-8 justify-center">
        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics" style={{height:"500px"}}>
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{
                borderBottom: '1px solid #B1B5B9',
                marginBottom: '15px', padding: '9px 0px'
              }}>
             Market <br/> Analysis
            </p>
            <ul>
              <li className="font14 mb-4"> 
                <p className="leading-6 financeCardDesc" style={{color:"#5C5B5B"}}> 
                  <span className="tick"></span> 
                  Assessment of market scenario including 
                  customer segmentation, target customer 
                  personas, and market size estimation.                
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{color:"#5C5B5B"}}> 
                  <span className="tick"></span>
                  Identifying unique value proposition and 
                  market positioning.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6 financeCardDesc" style={{color:"#5C5B5B"}}> 
                  <span className="tick"></span>
                  Identifying competitor segmentation by 
                  product offering, price, customer focus,<br/>
                  geography, and traction. 
                </p>
              </li>
            </ul>
            
            <div className="kickstart-popup-button p-2 pl-2 pt-0 rounded-md border-2"
              style={{ width: "11.4rem", position: "absolute", bottom: 15, left:"5.5rem" }}>
              <button onClick={openModal} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p>
              </button>
            </div>
          </div>
        </div>
      </div>

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

      {/* <div className="px-auto pt-0 mt-8 lg:mt-8">
        <p className="sm:text-2xl lg:text-2xl text-black font-semibold text-center mx-auto lg:w-11/12 xl:w-11/12 sm:w-11/12 w-11/12">
          Couldn't find what you were looking for?
        </p>
        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button onClick={openModal2} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
            <p className="relative" style={{ margin: 'auto' }}>Customize</p>
          </button>
        </div>
        <p className="text-lg customisepara light_grey grey-text text-gray text-center mx-auto font-medium mt-5 mb-12">
          Customize as per your need.
        </p>
      </div> */}

      <KickstartEngagement open={modalIsOpen} close={closeModal} enquiry_type="Go-To Market Strategy"/>
      <Project open={modalIsOpen2} close={closeModal2}/>

    </div>
  );
}

export default Subscription;