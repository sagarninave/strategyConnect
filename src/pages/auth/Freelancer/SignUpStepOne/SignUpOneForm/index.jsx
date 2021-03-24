import React, { useState, useRef } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import ava from '../../../../../assets/img/sai.png';
import logo from '../../../../../assets/img/regLogo.svg';
import inIcon from '../../../../../assets/img/inUser.svg';
import actIcon from '../../../../../assets/img/actUser.svg';
import errIcon from '../../../../../assets/img/errUser.svg';
import ContinueFooter from '../../../components/ContinueFooter';
// messgae icons
import messActive from '../../../../../assets/img/messActive.svg';
import messInActive from '../../../../../assets/img/messInActive.svg';
import messError from '../../../../../assets/img/messError.svg';
// password icons
import passActive from '../../../../../assets/img/passActive.svg';
import passInActive from '../../../../../assets/img/passInActive.svg';
import passError from '../../../../../assets/img/passError.svg';
// whatsapp icons
import whatsActive from '../../../../../assets/img/whatsActive.svg';
import whatsInActive from '../../../../../assets/img/whatInactive.svg';
import whatsError from '../../../../../assets/img/whatsErr.svg';
// linkedIn icons
import linkActive from '../../../../../assets/img/linkActive.svg';
import linkInActive from '../../../../../assets/img/linkInactive.svg';
import linkError from '../../../../../assets/img/linkErr.svg';
// notes icons
import noteActive from '../../../../../assets/img/noteActive.png';
import noteInActive from '../../../../../assets/img/noteInactive.svg';
import noteError from '../../../../../assets/img/noteError.png';
//arrow icons
import downArrow from '../../../../../assets/img/textArrDown.svg';
import upArrow from '../../../../../assets/img/textUpArrow.svg';

import CustomTextInput from '../../../components/CustomTextInput';
import CustomImageUpload from '../../../components/CustomImageUpload';
import CustomDropdown from '../../../components/CustomDropdown';
import CustomTextArea from '../../../components/CustomTextArea';

export default function SignUpOneForm() {
  const [avater, setAvater] = useState(ava);
  const [myJoinAs, setMyJoinAs] = useState('');
  const percentage = 33.3;

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
    fullName: '',
    email: '',
    password: '',
    description: '',
    whatsApp: '',
    linkedIn: '',
  };

  const validationSchema = yup.object().shape({
    fullName: yup.string().required('Full Name is Required'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
    description: yup
      .string()
      .min(4, 'Has to have at least 4 characters')
      .max(120, 'Must be below 120 charcters')
      .required('This is required'),
    whatsApp: yup.string().required('This is required'),
    linkedIn: yup
      .string()
      .url('Must be a valid url')
      .required('This is required'),
  });

  const [checked, setChecked] = useState(false);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = () => {
      // console.log(reader.result);
      setAvater(reader.result);
    };
  };

  const handleSubmit = (formValues) => {
    formValues.joinAs = myJoinAs;
    formValues.avater = avater;
    console.log({ formValues });
    history.push('/freelancer/sign-up/step-two');
  };

  return (
    <div className="h-screen lg:w-2/5 relative w-full overflow-y-scroll hideScroll">
      <div className=" flex flex-col justify-center md:px-16 xl:px-24 px-8 pb-28 lg:pb-32">
        <div className="flex items-center mx-auto mt-12">
          <img src={logo} alt="logo" className="" />
          <p className="text-base ml-2 text-black">StrategyConnect</p>
        </div>

        <h1 className="text-3xl text-center mt-9">Let’s create your profile</h1>
        <p className="grey-text text-center text-base font-light mt-3">
          Help us with the following details
        </p>

        {/* image upload container */}
        <CustomImageUpload
          avater={avater}
          handleClick={handleClick}
          hiddenFileInput={hiddenFileInput}
          handleChange={handleChange}
          checked={checked}
          setChecked={setChecked}
        />
        {/* image upload container */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <Form id="step-one" onSubmit={props.handleSubmit}>
                <CustomTextInput
                  name="fullName"
                  id="fullName"
                  type="text"
                  placeholder="Full Name *"
                  activeIcon={actIcon}
                  inactiveIcon={inIcon}
                  errorIcon={errIcon}
                />
                <CustomTextInput
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email address*"
                  activeIcon={messActive}
                  inactiveIcon={messInActive}
                  errorIcon={messError}
                />
                <CustomTextInput
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password*"
                  activeIcon={passActive}
                  inactiveIcon={passInActive}
                  errorIcon={passError}
                />
                <CustomDropdown
                  items={dropDownItems}
                  placeholder="Join as *"
                  id="joinAs"
                  width="w-full"
                  onValueChange={(val) => {
                    setMyJoinAs(val);
                  }}
                  downArrow={downArrow}
                  upArrow={upArrow}
                />
                <CustomTextArea
                  cols="26"
                  rows="3"
                  name="description"
                  id="description"
                  type="text"
                  placeholder="Short description *"
                  activeIcon={noteActive}
                  inactiveIcon={noteInActive}
                  errorIcon={noteError}
                />
                <CustomTextInput
                  name="whatsApp"
                  id="whatsApp"
                  type="text"
                  placeholder="Whatsapp number*"
                  activeIcon={whatsActive}
                  inactiveIcon={whatsInActive}
                  errorIcon={whatsError}
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
      <ContinueFooter percentage={percentage} id="step-one" />
    </div>
  );
}
