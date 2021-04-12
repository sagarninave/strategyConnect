/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from '@material-ui/core/TextField';
import { formApi } from '../../services/constants';

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

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    organization: ''
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
    let data = {
      "name": formFields.name,
      "organisation_name": formFields.organization,
      "email": formFields.email,
      "contact": formFields.phone,
      "message": formFields.message,
      "enquiry_type": props.enquiry_type,
      "industry": props.industry,
      "project": "",
      "project_description": ""
    }

    console.log(data)
    axios({
      method: 'post',
      url: `${formApi}data/generic/save-enquiry/enquiry`,
      data: data,
      headers: {
        'x-fwd-authorization': 'test',
        'Namespace': 'STRATEGY'
      }
    })
      .then(result => {
        if (result.data.meta.ok === 1 && result.data.meta.message === "Success!") {
          setIsSubmitted(true);
          setFormFields({ name: '', email: '', phone: '', message: '', organization: '' })
          console.log("send form response", result.data)
        }
        setTimeout(() => { close() }, 2000);
      });
  }

  const close = () => {
    setIsSubmitted(false);
    setFormFields({
      name: '',
      email: '',
      phone: '',
      message: '',
      organization: ''
    })
    props.close();
  }

  return (
    <>
      <Modal
        isOpen={props.open}
        onRequestClose={close}
        style={dimensions > 480 ? customStyles : customMobileStyles}
        contentLabel="Example Modal"
      >
        <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
          <span className="floatRight">
            <button onClick={close}>
              <AiOutlineCloseCircle style={{ fontSize: "1.5rem" }} />
            </button>
          </span>
          <p className="text-2xl text-center font-semibold"> Kickstart Engagement </p>
          <p className="text-sm grey-text text-center mt-2"> It takes less than a minute</p>
          <form onSubmit={onSubmit}>

            {/* desktop */}
            <div className="showInDesktop">
              <div className="flex items-center mt-4">
                <TextField
                  id="outlined-basic"
                  label="Name *"
                  variant="outlined"
                  placeholder="Name"
                  name="name"
                  onChange={onHandleChange}
                  value={formFields.name}
                  className="left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                />
                <TextField
                  id="outlined-basic"
                  label="Organisation Name"
                  variant="outlined"
                  placeholder="Organisation Name"
                  name="organization"
                  onChange={onHandleChange}
                  value={formFields.organization}
                  className="right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  id="outlined-basic"
                  label="Email *"
                  variant="outlined"
                  placeholder="Email"
                  name="email"
                  onChange={onHandleChange}
                  value={formFields.email}
                  className="left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={onHandleChange}
                  value={formFields.phone}
                  className="right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  id="outlined-static"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  className="mobile-full-text-width border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm"
                  placeholder="Message"
                  name="message"
                  onChange={onHandleChange}
                  value={formFields.message}
                />
              </div>
            </div>

            {/* mobile */}
            <div className="showInMobile">
              <div className="flex items-center mt-4">
                <TextField
                  id="outlined-basic"
                  label="Name *"
                  variant="outlined"
                  placeholder="Name"
                  name="name"
                  onChange={onHandleChange}
                  value={formFields.name}
                  className="mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  id="outlined-basic"
                  label="Organisation Name"
                  variant="outlined"
                  placeholder="Organisation Name"
                  name="organization"
                  onChange={onHandleChange}
                  value={formFields.organization}
                  className="mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  id="outlined-basic"
                  label="Email *"
                  variant="outlined"
                  placeholder="Email"
                  name="email"
                  onChange={onHandleChange}
                  value={formFields.email}
                  className="mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={onHandleChange}
                  value={formFields.phone}
                  className="mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  id="outlined-static"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  className="mobile-full-text-width border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm"
                  placeholder="Message"
                  name="message"
                  onChange={onHandleChange}
                  value={formFields.message}
                />
              </div>
            </div>

            <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
              <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
                <p className="relativeContact ">Submit</p>
              </button>
            </div>
          </form>
          {
            isSubmitted && <p className="mt-4 text-center text-green-900"> Data Saved Successfully </p>
          }
        </div>
      </Modal>
    </>
  )
}
