/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIndustries } from '../../../../../../state/actions/startProjectAction';
import axios from '../../../../../../services/api';
import darrow from '../../../../../../assets/img/down-arrow.svg';
import CustomTextArea from '../../../../../../pages/auth/components/CustomTextArea';
import CustomTextInput from '../../../../../../pages/auth/components/CustomTextInput';
import { css } from '@emotion/core';
import PacmanLoader from 'react-spinners/PacmanLoader';

const override = css`
  display: block;
  margin: 5px auto;
  position: relative;
  left: -10px;
  top: -4px;
`;

const PageTwo = (props) => {
  const { startProject, setContinue, id } = props;
  const [open2, setOpen2] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inId, setInId] = useState('');
  const [placeValue2, setPlaceValue2] = useState('Industries *');

  useEffect(() => {
    props.getIndustries();
  }, []);

  const initialValues = {
    problemDescription: '',
    duration: null,
  };

  const validationSchema = yup.object().shape({
    problemDescription: yup
      .string()
      .required('This is required')
      .min(20, 'Must be at least 20 characters'),
    duration: yup.number('Must be a number').required('This is required'),
  });

  const handleSUbmit = (formValues) => {
    setLoading(true);
    const params = {
      lead_client_id: parseInt(id),
      title: 'Financial Terms',
      problem_description: formValues.problemDescription,
      expected_duration: parseInt(formValues.duration),
      industries: [inId],
    };
    axios
      .post('data/generic/save/project_lead/', params)
      .then((res) => {
        setLoading(false);

        if (res.data.meta.ok === 0) {
          setError(true);
        } else {
          setError(false);
        }
        setShow(true);
      })
      .catch((e) => {
        setLoading(false);
        setShow(true);
      });
  };

  return (
    <div className="w-full flex-col flex items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSUbmit}
      >
        {(props) => {
          return (
            <Form>
              <CustomTextArea
                rows="3"
                name="problemDescription"
                id="problemDescription"
                type="text"
                placeholder="Tell us more about your project *"
              />
              <div
                onClick={() => {
                  setOpen2(!open2);
                }}
                className="relative border border-gray-300 cursor-pointer rounded mt-2 w-72 bg-white focus:outline-none p-3 font-thin text-sm"
              >
                <Dropdown
                  options={props.dropList}
                  placeholder={placeValue2}
                  open={open2}
                  setOPen={setOpen2}
                />
                {open2 ? (
                  <div className="fixed bg-white z-30 overflow-y-scroll h-28 rounded  border border-gray-300 w-72">
                    {startProject.loading ? (
                      <p>Loading...</p>
                    ) : (
                      startProject.industries.map((item, i) => {
                        return (
                          <p
                            onClick={() => {
                              setPlaceValue2(item.name);
                              setInId(item.id);
                              setOpen2(false);
                            }}
                            key={item.id}
                            className="w-full p-2 hover:bg-gray-100"
                          >
                            {item.name}
                          </p>
                        );
                      })
                    )}
                  </div>
                ) : null}

                <img
                  src={darrow}
                  alt="arrow"
                  className="bg-white absolute pr-2  top-4 right-1 "
                />
              </div>

              <CustomTextInput
                mt="mt-2"
                name="duration"
                id="duration"
                type="text"
                placeholder="Duration in weeks  *"
              />

              <div className="flex items-center  mt-8">
                <p
                  onClick={() => {
                    setContinue();
                    setShow(false);
                  }}
                  className="ml-3.5 py-2 px-4 text-center w-28 rounded border border-gray-300 text-gray-400 text-sm cursor-pointer"
                >
                  Back
                </p>
                <p
                  onClick={props.handleSubmit}
                  className="ml-3.5 py-2 px-4 w-28 text-center rounded purple text-white text-sm cursor-pointer"
                >
                  {loading ? (
                    <PacmanLoader
                      color={'#ffffff'}
                      loading={loading}
                      css={override}
                      size={9}
                    />
                  ) : (
                    'Submit'
                  )}
                </p>
              </div>

              {show ? (
                <div>
                  {error ? (
                    <p className="text-red-400 text-sm mt-2 text-center">
                      Error saving data
                    </p>
                  ) : (
                    <p className="text-green-400 text-sm mt-2 text-center">
                      Saved Successfully
                    </p>
                  )}
                </div>
              ) : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

getIndustries.propTypes = {
  startProject: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  startProject: state.startProject,
});

export default connect(mapStateToProps, { getIndustries })(PageTwo);

// export default PageTwo;
