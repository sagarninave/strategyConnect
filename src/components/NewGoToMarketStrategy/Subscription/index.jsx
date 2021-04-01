import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const customMobileStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%'
  }
};

function Subscription() {

  const [dimensions, setDimensions] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const messageForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      organization: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Phone is required'),
      message: Yup.string().required('Message is required'),
      organization: Yup.string().required('Organization is required'),
    }),
    onSubmit: values => {
      console.log("VAVVAVVAVA",values)
      alert(JSON.stringify(values, null, 2));
    },
  });


  const projectForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      industry: '',
      project: '',
      projectdescription: '',

    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Phone is required'),
      message: Yup.string().required('Message is required'),
      organization: Yup.string().required('Organization is required'),
      industry: Yup.string().required('Industry is required'),
      project: Yup.string().required('Project Title is required'),
      projectdescription: Yup.string().required('Project Description is required'),
    }),
    onSubmit: values => {
      console.log("VAVVAVVAVA",values)
      alert(JSON.stringify(values, null, 2));
    },
  });

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
      <div className="pb-0 lg:pb-10 xl:pb-10 pt-5 lg:pt-14 xl:pt-14">
        <p className="businessHeading text-center xl:text-2xl text-2xl font-bold">
          Easy Subscriptions Plans
        </p>
        <p className="font-medium text-md xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-2 text-center font-thin">
          No contracts. No surprise fees.
        </p>
      </div>

      <div className="pt-8 lg:pt-0 mb-8 flex lg:mb-8 xl:mb-8 justify-center">
        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics" style={{height:"500px"}}>
            <p className="text-lg cardHeading md:text-2xl font-bold leading-10"
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
            
            <div className="p-2 pl-2 pt-0 rounded-md border-2 ml-16 mr-16" 
                 style={{ width: "11.4rem", position:"absolute", bottom:15}}>
              <button onClick={openModal} className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative">Make Enquiry</p> 
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-auto pt-0 mt-8 lg:mt-8">
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
      </div>

      <div className="showInDesktop">
        {/* desktop */}

        { dimensions > 480 ?
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
              <span className="floatRight">
                <button onClick={closeModal}>
                  <AiOutlineCloseCircle style={{fontSize:"1.5rem"}}/>
                </button>
              </span>
              <p className="text-2xl text-center font-semibold"> Kickstart Engagement </p>
              
              <p className="text-sm grey-text text-center mt-2">
                It takes less than a minute
              </p>
              <form onSubmit={messageForm.handleSubmit}>
                <div className="flex items-center mt-14">
                  <input
                    type="text"
                    className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                    placeholder="Name"
                    id="name"
                    name="name"
                    onChange={messageForm.handleChange}
                    onBlur={messageForm.handleBlur}
                    value={messageForm.values.name}
                  />
                  <input
                    type="text"
                    className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                    placeholder="Organisation Name"
                    id="organization"
                    name="organization"
                    onChange={messageForm.handleChange}
                    onBlur={messageForm.handleBlur}
                    value={messageForm.values.organization}
                  />
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                    placeholder="Email"
                    name="email"
                    onChange={messageForm.handleChange}
                    onBlur={messageForm.handleBlur}
                    value={messageForm.values.email}
                  />
                  <input
                    type="text"
                    className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                    placeholder="Phone Number"
                    name="phone"
                    onChange={messageForm.handleChange}
                    onBlur={messageForm.handleBlur}
                    value={messageForm.values.phone}
                  />
                </div>

                <textarea
                  className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-4 text-sm"
                  placeholder="Message"
                  rows="5"
                  name="message"
                  onChange={messageForm.handleChange}
                  onBlur={messageForm.handleBlur}
                  value={messageForm.values.message}
                />
                <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
                  <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
                    <p className="relativeContact ">Submit</p>
                  </button>
                </div>
              </form>
            </div>
          </Modal> :
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customMobileStyles}
            contentLabel="Example Modal"
          >
          <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
            <span className="floatRight">
              <button onClick={closeModal}>
                <AiOutlineCloseCircle style={{fontSize:"1.5rem"}}/>
              </button>
            </span>
            <p className="text-2xl text-center font-semibold"> Kickstart Engagement </p>
            <p className="text-sm grey-text text-center mt-2">
              It takes less than a minute
            </p>
            <form onSubmit={messageForm.handleSubmit} className="w-full">
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Name"
                  id="name"
                  name="name"
                  onChange={messageForm.handleChange}
                  onBlur={messageForm.handleBlur}
                  value={messageForm.values.name}
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Organisation Name"
                  id="organization"
                  name="organization"
                  onChange={messageForm.handleChange}
                  onBlur={messageForm.handleBlur}
                  value={messageForm.values.organization}
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Email"
                  name="email"
                  onChange={messageForm.handleChange}
                  onBlur={messageForm.handleBlur}
                  value={messageForm.values.email}
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={messageForm.handleChange}
                  onBlur={messageForm.handleBlur}
                  value={messageForm.values.phone}
                />
              </div>
              <div className="flex items-center mt-4">
                <textarea
                  className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded text-sm"
                  placeholder="Message"
                  rows="3"
                  name="message"
                    onChange={messageForm.handleChange}
                    onBlur={messageForm.handleBlur}
                    value={messageForm.values.message}
                />
              </div>
              <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
                <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
                  <p className="relativeContact ">Submit</p>
                </button>
              </div>
            </form>
          </div>
        </Modal>
        }     

        {/* Project */}
        { dimensions > 480 ?
          <Modal
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal2}
          onRequestClose={closeModal2}
          style={dimensions > 480 ? customStyles : customMobileStyles}
          contentLabel="Example Modal"
        >
          <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
            <span className="floatRight">
              <button onClick={closeModal2}>
                <AiOutlineCloseCircle style={{fontSize:"1.5rem"}}/>
              </button>
            </span>
            <p className="text-2xl text-center font-semibold"> Project Information </p>
            
            <p className="text-sm grey-text text-center mt-2">
              Lets talk about everything
            </p>
            <form onSubmit={projectForm.handleSubmit}>
              <div className="flex items-center mt-14">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                  placeholder="Name"
                  id="name"
                  name="name"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.name}
                />
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                  placeholder="Organisation Name"
                  id="organization"
                  name="organization"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.organization}
                />
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                  placeholder="Email"
                  name="email"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.email}
                />
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.phone}
                />
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                  placeholder="Industry"
                  name="industry"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.inustry}
                />
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                  placeholder="Project Title"
                  name="project"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.project}
                />
              </div>

              <textarea
                className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-4 text-sm"
                placeholder="Project Description"
                rows="5"
                name="projectdescription"
                onChange={projectForm.handleChange}
                onBlur={projectForm.handleBlur}
                value={projectForm.values.projectdescription}
              />
              <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
                <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
                  <p className="relativeContact ">Submit</p>
                </button>
              </div>
            </form>
          </div>
        </Modal> : 
          <Modal
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal2}
          style={customMobileStyles}
          contentLabel="Example Modal"
        >
          <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
            <span className="floatRight">
              <button onClick={closeModal2}>
                <AiOutlineCloseCircle style={{fontSize:"1.5rem"}}/>
              </button>
            </span>
            <p className="text-2xl text-center font-semibold"> Project Information </p>
            <p className="text-sm grey-text text-center mt-2">
            Lets talk about everything
            </p>
            <form onSubmit={projectForm.handleSubmit} className="w-full">
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Name"
                  id="name"
                  name="name"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.name}
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Organisation Name"
                  id="organization"
                  name="organization"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.organization}
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Email"
                  name="email"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.email}
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.phone}
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Industry"
                  name="industry"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.inustry}
                />
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                  placeholder="Project Title"
                  name="project"
                  onChange={projectForm.handleChange}
                  onBlur={projectForm.handleBlur}
                  value={projectForm.values.project}
                />
              </div>
              <div className="flex items-center mt-4">
                <textarea
                  className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded text-sm"
                  placeholder="Project Description"
                  rows="3"
                  name="projectdescription"
                    onChange={projectForm.handleChange}
                    onBlur={projectForm.handleBlur}
                    value={projectForm.values.projectdescription}
                />
              </div>
              <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
                <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
                  <p className="relativeContact ">Submit</p>
                </button>
              </div>
            </form>
          </div>
        </Modal>
        }
      </div>
    </div>
  );
}

export default Subscription;