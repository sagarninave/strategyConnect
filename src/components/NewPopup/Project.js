/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";

const axios = require('axios');

export default function Project(props) {
  
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

  const [formFields, setFormFields] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    industry: '',
    project: '',
    projectdescription: ''
  });

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

  const onHandleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Project", formFields)
  }

  const close = () => {
    setFormFields({
      name: '',
      organization: '',
      email: '',
      phone: '',
      industry: '',
      project: '',
      projectdescription: ''
    })
    props.close();
  }
  return (
    <>
      <div className="showInDesktop">
        {
          dimensions > 480 ?
            <Modal
              isOpen={props.open}
              onRequestClose={close}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
                <span className="floatRight">
                  <button onClick={close}>
                    <AiOutlineCloseCircle style={{ fontSize: "1.5rem" }} />
                  </button>
                </span>
                <p className="text-2xl text-center font-semibold"> Project Information </p>
                <p className="text-sm grey-text text-center mt-2"> Lets talk about everything</p>
                <form onSubmit={onSubmit}>
                  <div className="flex items-center mt-14">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={onHandleChange}
                      value={formFields.name}
                    />
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                      placeholder="Organisation Name"
                      id="organization"
                      name="organization"
                      onChange={onHandleChange}
                      value={formFields.organization}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                      placeholder="Email"
                      name="email"
                      onChange={onHandleChange}
                      value={formFields.email}
                    />
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={onHandleChange}
                      value={formFields.phone}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                      placeholder="Industry"
                      name="industry"
                      onChange={onHandleChange}
                      value={formFields.industry}
                    />
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                      placeholder="Project"
                      name="project"
                      onChange={onHandleChange}
                      value={formFields.project}
                    />
                  </div>
                  <textarea
                    className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-4 text-sm"
                    placeholder="Project Description"
                    rows="5"
                    name="projectdescription"
                    onChange={onHandleChange}
                    value={formFields.projectdescription}
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
              isOpen={props.open}
              onRequestClose={close}
              style={customMobileStyles}
              contentLabel="Example Modal"
            >
              <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
                <span className="floatRight">
                  <button onClick={close}>
                    <AiOutlineCloseCircle style={{ fontSize: "1.5rem" }} />
                  </button>
                </span>
                <p className="text-2xl text-center font-semibold"> Project Information </p>
                <p className="text-sm grey-text text-center mt-2">Lets talk about everything</p>
                <form onSubmit={onSubmit} className="w-full">
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={onHandleChange}
                      value={formFields.name}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Organisation Name"
                      id="organization"
                      name="organization"
                      onChange={onHandleChange}
                      value={formFields.organization}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Email"
                      name="email"
                      onChange={onHandleChange}
                      value={formFields.email}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={onHandleChange}
                      value={formFields.phone}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                  <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                      placeholder="Industry"
                      name="industry"
                      onChange={onHandleChange}
                      value={formFields.industry}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                      placeholder="Project"
                      name="project"
                      onChange={onHandleChange}
                      value={formFields.project}
                    />
                  </div>
                  <textarea
                    className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-4 text-sm"
                    placeholder="Project Description"
                    rows="5"
                    name="projectdescription"
                    onChange={onHandleChange}
                    value={formFields.projectdescription}
                  />
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
    </>
  )
}
