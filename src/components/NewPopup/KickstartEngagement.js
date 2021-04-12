/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { formApi } from '../../services/constants';

const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '98%',
    },
  },
  errorInput: {
    backgroundColor: '#F2DEDE',
    color:'red',
    '& label':{
      color:"red"
    },
    '& .MuiOutlinedInput-root':{
      borderColor:'red'
    }
  },
}));

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

  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [errName, setErrName] = React.useState(null);
  const [errOrganization, setErrOrganization] = React.useState(null);
  const [errEmail, setErrEmail] = React.useState(null);
  const [errPhone, setErrPhone] = React.useState(null);
  const [errMessage, setErrMessage] = React.useState(null);

  const [errMsgName, setErrMsgName] = React.useState(null);
  const [errMsgOrganization, setErrMsgOrganization] = React.useState(null);
  const [errMsgEmail, setErrMsgEmail] = React.useState(null);
  const [errMsgPhone, setErrMsgPhone] = React.useState(null);
  const [errMsgMessage, setErrMsgMessage] = React.useState(null);

  const [values, setValues] = React.useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'organization') {
      setOrganization(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'phone') {
      setPhone(event.target.value);
    } else if (event.target.name === 'message') {
      setMessage(event.target.value);
    }
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrName(false);
    setErrOrganization(false);
    setErrEmail(false);
    setErrPhone(false);
    setErrMessage(false);
  }

  const validateForm = async e => {
    let checkEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    let checkPhone = /^[0-9]+$/
    e.preventDefault()
    if (values.name === '' &&
      values.organization === '' &&
      values.email === '' &&
      values.phone === '' &&
      values.message === '') {
      setErrName(true);
      setErrOrganization(true);
      setErrEmail(true);
      setErrPhone(true);
      setErrMessage(true);
      setErrMsgName('Name Required');
      setErrMsgOrganization('Organization Required');
      setErrMsgEmail('Email Required');
      setErrMsgPhone('Phone Required');
      setErrMsgMessage("Message Required");

    } else if (values.name === '') {
      setErrName(true);
      setErrMsgName('Name Required');
    } else if (values.organization === '') {
      setErrOrganization(true);
      setErrMsgOrganization('Organization Required');
    } else if (values.email === '') {
      setErrEmail(true);
      setErrMsgEmail('Email Required');
    } else if (!checkEmail.test(values.email)) {
      setErrEmail(true);
      setErrMsgEmail('Invalid Email');
    } else if (values.phone === '') {
      setErrPhone(true);
      setErrMsgPhone('Phone Required');
    } else if (!checkPhone.test(values.phone)) {
      setErrPhone(true);
      setErrMsgPhone('Invalid Phone');
    } else if (values.phone.includes(values.name)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Name');
    } else if (values.phone.includes(values.organization)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Organization');
    }    else if (values.phone.includes(values.email)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Email');
    }else if (values.message === '') {
      setErrMessage(true);
      setErrMsgMessage('Message Required');
    } else {
      submitKickstart();
    }
  }

  const submitKickstart = () => {
    let data = {
      "name": values.name,
      "organisation_name": values.organization,
      "email": values.email,
      "contact": values.phone,
      "message": values.message,
      "enquiry_type": props.enquiry_type,
      "industry": "props.industry",
      "project": "",
      "project_description": ""
    }

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
          setName('');
          setOrganization('');
          setEmail('');
          setPhone('');
          setMessage('');
          console.log("send form response", result.data)
        }
        setTimeout(() => { close() }, 2000);
      });
  }

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

  const close = () => {
    setIsSubmitted(false);
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
          <form onSubmit={(e) => validateForm(e)}>
            {/* desktop */}
            <div className="showInDesktop">
              <div className="flex items-center mt-4">
                <TextField
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => handleChange(e)}
                  value={name}
                  id="name"
                  label={errName ? errMsgName : "Name"}
                  variant="outlined"
                  data-testid="name"
                  className={`${errName && classes.errorInput} left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
                <TextField
                  name="organization"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={organization}
                  placeholder="Organisation Name"
                  id="organization"
                  label={errOrganization ? errMsgOrganization : "Organisation Name"}
                  variant="outlined"
                  data-testid="organization"
                  className={`${errOrganization && classes.errorInput} right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  name="email"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={email}
                  placeholder="Email"
                  id="email"
                  label={errEmail ? errMsgEmail : "Email"}
                  variant="outlined"
                  data-testid="email"
                  className={`${errEmail && classes.errorInput} left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
                <TextField
                  name="phone"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={phone}
                  placeholder="Phone Number"
                  name="phone"
                  id="phone"
                  label={errPhone ? errMsgPhone : "Phone Number"}
                  variant="outlined"
                  data-testid="phone"
                  className={`${errPhone && classes.errorInput} right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  name="message"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={message}
                  placeholder="Message"
                  id="message"
                  label={errMessage ? errMsgMessage : "Message"}
                  multiline
                  rows={4}
                  variant="outlined"
                  data-testid="message"
                  className={`${errMessage && classes.errorInput} border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm`}
                />
              </div>
            </div>

            {/* mobile */}
            <div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => handleChange(e)}
                  value={name}
                  id="name"
                  label={errName ? errMsgName : "Name"}
                  variant="outlined"
                  data-testid="name"
                  className={`${errName && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="organization"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={organization}
                  placeholder="Organisation Name"
                  id="organization"
                  label={errOrganization ? errMsgOrganization : "Organisation Name"}
                  variant="outlined"
                  data-testid="organization"
                  className={`${errOrganization && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="email"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={email}
                  placeholder="Email"
                  id="email"
                  label={errEmail ? errMsgEmail : "Email"}
                  variant="outlined"
                  data-testid="email"
                  className={`${errEmail && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="phone"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={phone}
                  placeholder="Phone Number"
                  name="phone"
                  id="phone"
                  label={errPhone ? errMsgPhone : "Phone Number"}
                  variant="outlined"
                  data-testid="phone"
                  className={`${errPhone && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="message"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={message}
                  placeholder="Message"
                  id="message"
                  label={errMessage ? errMsgMessage : "Message"}
                  multiline
                  rows={4}
                  variant="outlined"
                  data-testid="message"
                  className={`${errMessage && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm`}
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
