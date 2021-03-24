import React, { useState, useRef, useEffect } from 'react';
import { Form, Formik } from 'formik';
import close from '../../../../assets/img/cancel.svg';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
// import ava from '../../../../assets/img/sai.png';
import logo from '../../../../assets/img/regLogo.svg';

// twitter icons
import twitActive from '../../../../assets/img/twitActive.svg';
import twitInActive from '../../../../assets/img/twitInactive.svg';
import twitError from '../../../../assets/img/twitError.svg';

// linkedIn icons
import linkActive from '../../../../assets/img/linkActive.svg';
import linkInActive from '../../../../assets/img/linkInactive.svg';
import linkError from '../../../../assets/img/linkErr.svg';
// notes icons

import zazzy from '../../../../assets/img/zazzy.svg';
//arrow icons
import downArrow from '../../../../assets/img/textArrDown.svg';
import upArrow from '../../../../assets/img/textUpArrow.svg';

import CustomTextInput from '../../components/CustomTextInput';
import CustomDropdown from '../../components/CustomDropdown';
import CustomTextArea from '../../components/CustomTextArea';
import LogoUpload from '../../Freelancer/SignUpStepThree/SignUpThreeForm/LogoUpload';

export default function CompanyFormOne(props) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [myLogo, setMyLogo] = useState(zazzy);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const [myJoinAs, setMyJoinAs] = useState('');

  let history = useHistory();

  const dropDownItems = [
    { item: 'Web Developer', value: 'web Developer' },
    { item: 'UI/UX desinger', value: 'UI/UX desinger' },
    { item: 'Mobile Developer', value: 'Mobile Developer' },
    { item: 'Content Writer', value: 'Content Writer' },
    { item: 'Graphics Designer', value: 'Graphics Designer' },
    { item: 'Game Developer', value: 'Game Developer' },
  ];

  const initialValues = {
    company: '',
    about: '',
    website: '',
    location: '',
    twitter: '',
    linkedIn: '',
  };

  const validationSchema = yup.object().shape({
    company: yup.string().required('Company Name is Required'),
    location: yup.string().required('Location is Required'),
    about: yup
      .string()
      .min(4, 'Has to have at least 4 characters')
      .max(120, 'Must be below 120 charcters')
      .required('about is required'),
    website: yup
      .string()
      .url('Must be a valid url')
      .required('website is required'),
    twitter: yup
      .string()
      .url('Must be a valid url')
      .required('This is required'),
    linkedIn: yup
      .string()
      .url('Must be a valid url')
      .required('This is required'),
  });

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = () => {
      // console.log(reader.result);
      setMyLogo(reader.result);
    };
  };

  const hiddenFileInput = useRef(null);

  const handleSubmit = (formValues) => {
    formValues.joinAs = myJoinAs;

    console.log({ formValues });
    history.push('/company/profile');
  };

  return (
    <div
      style={{
        height:
          dimensions.width < 780 ? 680 : dimensions.width < 1300 ? 590 : 680,
      }}
      className=" relative lg:w-3/6 w-full overflow-y-scroll hideScroll"
    >
      <img
        src={close}
        alt=""
        loading="lazy"
        className="absolute top-0 right-0 pr-8 cursor-pointer pt-8"
        onClick={() => {
          props.setVisible(false);
        }}
      />
      <div className=" flex flex-col justify-center lg:px-12 px-8 pb-28 lg:pb-32">
        <div className="flex items-center mx-auto mt-12">
          <img src={logo} alt="logo" className="" />
          <p className="text-base ml-2 text-black">StrategyConnect</p>
        </div>

        <h1 className="text-3xl text-center mt-9">Company On-boarding</h1>
        <p className="grey-text text-center text-base font-light mt-3">
          Please fill the form and get started
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <Form id="company-sign" onSubmit={props.handleSubmit}>
                <LogoUpload
                  handleClick={handleClick}
                  hiddenFileInput={hiddenFileInput}
                  handleChange={handleChange}
                  logo={myLogo}
                />
                <CustomTextInput
                  name="company"
                  id="company"
                  type="text"
                  placeholder="Company Name *"
                />
                <CustomDropdown
                  items={dropDownItems}
                  placeholder="Industries *"
                  id="joinAs"
                  width="w-full"
                  onValueChange={(val) => {
                    setMyJoinAs(val);
                  }}
                  downArrow={downArrow}
                  upArrow={upArrow}
                />
                <CustomTextInput
                  name="location"
                  id="location"
                  type="text"
                  placeholder="location *"
                />
                <CustomTextInput
                  name="website"
                  id="website"
                  type="text"
                  placeholder="Company Website link *"
                />

                <CustomTextArea
                  cols="26"
                  rows="3"
                  name="about"
                  id="about"
                  type="text"
                  placeholder="About *"
                />
                <CustomTextInput
                  name="twitter"
                  id="twitter"
                  type="text"
                  placeholder="Twitter profile URL"
                  activeIcon={twitActive}
                  inactiveIcon={twitInActive}
                  errorIcon={twitError}
                />
                <CustomTextInput
                  name="linkedIn"
                  id="linkedIn"
                  type="text"
                  placeholder="Linkedin profile link *"
                  activeIcon={linkActive}
                  inactiveIcon={linkInActive}
                  errorIcon={linkError}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="fixed bg-white w-full lg:w-3/6 footerBorder bottom-0 lg:py-5 py-3.5 px-5 lg:px-10 flex items-center justify-between">
        {/* <div
          style={{ height: 83, width: `${percentage}%` }}
          className="absolute greenFooterBorder left-0"
        /> */}
        <p className="text-base"></p>
        <button
          type="submit"
          form="company-sign"
          className="p-2 rounded purple_re text-white text-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
