import React, { useState } from 'react';
import phone from '../../../assets/img/phone-white.svg';
import chat from '../../../assets/img/chat-white.svg';
import whats from '../../../assets/img/whatsWhite.svg';

import TextField from '@material-ui/core/TextField';
const axios = require('axios');

// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers';
// import * as Yup from 'yup';

function Engagement() {

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .required('Name is required'),
  //   organization: Yup.string()
  //     .required('Organization name is required'),
  //   email: Yup.string()
  //     .required('Email is required')
  //     .email('Email is invalid'),
  //   phone: Yup.string()
  //     .required('Phone is required'),
  //   message: Yup.string()
  //     .required('Message is required'),
  // });

  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(validationSchema)
  // });

  // function onSubmit(data) {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
  // }

  // const [name, setName] = useState('');
  // const [organization, setOrganization] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [message, setMessage] = useState('');

  // const [errName, setErrName] = React.useState(null);
  // const [errOrganization, setErrOrganization] = React.useState(null);
  // const [errEmail, setErrEmail] = React.useState(null);
  // const [errPhone, setErrPhone] = React.useState(null);
  // const [errMessage, setErrMessage] = React.useState(null);

  // const [values, setValues] = React.useState({
  //   name: "",
  //   organization: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleChange = name => event => {
  //   if (name == 'name') {
  //     setName(event.target.value);
  //   } else if (name == 'organization') {
  //     setOrganization(event.target.value);
  //   } else if (name == 'email') {
  //     setEmail(event.target.value);
  //   } else if (name == 'phone') {
  //     setPhone(event.target.value);
  //   } else if (name == 'message') {
  //     setMessage(event.target.value);
  //   }
  //   setErrName(false);
  //   setErrOrganization(false);
  //   setErrEmail(false);
  //   setErrPhone(false);
  //   setErrMessage(false);
  //   setValues({ ...values, [name]: event.target.value });
  // }

  // const validateForm = async e => {
  //   setErrMsg(null)
  //   let checkEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
  //   let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$.!%*?&]{8,}$/
  //   e.preventDefault()
  //   if (values.first_name == '') {
  //     setErrFirstName(true);
  //     setErrMsg('First Name Required');
  //   } else if (values.last_name == '') {
  //     setErrLastName(true);
  //     setErrMsg('Last Name Required');
  //   } else if (values.email == '') {
  //     setErrEmail(true);
  //     setErrMsg('E-mail Required');
  //   } else if (!checkEmail.test(values.email)) {
  //     setErrEmail(true);
  //     setErrMsg('Email format must be like yourname@example.com');
  //   } else if (values.pwd == '') {
  //     setErrPassword(true);
  //     setErrMsg('Password Required');
  //   } else if (!passwordCheck.test(values.pwd)) {
  //     setErrPassword(true);
  //     setErrMsg('Password does not meet the criterion.');
  //   } else if (values.pwd.includes(values.email)) {
  //     setErrPassword(true);
  //     setErrMsg('Password must not contain your email.');
  //   } 
  // }

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    organization: ''
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
      "enquiry_type": "Contact Us",
      "industry": "",
      "project": "",
      "project_description": ""
    }

    console.log(data)
    axios({
      method: 'post',
      url: `http://localhost:3003/api/data/generic/save-enquiry/enquiry`,
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
        setTimeout(() => { setIsSubmitted(false) }, 2000);
      });
  }

  return (
    <div className="flex lg:flex-row flex-col lg:my-20 my-10 justify-between  xl:px-28">
      {/* desktop send messsage */}
      <div className=" mx-auto flex flex-col lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
        <p className="text-2xl text-center font-semibold">Send Us a Message</p>
        <p className="text-sm grey-text text-center mt-2">
          A member of our team will get back to you shortly.
        </p>
        <form onSubmit={onSubmit}>

          {/* Deskttop */}
          <div className="showInDesktop">

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
          </div>


          {/* mobile */}
          <div>
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
          </div>
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
              <img src={phone} loading="lazy" alt="phone-white" className="contactBtn" />
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
