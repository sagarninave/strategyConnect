/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useFormik , Form, Formik } from 'formik';
import * as Yup from 'yup';
import xBlack from '../../assets/img/xBlack.svg';
import CustomTextInput from '../../pages/auth/components/CustomTextInput';
import roundX from '../../assets/img/roundX.svg';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
const axios = require('axios');

export default function KickstartEngagement(props) {

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

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
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

  return (
    <>
    <Modal
      isOpen={props.visible}
      onAfterOpen={props.afterOpenModal2}
      onRequestClose={props.setVisible}
      style={dimensions > 480 ? customStyles : customMobileStyles}
      contentLabel="Example Modal"
    >
      <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
        <span className="floatRight">
          <button onClick={props.setVisible}>
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
              value={projectForm.values.industry}
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
    </Modal>
  </>
  )
}
