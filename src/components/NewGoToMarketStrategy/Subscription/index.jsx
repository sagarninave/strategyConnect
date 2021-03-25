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
      <div className="pb-10 pt-14">
        <p className="text-center xl:text-2xl text-2xl font-bold">
          Easy Subscriptions Plans
        </p>
        <p className="font-medium text-md xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-2 text-center font-thin">
          No contracts. No surprise fees.
        </p>
      </div>

      <div className="pt-8 flex lg:mb-0 mb-32 justify-center">
        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics" style={{height:"500px"}}>
            <p className="text-lg md:text-2xl font-bold leading-10"
              style={{
                borderBottom: '1px solid #B1B5B9',
                marginBottom: '15px', padding: '9px 0px'
              }}>
             Market <br/> Analysis
            </p>
            <ul>
              <li className="font14 mb-4"> 
                <p className="leading-6" style={{color:"#5C5B5B"}}> 
                  <span className="tick"></span> 
                  Assessment of market scenario including 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;customer segmentation, target customer 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;personas and market size estimation.                
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{color:"#5C5B5B"}}> 
                  <span className="tick"></span>
                  Identifying unique value preposition and 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;market positioning.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{color:"#5C5B5B"}}> 
                  <span className="tick"></span>
                  Identifying competitor segmentation by 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product offering, price, customer focus,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;geography and traction. 
                </p>
              </li>
            </ul>
            
            <div className="p-2 pl-2 mt-20 pt-0 rounded-md border-2 ml-16 mr-16" style={{width:"11.4rem"}}>
              <button onClick={openModal} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                  <p className="relative">Make Enquiry</p> 
              </button>
            </div>
            {/* <button className="btnButton">Make Enquiry</button> */}
          </div>
        </div>
      </div>


      <div className="px-auto pt-0 mt-32">
        <p className="sm:text-2xl lg:text-2xl text-black font-semibold text-center mx-auto lg:w-11/12 xl:w-11/12 sm:w-11/12 w-11/12">
          Couldn't find what you were looking for?
        </p>
        {/* <div className="justify-center p-2 pl-2 mt-5 pt-0 rounded-md border-2 ml-16 mr-16" style={{width:"11.4rem"}}>
          <button onClick={openModal2} 
            className="text-white purple lg:w-36 w-full flex items-center mt-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
              <p className="relative">Customize</p> 
          </button>
        </div> */}
        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button onClick={openModal2} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
            <p className="relative" style={{ margin: 'auto' }}>Customize</p>
          </button>
        </div>
        <p className="text-lg light_grey grey-text text-gray text-center mx-auto font-medium mt-5 mb-12">
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
            {/* <button type="submit" className="btnButton">Submit</button> */}
            <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{width:"11.4rem",margin: 'auto',marginTop:' 25px'}}>
                <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                    <p className="relative" style={{margin:'auto'}}>Submit</p> 
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
            <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{width:"11.4rem",margin: 'auto',marginTop:' 25px'}}>
                <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                    <p className="relative" style={{margin:'auto'}}>Submit</p> 
                </button>
              </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Subscription;