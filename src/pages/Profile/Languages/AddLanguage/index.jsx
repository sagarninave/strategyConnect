import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import close from '../../../../assets/img/cancel.svg';
import Modal from 'react-awesome-modal';
import LanguagesComponent from '../../../auth/Freelancer/SignUpStepTwo/LanguagesComponent';

export default function AddLanguage(props) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
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

  const IndustryValues = [
    { item: 'Tech', value: 'Tech' },
    { item: 'Hospitality', value: 'Hospitality' },
    { item: 'Medical', value: 'Medical' },
  ];

  const durationValues = [
    { item: '3 months', value: '3 months' },
    { item: '6 montths', value: '6 months' },
    { item: 'a year', value: 'a year' },
  ];

  const langArrayList = [{ lang: 'Tech', fluency: 'a year' }];
  const initialValues = {
    title: '',
    description: '',
  };

  const validationSchema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
  });

  const handleSubmit = (formValues) => {
    //     console.log({ formValues });
    props.setVisible(false);
  };
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
          height: dimensions.width < 780 ? smallHeight : 'auto',
          width: dimensions.width < 780 ? dimensions.width : 'auto',
        }}
        className="rounded-lg bg-white overflow-y-scroll hideScroll"
      >
        <div
          style={{ borderBottom: '1px solid rgba(56, 54, 154,0.1)' }}
          className="flex items-center justify-between p-8"
        >
          <p className="text-xl">ADD LANGUAGES</p>
          <img
            src={close}
            alt=""
            onClick={() => {
              props.setVisible(false);
            }}
            className="cursor-pointer"
          />
        </div>
        {/* main add content */}
        <div className="lg:px-20 px-10 mt-5 lg:mt-10 ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form id="add-language">
                  <LanguagesComponent
                    itemOnePlaceholder="Select Language"
                    itemTwoPlaceholder="Fluency"
                    languagesValues={IndustryValues}
                    fluencyValues={durationValues}
                    langArrayList={langArrayList}
                    placeholder="Languages"
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
        {/* main add content */}

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
            type="submit"
            form="add-language"
            className="purple text-white px-4 py-2 ml-4 rounded text-base"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}
