import React, { useState } from 'react';
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
      console.log("VAVVAVVAVA", values)
      alert(JSON.stringify(values, null, 2));
    },
  });


  const formikSecond = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      industry: '',
      projectTitle: '',
      projectDiscription: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        // .max(15, 'Must be 15 characters or less')
        .required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Phone is required'),
      message: Yup.string().required('Message is required'),
      industry: Yup.string().required('Industry is required'),
      projectTitle: Yup.string().required('Project Title Discription is required'),
      projectDiscription: Yup.string().required('Project Discription Discription is required'),
    }),
    onSubmitSecond: values => {
      console.log("VAVVAVVAVA", values)
      alert(JSON.stringify(values, null, 2));
    },
  });

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

      {/* Row 1 */}
      <div className="pt-8 lg:flex lg:mb-0 mb-4 justify-between">
        <div className="flex flex-col mb-8 w:7/12 items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{
                borderBottom: '1px solid #B1B5B9',
                marginBottom: '15px', padding: '9px 0px'
              }}>
              Market <br /> Analysis</p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Assessment of market scenario including
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;customer segmentation, target customer
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;personas, and market size estimation.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Identifying unique value proposition and
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;market positioning.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Identifying competitor segmentation by
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product offering, price, customer focus,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;geography and traction.
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

        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{ borderBottom: '1px solid #B1B5B9', marginBottom: '15px', padding: '9px 0px' }}>
              Business <br /> Traction Analysis
              </p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Identifying key levers of success and
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;market traction such as ARR, MRR and
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;projected growth trends.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Highlighting key customer(s) acquired.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Underlining revenue and customer
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;growth trends.
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
      {/* Row 1 */}
      {/* Row 2 */}
      <div className="pt-8 lg:flex lg:mb-0 mb-4 justify-between">
        <div className="flex flex-col mb-8 items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{ borderBottom: '1px solid #B1B5B9', marginBottom: '15px', padding: '9px 0px' }}>
              Operational <br />  Viability</p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Evaluating sales channels and <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;marketing strategy.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Assessing organization growth.
                  </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Assessing technology readiness.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                    Addressing cost optimization through
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outsourcing and creative procurement
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;strategies.
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

        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics">
            <p className="text-xl lg:text-lg cardHeading md:text-2xl font-bold leading-8"
              style={{ borderBottom: '1px solid #B1B5B9', marginBottom: '15px', padding: '9px 0px' }}>
              Financial Viability <br />  & Planning
            </p>
            <ul>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Evaluating key financial ratios.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Evaluating unit economics.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Assessing the cost of customer acquisition.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Creating cash flow growth scenarios.
                </p>
              </li>
              <li className="font14 mb-4">
                <p className="leading-6" style={{ color: "#5C5B5B" }}>
                  <span className="tick"></span>
                  Developing comprehensive 3 to 5-year
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;growth roadmap with clearly defined
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;milestones.
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
      {/* Row 2 */}

      <div className="px-auto pt-0">
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

      <div>

        {/* Modal first */}

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          preventScroll={false}
        >
          <div>
            <h4 className="text-lg cardHeading md:text-2xl font-bold leading-10 text-center">
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
          <form class="formInline" onSubmit={formik.handleSubmit}>
            <input type="text" id="namee"
              placeholder="Name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {/* {formik.touched.name && formik.errors.name ? (
      <div>{formik.errors.name}</div>
    ) : null} */}
            <input type="text"
              placeholder="Organisation Name"
              id="Organisation"
              name="organization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.organization}

            />
            <input type="text"
              id="Email"
              name="email"
              placeholder="Email ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <input type="text" id="Phone" placeholder="Phone Number"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            <textarea placeholder="Message" rows="4"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
              <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative" style={{ margin: 'auto' }}>Submit</p>
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
            <h4 className="text-lg cardHeading md:text-2xl font-bold leading-10 text-center">
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
          <form class="formInline" onSubmit={formikSecond.handleSubmit}>
            <input type="text" id="name" placeholder="Name"
              name="name"
              onChange={formikSecond.handleChange}
              onBlur={formikSecond.handleBlur}
              value={formikSecond.values.name}
            />
            <input type="text" id="Organisation Name"
              placeholder="Organisation Name"
              name="organization"
              onChange={formikSecond.handleChange}
              onBlur={formikSecond.handleBlur}
              value={formikSecond.values.organization} />
            <input type="text" id="Email ID" placeholder="Email ID"
              name="email"
              onChange={formikSecond.handleChange}
              onBlur={formikSecond.handleBlur}
              value={formikSecond.values.email} />
            <input type="text" id="Phone Number" placeholder="Phone Number"
              name="phone"
              onChange={formikSecond.handleChange}
              onBlur={formikSecond.handleBlur}
              value={formikSecond.values.phone} />
            <input type="text" id="Industry" placeholder="Industry"
              name="industry"
              onChange={formikSecond.handleChange}
              onBlur={formikSecond.handleBlur}
              value={formikSecond.values.industry} />
            <input type="text" id="Project Title" placeholder="Project Title"
              name="projectTitle"
              onChange={formikSecond.handleChange}
              onBlur={formikSecond.handleBlur}
              value={formikSecond.values.projectTitle} />
            <textarea placeholder="Project Description" rows="4"
              name="projectDiscrioption"
              onChange={formikSecond.handleChange}
              onBlur={formikSecond.handleBlur}
              value={formikSecond.values.projectDiscrioption}></textarea>
            <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
              <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                <p className="relative" style={{ margin: 'auto' }}>Submit</p>
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Subscription;