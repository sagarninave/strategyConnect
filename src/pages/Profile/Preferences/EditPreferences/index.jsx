import React, { useState, useEffect } from 'react';
import close from '../../../../assets/img/cancel.svg';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import checked from '../../../../assets/img/checkB.svg';
import unchecked from '../../../../assets/img/unCheck.svg';
import Modal from 'react-awesome-modal';
import CustomTextInput from '../../../auth/components/CustomTextInput';

export default function EditPreferences(props) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [engagement, setEngagement] = useState(true);
  const [location, setLocation] = useState(true);

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
  const smallHeight = dimensions.height;

  const initialValues = {
    remoteAmount: '',
    onSiteAmount: '',
  };

  const validationSchema = yup.object().shape({
    remoteAmount: yup.string(),
    onSiteAmount: yup.string(),
  });

  const handleSubmit = (formValues) => {
    console.log({ formValues });
    props.setVisible(true);
    //  history.push('/freelancer/sign-up/step-three');
  };

  return (
    <Modal
      visible={props.visible}
      effect="fadeInUp"
      width={
        dimensions.width < 780
          ? '100%'
          : dimensions.width == 1200
          ? '60%'
          : dimensions.width == 1024
          ? '60%'
          : '40%'
      }
      onClickAway={() => props.setVisible(false)}
    >
      <div
        style={{
          height: dimensions.width < 780 ? smallHeight : 'auto',
          width: dimensions.width < 780 ? dimensions.width : 'auto',
        }}
        className="rounded-lg bg-white overflow-y-scroll hideScroll"
      >
        <div
          style={{ borderBottom: '1px solid rgba(56, 54, 154,0.1)' }}
          className="flex items-center justify-between p-8"
        >
          <p className="text-xl">EDIT PREFRENECES</p>
          <img
            src={close}
            alt=""
            onClick={() => {
              props.setVisible(false);
            }}
            className="cursor-pointer"
          />
        </div>

        {/* main edit content */}
        <div className="lg:my-10 my-5 lg:px-10 px-5">
          {/* onsite or remote option */}
          <p className="lg:text-xl text-lg">
            - Please add your engagement preferences
          </p>
          <div
            style={{ borderBottom: '1px solid rgba(56, 54, 154,0.1)' }}
            className="flex items-center mt-4 pb-10"
          >
            <div
              onClick={() => {
                setEngagement(true);
              }}
              className="flex items-center cursor-pointer"
            >
              <img
                src={engagement ? checked : unchecked}
                alt=""
                loading="lazy"
              />
              <p
                className="lg:text-xl text-lg ml-3"
                style={{ color: engagement ? '#38369A' : '#707376' }}
              >
                Full time
              </p>
            </div>

            <div
              onClick={() => {
                setEngagement(false);
              }}
              className="flex items-center ml-10 cursor-pointer"
            >
              <img
                src={!engagement ? checked : unchecked}
                alt=""
                loading="lazy"
              />
              <p
                className="lg:text-xl text-lg ml-3"
                style={{ color: !engagement ? '#38369A' : '#707376' }}
              >
                Part time
              </p>
            </div>
          </div>
          {/* onsite or remote option */}

          {/* part time of full time option */}
          <p className="lg:text-xl text-lg mt-5">
            - Please add your location preferences
          </p>
          <div
            style={{ borderBottom: '1px solid rgba(56, 54, 154,0.1)' }}
            className="flex items-center mt-4 pb-10"
          >
            <div
              onClick={() => {
                setLocation(true);
              }}
              className="flex items-center cursor-pointer"
            >
              <img src={location ? checked : unchecked} alt="" loading="lazy" />
              <p
                className="lg:text-xl text-lg ml-3"
                style={{ color: location ? '#38369A' : '#707376' }}
              >
                Remote
              </p>
            </div>

            <div
              onClick={() => {
                setLocation(false);
              }}
              className="flex items-center ml-12 cursor-pointer"
            >
              <img
                src={!location ? checked : unchecked}
                alt=""
                loading="lazy"
              />
              <p
                className="lg:text-xl text-lg ml-3"
                style={{ color: !location ? '#38369A' : '#707376' }}
              >
                On-site
              </p>
            </div>
          </div>
          {/* part time of full time option */}

          {/* hourly rates */}
          <p className="lg:text-xl text-lg mt-5">
            - Please add your hourly rates in USD
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form id="hourly-rate">
                  <div className="flex items-center flex-wrap mt-8">
                    <div
                      style={{
                        borderRight:
                          dimensions.width < 780
                            ? ''
                            : '1px solid rgba(177, 181, 185,0.5)',
                      }}
                      className="flex items-center mr-5 pr-5"
                    >
                      <p style={{ color: '#707376' }} className="mr-3">
                        Remote:
                      </p>
                      <CustomTextInput
                        width={dimensions.width < 780 ? 'w-32' : 'w-16'}
                        mt="mt-0"
                        name="remoteAmount"
                        id="remoteAmount"
                        type="text"
                        placeholder="eg: $20"
                      />
                      <p style={{ color: '#B1B5B9' }} className="text-sm ml-2">
                        per hr
                      </p>
                    </div>

                    <div className="flex mt-8 md:mt-0 items-center">
                      <p style={{ color: '#707376' }} className="lg:mr-3 mr-4">
                        On site:
                      </p>
                      <CustomTextInput
                        width={dimensions.width < 780 ? 'w-32' : 'w-16'}
                        mt="mt-0"
                        name="onSiteAmount"
                        id="onSiteAmount"
                        type="text"
                        placeholder="eg: $20"
                      />
                      <p style={{ color: '#B1B5B9' }} className="text-sm ml-2">
                        per hr
                      </p>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>

          {/* hourly rates */}
        </div>
        {/* main edit content */}
        <div
          className="px-10 py-5 flex  mt-10 justify-end"
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
            form="hourly-rate"
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
