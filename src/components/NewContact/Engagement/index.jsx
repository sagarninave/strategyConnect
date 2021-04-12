import React, { useState } from 'react';
import phoneCall from '../../../assets/img/phone-white.svg';
import chat from '../../../assets/img/chat-white.svg';
import whats from '../../../assets/img/whatsWhite.svg';
import TextField from '@material-ui/core/TextField';
const axios = require('axios');

function Engagement() {

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
    if (event.target.name == 'name') {
      setName(event.target.value);
    } else if (event.target.name == 'organization') {
      setOrganization(event.target.value);
    } else if (event.target.name == 'email') {
      setEmail(event.target.value);
    } else if (event.target.name == 'phone') {
      setPhone(event.target.value);
    } else if (event.target.name == 'message') {
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
    e.preventDefault()
    if (values.name == '' &&
      values.organization == '' &&
      values.email == '' &&
      values.phone == '' &&
      values.message == '') {
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

    } else if (values.name == '') {
      setErrName(true);
      setErrMsgName('Name Required');
    } else if (values.organization == '') {
      setErrOrganization(true);
      setErrMsgOrganization('Organization Required');
    } else if (values.email == '') {
      setErrEmail(true);
      setErrMsgEmail('Email Required');
    } else if (!checkEmail.test(values.email)) {
      setErrEmail(true);
      setErrMsgEmail('Invalid Email');
    } else if (values.phone == '') {
      setErrPhone(true);
      setErrMsgPhone('Phone Required');
    } else if (values.phone.includes(values.name)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Name');
    } else if (values.phone.includes(values.organization)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Oranization');
    }    else if (values.phone.includes(values.email)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Email');
    }else if (values.message == '') {
      setErrMessage(true);
      setErrMsgMessage('Message Required');
    } else {
      signUpUser();
    }
  }

  const signUpUser = () => {
    let data = {
      "name": values.name,
      "organisation_name": values.organization,
      "email": values.email,
      "contact": values.phone,
      "message": values.message,
      "enquiry_type": "Contact Us",
      "industry": "",
      "project": "",
      "project_description": ""
    }
    console.log("data : ", data);
    // axios({
    //   method: 'post',
    //   url: `http://localhost:3003/api/data/generic/save-enquiry/enquiry`,
    //   data: data,
    //   headers: {
    //     'x-fwd-authorization': 'test',
    //     'Namespace': 'STRATEGY'
    //   }
    // })
    //   .then(result => {
    //     if (result.data.meta.ok === 1 && result.data.meta.message === "Success!") {
    //       setIsSubmitted(true);
    //       setName('');
    //       setOrganization('');
    //       setEmail('');
    //       setPhone('');
    //       setMessage('');
    //       console.log("send form response", result.data)
    //     }
    //     setTimeout(() => { setIsSubmitted(false) }, 2000);
    //   });
  }


  const [isSubmitted, setIsSubmitted] = useState(false)
  // const [formFields, setFormFields] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  //   organization: ''
  // });

  // const onHandleChange = (e) => {
  //   setFormFields({ ...formFields, [e.target.name]: e.target.value })
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   let data = {
  //     "name": formFields.name,
  //     "organisation_name": formFields.organization,
  //     "email": formFields.email,
  //     "contact": formFields.phone,
  //     "message": formFields.message,
  //     "enquiry_type": "Contact Us",
  //     "industry": "",
  //     "project": "",
  //     "project_description": ""
  //   }

  //   axios({
  //     method: 'post',
  //     url: `http://localhost:3003/api/data/generic/save-enquiry/enquiry`,
  //     data: data,
  //     headers: {
  //       'x-fwd-authorization': 'test',
  //       'Namespace': 'STRATEGY'
  //     }
  //   })
  //     .then(result => {
  //       if (result.data.meta.ok === 1 && result.data.meta.message === "Success!") {
  //         setIsSubmitted(true);
  //         setFormFields({ name: '', email: '', phone: '', message: '', organization: '' })
  //         console.log("send form response", result.data)
  //       }
  //       setTimeout(() => { setIsSubmitted(false) }, 2000);
  //     });
  // }
  
  return (
    <div className="flex lg:flex-row flex-col lg:my-20 my-10 justify-between  xl:px-28">
      {/* desktop send messsage */}
      <div className=" mx-auto flex flex-col lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
        <p className="text-2xl text-center font-semibold">Send Us a Message</p>
        <p className="text-sm grey-text text-center mt-2">
          A member of our team will get back to you shortly.
        </p>
        {/* <form onSubmit={onSubmit}> */}
        <form onSubmit={(e) => validateForm(e)}>

          {/* Deskttop */}

          <div className="showInDesktop">
            <div className="flex items-center mt-4">
              <TextField
                name="name"
                type="text"
                placeholder={errName ? errMsgName : "Name"}
                onChange={(e) => handleChange(e)}
                value={name}
                id="name"
                label={errName ? errMsgName : "Name"}
                variant="outlined"
                className="left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
              <TextField
                name="organization"
                type="text"
                onChange={(e) => handleChange(e)}
                value={organization}
                placeholder={errOrganization ? errMsgOrganization : "Organisation Name"}
                id="organization"
                label={errOrganization ? errMsgOrganization : "Organisation Name"}
                variant="outlined"
                className="right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
            </div>
            <div className="flex items-center mt-4">
              <TextField
                name="email"
                type="text"
                onChange={(e) => handleChange(e)}
                value={email}
                placeholder= {errEmail ? errMsgEmail : "Email"}
                id="email"
                label={errEmail ? errMsgEmail : "Email"}
                variant="outlined"
                className="left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
              <TextField
                name="phone"
                type="text"
                onChange={(e) => handleChange(e)}
                value={phone}
                placeholder= {errPhone ? errMsgPhone : "Phone Number"}
                name="phone"
                id="phone"
                label={errPhone ? errMsgPhone : "Phone Number"}
                variant="outlined"
                className="right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
            </div>
            <div className="flex items-center mt-4">
              <TextField
                name="message"
                type="text"
                onChange={(e) => handleChange(e)}
                value={message}
                placeholder={errMessage ? errMsgMessage : "Message"}
                id="message"
                label={errMessage ? errMsgMessage : "Message"}
                multiline
                rows={4}
                variant="outlined"
                className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm"
              />
            </div>
          </div>
  

          {/* <div className="showInDesktop">
            <div className="flex items-center mt-4">
              <TextField
                name="name"
                type="text"
                placeholder="Name"
                onChange={onHandleChange}
                value={formFields.name}
                id="name"
                label="Name"
                variant="outlined"
                className="left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
              <TextField
                name="organization"
                type="text"
                onChange={onHandleChange}
                value={formFields.organization}
                placeholder="Organisation Name"
                id="organization"
                label="Organisation Name"
                variant="outlined"
                className="right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
            </div>
            <div className="flex items-center mt-4">
              <TextField
                name="email"
                type="text"
                onChange={onHandleChange}
                value={formFields.email}
                placeholder="Email"
                id="email"
                label="Email *"
                variant="outlined"
                className="left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
              <TextField
                name="phone"
                type="text"
                onChange={onHandleChange}
                value={formFields.phone}
                placeholder="Phone Number"
                name="phone"
                id="phone"
                label="Phone Number"
                variant="outlined"
                className="right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
            </div>
            <div className="flex items-center mt-4">
              <TextField
                name="message"
                type="text"
                onChange={onHandleChange}
                value={formFields.message}
                placeholder="Message"
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm"
              />
            </div>
          </div> */}

          {/* mobile */}
          {/* <div>
            <div className="showInMobile flex items-center mt-4">
              <TextField
                name="name"
                type="text"
                placeholder="Name"
                onChange={onHandleChange}
                value={formFields.name}
                id="name"
                label="Name"
                variant="outlined"
                className="mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
            </div>
            <div className="showInMobile flex items-center mt-4">
              <TextField
                name="organization"
                type="text"
                onChange={onHandleChange}
                value={formFields.organization}
                placeholder="Organisation Name"
                id="organization"
                label="Organisation Name"
                variant="outlined"
                className="mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
            </div>
            <div className="showInMobile flex items-center mt-4">
              <TextField
                name="email"
                type="text"
                onChange={onHandleChange}
                value={formFields.email}
                placeholder="Email"
                id="email"
                label="Email *"
                variant="outlined"
                className="mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
            </div>
            <div className="showInMobile flex items-center mt-4">
              <TextField
                name="phone"
                type="text"
                onChange={onHandleChange}
                value={formFields.phone}
                placeholder="Phone Number"
                name="phone"
                id="phone"
                label="Phone Number"
                variant="outlined"
                className="mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              />
            </div>
            <div className="showInMobile flex items-center mt-4">
              <TextField
                name="message"
                type="text"
                onChange={onHandleChange}
                value={formFields.message}
                placeholder="Message"
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                className="mobile-full-text-width border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm"
              />
            </div>
          </div> */}
          {
            isSubmitted && <p className="mt-4 text-center text-green-900"> Data Saved Successfully </p>
          }
          <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
              <p className="relativeContact ">Let’s Connect</p>
            </button>
          </div>
        </form>
      </div>

      {/* mobile kickstart */}
      <div className="flex showInMobile mt-10 mx-auto lg:w-96">
        <p className="lg:text-2xl text-xl text-center font-semibold">Kickstart M Engagement</p>
        <p className="text-sm grey-text mt-2 text-center">
          It takes less than a minute
        </p>
        <div className="flex w-full m-0">
          <div className="flex-1 p-1 pl-1 pt-0 mr-2 rounded-md border-2"
            style={{ width: "8rem", margin: 'auto', marginRight: "0.5rem", marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-1 mr-2 border-none focus:outline-none py-2 rounded">
              <img src={phoneCall} loading="lazy" alt="phone-white" className="contactBtn" />
              <p style={{ marginLeft: "-5px" }} className="relativeContact">
                <a href="tel:+919990603640" > Phone Call </a>
              </p>
            </button>
          </div>
          <div className="flex-1 p-1 pl-1 pt-0 mx-2 rounded-md border-2"
            style={{ width: "3rem", margin: 'auto', marginleft: "0.5rem", marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-1 border-none focus:outline-none py-2 rounded">
              <img src={chat} loading="lazy" alt="phone-white" className="contactBtn" />
              <p style={{ marginLeft: "-1px" }} className="relativeContact">
                <a href="sms:+919990603640" > Chat </a>
              </p>
            </button>
          </div>
          <div className="flex-1 p-1 pl-1 pt-0 ml-2 rounded-md border-2"
            style={{ width: "8rem", margin: 'auto', marginLeft: "0.5rem", marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-1 mr-2 border-none focus:outline-none py-2 rounded">
              <img src={whats} loading="lazy" alt="phone-white" className="contactBtn" />
              <p style={{ marginLeft: "-5px" }} className="relativeContact ">
                <a href="https://api.whatsapp.com/send?phone=+919990603640" target="_blank">
                  Whatsapp
              </a>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engagement;
