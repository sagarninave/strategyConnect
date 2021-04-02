import React from 'react';
import phone from '../../../assets/img/phone-white.svg';
import chat from '../../../assets/img/chat-white.svg';
import whats from '../../../assets/img/whatsWhite.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Engagement() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      organization: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        // .max(15, 'Must be 15 characters or less')
        .required('Name is required'),
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
  return (
    <div className="flex lg:flex-row flex-col lg:my-20 my-10 justify-between  xl:px-28">
      <div className="showInDesktop mx-auto lg:w-96">
        <p className="lg:text-2xl text-xl text-center font-semibold">Kickstart Engagement</p>
        <p className="text-sm grey-text mt-2 text-center">
          It takes less than a minute
        </p>
        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
            <img src={phone} loading="lazy" alt="phone-white" className="contactBtn" />
            <p className="relativeContact ">Phone Call</p>
          </button>
        </div>
        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
            <img src={chat} loading="lazy" alt="phone-white" className="contactBtn" />
            <p className="relativeContact ">Chat</p>
          </button>
        </div>

        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
            <img src={whats} loading="lazy" alt="phone-white" className="contactBtn" />
            <p className="relativeContact ">Whatsapp</p>
          </button>
        </div>
      </div>
      <div className="h-96 w-0.5 hidden lg:block bg-gray-100" />
      <div className="showInDesktop mx-auto flex flex-col lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
        <p className="text-2xl text-center font-semibold">Send Us a Message</p>
        <p className="text-sm grey-text text-center mt-2">
          A member of our team will get back to you shortly.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex items-center mt-14">
            <input
              type="text"
              className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              placeholder="Name *"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {/* {formik.touched.name && formik.errors.name ? (
              <label>{formik.errors.name}</label>
            ) : null} */}
            <input
              type="text"
              className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
              placeholder="Organisation Name *"
              id="organization"
              name="organization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.organization}
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="text"
              className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
              placeholder="Email *"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <input
              type="text"
              className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
              placeholder="Phone Number *"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>

          <textarea
            className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-4 text-sm"
            placeholder="Message *"
            rows="5"
            name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
          />
          <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
              <p className="relativeContact ">Let’s Connect</p>
            </button>
          </div>
        </form>
      </div>


      {/* mobile message */}

      <div className="showInMobile mx-auto flex flex-col lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
        <p className="text-2xl text-center font-semibold">Send Us a Message</p>
        <p className="text-sm grey-text text-center mt-2">
          A member of our team will get back to you shortly.
        </p>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
              placeholder="Name *"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
              placeholder="Organisation Name *"
              id="organization"
              name="organization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.organization}
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
              placeholder="Email *"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
              placeholder="Phone Number *"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
          <div className="flex items-center mt-4">
            <textarea
              className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded text-sm"
              placeholder="Message *"
              rows="5"
              name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
            />
          </div>
          <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
              <p className="relativeContact ">Let’s Connect</p>
            </button>
          </div>
        </form>
        <hr className="bottom_border"/>
      </div>


      {/* mobile kickstart */}

      <div className="flex showInMobile mt-10 mx-auto lg:w-96">
        <p className="lg:text-2xl text-xl text-center font-semibold">Kickstart M Engagement</p>
        <p className="text-sm grey-text mt-2 text-center">
          It takes less than a minute
        </p>
        <div className="flex w-full m-0"> 
          <div className="flex-1 p-1 pl-1 pt-0 mr-2 rounded-md border-2" 
              style={{ width: "8rem", margin: 'auto', marginRight:"0.5rem", marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-1 mr-2 justify-between border-none focus:outline-none py-2 rounded">
              <img src={phone} loading="lazy" alt="phone-white" className="contactBtn" />
              <p className="relativeContact ">Phone Call</p>
            </button>
          </div>
          <div className="flex-1 p-1 pl-1 pt-0 mx-2 rounded-md border-2" 
              style={{ width: "3rem", margin: 'auto', marginleft:"0.5rem", marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-1 justify-between border-none focus:outline-none py-2 rounded">
              <img src={chat} loading="lazy" alt="phone-white" className="contactBtn" />
              <p style={{marginLeft:0}} className="relativeContact" >Chat</p>
            </button>
          </div>
          <div className="flex-1 p-1 pl-1 pt-0 ml-2 rounded-md border-2" 
              style={{ width: "8rem", margin: 'auto', marginLeft:"0.5rem", marginTop: ' 25px' }}>
            <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-1 mr-2 justify-between border-none focus:outline-none py-2 rounded">
              <img src={whats} loading="lazy" alt="phone-white" className="contactBtn" />
              <p className="relativeContact ">Whatsapp</p>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Engagement;
