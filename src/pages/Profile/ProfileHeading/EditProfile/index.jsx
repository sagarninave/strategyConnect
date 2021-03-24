import React, { useState, useEffect, useRef } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import ava from '../../../../assets/img/sai.png';
import Modal from 'react-awesome-modal';
import close from '../../../../assets/img/cancel.svg';
import CustomImageUpload from '../../../auth/components/CustomImageUpload';
import CustomTextInput from '../../../auth/components/CustomTextInput';
import inIcon from '../../../../assets/img/inUser.svg';
import actIcon from '../../../../assets/img/actUser.svg';
import errIcon from '../../../../assets/img/errUser.svg';
// messgae icons
import messActive from '../../../../assets/img/messActive.svg';
import messInActive from '../../../../assets/img/messInActive.svg';
import messError from '../../../../assets/img/messError.svg';
// notes icons
import noteActive from '../../../../assets/img/noteActive.png';
import noteInActive from '../../../../assets/img/noteInactive.svg';
import noteError from '../../../../assets/img/noteError.png';
// whatsapp icons
import whatsActive from '../../../../assets/img/whatsActive.svg';
import whatsInActive from '../../../../assets/img/whatInactive.svg';
import whatsError from '../../../../assets/img/whatsErr.svg';
// linkedIn icons
import linkActive from '../../../../assets/img/linkActive.svg';
import linkInActive from '../../../../assets/img/linkInactive.svg';
import linkError from '../../../../assets/img/linkErr.svg';
import CustomTextArea from '../../../auth/components/CustomTextArea';
import LanguagesComponent from '../../../auth/Freelancer/SignUpStepTwo/LanguagesComponent';

export default function EditProfile(props) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [checked, setChecked] = useState(false);
  const [avater, setAvater] = useState(ava);
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

  const bigHeight = (80 / 100) * dimensions.height;
  const midHeight = (90 / 100) * dimensions.height;
  const smallHeight = dimensions.height;

  const initialValues = {
    fullName: '',
    email: '',
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

  const handleSubmit = (formValues) => {
    //    formValues.joinAs = myJoinAs;
    //    formValues.avater = avater;
    console.log({ formValues });
    props.setVisible(false);
  };

  const IndustryValues = [
    { item: 'Tech', value: 'Tech' },
    { item: 'Hospitality', value: 'Hospitality' },
    { item: 'Medical', value: 'Medical' },
  ];
  const langArrayList = [{ lang: 'Tech', fluency: 'a year' }];

  return (
    <Modal
      visible={props.visible}
      effect="fadeInUp"
      width={
        dimensions.width < 780
          ? '100%'
          : dimensions.width == 1200
          ? '45%'
          : dimensions.width == 1024
          ? '50%'
          : '40%'
      }
      onClickAway={() => props.setVisible(false)}
    >
      <div
        style={{
          height:
            dimensions.width < 780
              ? smallHeight
              : dimensions.width == 1200
              ? midHeight
              : dimensions.width == 1024
              ? midHeight
              : bigHeight,
        }}
        className="rounded-lg bg-white "
      >
        <div
          style={{ borderBottom: '1px solid rgba(56, 54, 154,0.1)' }}
          className="flex items-center justify-between p-8"
        >
          <p className="text-xl uppercase">Personal Information</p>
          <img
            src={close}
            alt=""
            onClick={() => {
              props.setVisible(false);
            }}
            className="cursor-pointer"
          />
        </div>

        {/* main content for editing */}
        <div className="lg:px-24 px-10 my-3  h-4/6 overflow-y-scroll hideScroll">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form id="edit-profile" onSubmit={props.handleSubmit}>
                  <CustomImageUpload
                    marginLess={true}
                    avater={avater}
                    handleClick={handleClick}
                    hiddenFileInput={hiddenFileInput}
                    handleChange={handleChange}
                    checked={checked}
                    setChecked={setChecked}
                  />
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
                  <LanguagesComponent
                    showOneDrop={true}
                    itemOnePlaceholder="Select Industry"
                    // itemTwoPlaceholder="Duration"
                    languagesValues={IndustryValues}
                    // fluencyValues={durationValues}
                    langArrayList={langArrayList}
                    placeholder="Specialised in"
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
        {/* main content for editing */}

        <div
          className="px-10 py-5 flex justify-end"
          style={{ borderTop: '1px solid rgba(56, 54, 154,0.1)' }}
        >
          <button
            onClick={() => {
              props.setVisible(false);
            }}
            style={{ border: '1px solid #38369A', color: '#38369A' }}
            className="text-base rounded px-4 py-2"
          >
            Cancel
          </button>
          <button
            form="edit-profile"
            type="submit"
            className="purple text-white px-4 py-2 ml-4 rounded text-base"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}
