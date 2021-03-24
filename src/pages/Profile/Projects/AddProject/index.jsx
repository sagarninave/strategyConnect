import React, { useState, useEffect } from 'react';
import edit from '../../../../assets/img/editP.png';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import close from '../../../../assets/img/cancel.svg';
import Modal from 'react-awesome-modal';
import CustomTextInput from '../../../auth/components/CustomTextInput';
import CustomTextArea from '../../../auth/components/CustomTextArea';

export default function AddProject(props) {
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

  const initialValues = {
    title: '',
    description: '',
  };

  const validationSchema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
  });

  const handleSubmit = (formValues) => {
    console.log({ formValues });
    props.setVisible(false);
  };
  return (
    <Modal
      visible={props.visible}
      effect="fadeInUp"
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
          <p className="text-xl">ADD PROJECT</p>
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
        <div className="lg:px-20 px-10 mt-5 lg:mt-10 w-full">
          <div className="w-full flex flex-wrap items-center">
            <img
              src={edit}
              alt=""
              className="h-24 rounded lg:w-40 w-full lg:mr-12"
              loading="lazy"
            />

            <button
              onClick={() => {}}
              style={{ border: '1px solid #38369A', color: '#38369A' }}
              className="text-base rounded mt-8 lg:mt-0 px-4 py-2"
            >
              Upload Image
            </button>
          </div>

          <div className="w-full mb-10">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => {
                return (
                  <Form id="add-project">
                    <CustomTextInput
                      name="title"
                      id="title"
                      type="text"
                      placeholder="Add Title *"
                    />
                    <CustomTextArea
                      rows="3"
                      name="description"
                      id="description"
                      type="text"
                      placeholder="Add Description *"
                    />
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        {/* main add content */}

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
            type="submit"
            form="add-project"
            className="purple text-white px-4 py-2 ml-4 rounded text-base"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}
