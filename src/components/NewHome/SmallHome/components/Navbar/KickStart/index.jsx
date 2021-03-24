/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import rocket from '../../../../../../assets/img/rocLaunch.png';
import roundX from '../../../../../../assets/img/roundX.svg';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import lineP from '../../../../../../assets/img/lineP.svg';
import xBlack from '../../../../../../assets/img/xBlack.svg';
import Modal from 'react-awesome-modal';
import { css } from '@emotion/core';
import PacmanLoader from 'react-spinners/PacmanLoader';
import PageTwo from './PageTwo';
import CustomTextInput from '../../../../../../pages/auth/components/CustomTextInput';

const axios = require('axios');

const override = css`
  display: block;
  margin: 5px auto;
  position: relative;
  left: -10px;
  top: -4px;
`;

export default function KickStart(props) {
  const [clickContinue, setContinue] = useState(false);
  const [id, setId] = useState('');
  const [errorData, setErrorData] = useState('');
  const [globError, setGlobeError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const dropList = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'vanilla', label: 'lfkgjm' },
  ];

  const goBack = () => {
    setContinue(false);
  };

  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
  };

  const validationSchema = yup.object().shape({
    fullName: yup.string().required('Full Name is Required'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
  });

  const handleSubmit = (formValues) => {
    setLoading(true);

    const data = {
      name: formValues.fullName,
      mobile: formValues.phoneNumber,
      email: formValues.email,
    };
    axios
      .post(
        'https://testapi.strategyconnect.co/api/data/generic/save/lead_client/',
        data,
        {
          headers: {
            Authorization: 'test',
            'Content-Type': 'application/json',
            namespace: 'WEB',
          },
        }
      )
      .then((res) => {
        const { ok, message } = res.data.meta;
        if (ok === 1) {
          setContinue(true);
          setLoading(false);
          setGlobeError(false);
          setId(res.data.data.id);
        } else {
          setLoading(false);
          setGlobeError(true);
          setErrorData(message);
        }
      })
      .catch((e) => {
        alert(e);
      });
    // console.log({ formValues });
  };

  return (
    <Modal
      visible={props.visible}
      width={`${dimensions.width < 768 ? '100%' : '70%'}`}
      height={`${dimensions.width < 768 ? '100%' : '75%'}`}
      effect="fadeInLeft"
      onClickAway={() => props.setVisible(false)}
    >
      <div className="flex relative -top-8 rounded h-auto bg-white overflow-y-scroll">
        <div className="hidden xl:block" style={{ width: 500 }}>
          <img
            src={rocket}
            loading="lazy"
            alt=""
            className="z-10 relative -left-0.5"
          />
        </div>
        <div className="w-9/12 w-11/12 mx-auto p-4">
          <div className="flex justify-between items-center">
            <div />
            <img
              src={dimensions.width < 640 ? xBlack : roundX}
              alt="roundX"
              loading="lazy"
              className="cursor-pointer"
              onClick={() => {
                props.setVisible(false);
              }}
            />
          </div>
          <p className="font-bold sm:text-3xl text-lg text-center mt-10 font-medium">
            Kickstart Engagement
          </p>

          <p className="text-center mt-4 text-base lg:w-2/5 w-11/12  mx-auto font-thin">
            Please fill the form and get started It takes less than a minute
          </p>

          <div>
            {clickContinue ? (
              <div>
                <div className="flex items-center mx-auto justify-between mt-8  w-32">
                  <p className="threeP text-xs flex items-center justify-center">
                    1
                  </p>
                  <img src={lineP} alt="" className="lineP" />
                  <div>
                    <div className="divOneP">
                      <p className="oneP flex items-center text-xs justify-center">
                        2
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm font-bold text-indigo-700 relative left-12 mt-2">
                  Project Information
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center mx-auto justify-between mt-8 w-32">
                  <div className="divOneP">
                    <p className="oneP flex items-center text-xs justify-center">
                      1
                    </p>
                  </div>
                  <img src={lineP} alt="" className="lineP" />
                  <p className="twoP text-xs flex items-center justify-center">
                    2
                  </p>
                </div>
                <p className="text-center text-sm font-bold text-indigo-700 relative right-12 mt-2">
                  Personal Details
                </p>
              </div>
            )}

            {/* page one */}
            {clickContinue ? null : (
              <div className="w-full flex-col flex items-center">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {(props) => {
                    return (
                      <Form id="step-one">
                        <CustomTextInput
                          name="fullName"
                          id="fullName"
                          type="text"
                          placeholder="Name *"
                        />
                        <CustomTextInput
                          name="email"
                          id="email"
                          type="text"
                          placeholder="Company Email Address"
                        />
                        <CustomTextInput
                          name="phoneNumber"
                          id="phoneNumber"
                          type="text"
                          placeholder="Phone Number *"
                        />

                        <div className="flex items-center  mt-8">
                          <p
                            onClick={() => {
                              props.setVisible(false);
                            }}
                            className="ml-3.5 py-2 px-4 text-center w-28 rounded border border-gray-300 text-gray-400 text-sm cursor-pointer"
                          >
                            Cancel
                          </p>
                          <button
                            onClick={props.handleSubmit}
                            className="ml-3.5 py-2 px-4 w-28 text-center hover:bg-indigo-900 rounded purple text-white text-sm cursor-pointer"
                          >
                            {loading ? (
                              <PacmanLoader
                                color={'#ffffff'}
                                loading={loading}
                                css={override}
                                size={9}
                              />
                            ) : (
                              'Proceed'
                            )}
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>

                {globError ? (
                  <p className="text-red-400 text-base font-bold mt-4 text-center">
                    {errorData}
                  </p>
                ) : null}
              </div>
            )}
            {/* page one */}

            {/* page Two */}
            {clickContinue ? (
              <PageTwo dropList={dropList} id={id} setContinue={goBack} />
            ) : null}
            {/* page Two */}
          </div>
        </div>
      </div>
    </Modal>
  );
}
