import React, { useState, useRef } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import logo from '../../../../../assets/img/regLogo.svg';
import clipActive from '../../../../../assets/img/clip-active.svg';
import clipInactive from '../../../../../assets/img/clip-Inactive.svg';
import clipError from '../../../../../assets/img/clip-error.svg';
import briefActive from '../../../../../assets/img/brief-active.svg';
import briefInactive from '../../../../../assets/img/brief-inactive.svg';
import briefError from '../../../../../assets/img/brief-error.svg';
import houseActive from '../../../../../assets/img/house-active.svg';
import houseInactive from '../../../../../assets/img/house-inactive.svg';
import houseError from '../../../../../assets/img/house-error.svg';
import pinActive from '../../../../../assets/img/pin-active.svg';
import pinInactive from '../../../../../assets/img/pin-inactive.svg';
import pinError from '../../../../../assets/img/pin-error.svg';

import path from '../../../../../assets/img/path.svg';

import CustomFileUpload from '../../../components/CustomFIleUpload';
import CustomRadioButton from '../../../components/CustomRadioButton';
import CustomTextInput from '../../../components/CustomTextInput';
import LanguagesComponent from '../LanguagesComponent';
import ContinueFooter from '../../../components/ContinueFooter';

export default function SignUpTwoForm() {
  const [file, setFile] = useState('Upload your Resume *');
  const [consultant, setConsultant] = useState(false);
  const hiddenFileInput = useRef(null);
  const percentage = 66.6;

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  let history = useHistory();

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0].name;
    //   let reader = new FileReader();
    //   reader.readAsDataURL(fileUploaded);
    //   reader.onload = () => {
    //     // console.log(reader.result);
    //     setAvater(reader.result);
    //   };
    setFile(fileUploaded);
  };

  const languagesValues = [
    { item: 'Java', value: 'Jave' },
    { item: 'C++', value: 'C++' },
    { item: 'Python', value: 'Python' },
    { item: 'Go lang', value: 'Go lang' },
    { item: 'JavaScript', value: 'JavaScript' },
    { item: 'Rust', value: 'Rust' },
  ];

  const fluencyValues = [
    { item: 'Native', value: 'Native' },
    { item: 'Average', value: 'Average' },
    { item: 'Novice', value: 'Novice' },
  ];

  const langArrayList = [
    { lang: 'C++', fluency: 'Average' },
    { lang: 'C++', fluency: 'Average' },
  ];

  const initialValues = {
    company: '',
    location: '',
  };

  const validationSchema = yup.object().shape({
    company: yup.string(),
    location: yup.string().required('Location is required'),
  });

  const handleSubmit = (formValues) => {
    // formValues.joinAs = myJoinAs;
    // formValues.avater = avater;
    console.log({ formValues });
    history.push('/freelancer/sign-up/step-three');
  };

  return (
    <div className="h-screen lg:w-2/5  relative w-full overflow-y-scroll hideScroll">
      <div className=" flex flex-col justify-center lg:px-16 px-8 pb-28 lg:pb-40">
        <div className="flex items-center mx-auto mt-12">
          <img src={logo} alt="logo" className="" />
          <p className="text-base ml-2 text-black">StrategyConnect</p>
        </div>

        <h1 className="text-3xl text-center mt-9">General Information</h1>
        <p className="grey-text text-center text-base font-light mt-3">
          Help us with the following details
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <Form id="step-two" onSubmit={props.handleSubmit}>
                <CustomFileUpload
                  placeholder="Upload your Resume *"
                  name="resumeUpload"
                  handleClick={handleClick}
                  hiddenFileInput={hiddenFileInput}
                  handleChange={handleChange}
                  activeIcon={clipActive}
                  fileName={file}
                  inactiveIcon={clipInactive}
                  errorIcon={clipError}
                />
                <CustomRadioButton
                  active={consultant}
                  setActive={setConsultant}
                  activeIcon={briefActive}
                  inactiveIcon={briefInactive}
                  errorIcon={briefError}
                />
                {!consultant ? (
                  <div className="flex justify-end items-center">
                    <img src={path} alt="" className="mr-4" />
                    <CustomTextInput
                      name="company"
                      id="company"
                      type="text"
                      placeholder="Company"
                      activeIcon={houseActive}
                      inactiveIcon={houseInactive}
                      errorIcon={houseError}
                    />
                  </div>
                ) : null}

                <CustomTextInput
                  name="location"
                  id="location"
                  type="text"
                  placeholder="Location *"
                  activeIcon={pinActive}
                  inactiveIcon={pinInactive}
                  errorIcon={pinError}
                />

                <LanguagesComponent
                  itemOnePlaceholder="Select language"
                  itemTwoPlaceholder="Fluency"
                  languagesValues={languagesValues}
                  fluencyValues={fluencyValues}
                  langArrayList={langArrayList}
                  placeholder="Languages *"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
      <ContinueFooter percentage={percentage} id="step-two" />
    </div>
  );
}
