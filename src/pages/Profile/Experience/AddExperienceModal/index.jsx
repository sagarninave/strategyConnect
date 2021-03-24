import React, { useState, useEffect } from 'react';
import close from '../../../../assets/img/cancel.svg';
import Modal from 'react-awesome-modal';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import LanguagesComponent from '../../../auth/Freelancer/SignUpStepTwo/LanguagesComponent';
import CustomTextInput from '../../../auth/components/CustomTextInput';
import CustomDropdown from '../../../auth/components/CustomDropdown';
import downArrow from '../../../../assets/img/textArrDown.svg';
import upArrow from '../../../../assets/img/textUpArrow.svg';
import CustomDatePicker from '../../../auth/Freelancer/SignUpStepThree/SignUpThreeForm/CustomDatePicker';
import CustomTextArea from '../../../auth/components/CustomTextArea';

export default function AddExperienceModal(props) {
  const [professionActive, setProfessionActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [employmentType, setEmploymentType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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
  const bigHeight = (80 / 100) * dimensions.height;
  const midHeight = (90 / 100) * dimensions.height;
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

  const employmentTypeItems = [
    { item: 'Remote', value: 'Remote' },
    { item: 'Full Time', value: 'Full Time' },
    { item: 'Part Time', value: 'Part time' },
  ];

  const initialValues = {
    position: '',
    company: '',
    location: '',
    responsibilities: '',
  };

  const validationSchema = yup.object().shape({
    company: yup.string().required('This is required'),
    location: yup.string().required('Location is required'),
    position: yup.string().required('Position is required'),
    responsibilities: yup.string(),
  });
  const handleSubmit = (formValues) => {
    formValues.employmentType = employmentType;
    formValues.startDate = startDate;
    formValues.endDate = endDate;
    console.log({ formValues });
    setVisible(true);
    //  history.push('/freelancer/sign-up/step-three');
  };

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
          <p className="text-xl uppercase">Add experience </p>
          <img
            src={close}
            alt=""
            onClick={() => {
              props.setVisible(false);
            }}
            className="cursor-pointer"
          />
        </div>

        {/* main content */}
        <div className="xl:px-24 md:px-14 px-10 my-3  h-4/6 overflow-y-scroll hideScroll">
          {/* innerContent */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form id="step-three">
                  <LanguagesComponent
                    itemOnePlaceholder="Select Industry"
                    itemTwoPlaceholder="Duration"
                    languagesValues={IndustryValues}
                    fluencyValues={durationValues}
                    langArrayList={langArrayList}
                    placeholder="Industry focus *"
                  />

                  <LanguagesComponent
                    itemOnePlaceholder="Select capabilities"
                    itemTwoPlaceholder="Duration"
                    languagesValues={IndustryValues}
                    fluencyValues={durationValues}
                    langArrayList={langArrayList}
                    placeholder="Functional capabilities *"
                  />

                  <div
                    className={`flex  flex-col justify-between mt-6 relative cursor-pointer ${
                      professionActive ? 'active' : 'inactive'
                    }-textInput`}
                  >
                    <p style={{ color: '#707376' }} className="text-base">
                      Professional information *
                    </p>
                    <div
                      style={{
                        borderTop: '1px solid rgba(10, 10, 10, 0.05)',
                      }}
                      className="mt-3 w-full mb-3"
                    >
                      <CustomTextInput
                        name="position"
                        id="position"
                        type="text"
                        placeholder="Position *"
                      />

                      <CustomDropdown
                        items={employmentTypeItems}
                        placeholder="Employment type *"
                        id="employmentType"
                        width="w-full"
                        onValueChange={(val) => {
                          setEmploymentType(val);
                          setProfessionActive(true);
                        }}
                        downArrow={downArrow}
                        upArrow={upArrow}
                      />

                      <CustomTextInput
                        name="company"
                        id="company"
                        type="text"
                        placeholder="Company *"
                      />

                      <CustomTextInput
                        name="location"
                        id="location"
                        type="text"
                        placeholder="Location *"
                      />

                      <div className="flex lg:flex-row flex-col w-full items-center justify-between">
                        <CustomDatePicker
                          title="Start date *"
                          placeholder="Select Start Date"
                          returnedValue={setStartDate}
                          width="lg:w-40 w-full"
                        />
                        <CustomDatePicker
                          placeholder="Select End Date"
                          title="End date *"
                          returnedValue={setEndDate}
                          width="lg:w-40 w-full "
                        />
                      </div>

                      <CustomTextArea
                        rows="3"
                        name="responsibilities"
                        id="responsibilities"
                        type="text"
                        placeholder="Your responsibility at zazzy.studio"
                      />
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>

          {/* innerContent */}
        </div>
        {/* main content */}

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
            onClick={() => {
              props.setVisible(false);
            }}
            className="purple text-white px-4 py-2 ml-4 rounded text-base"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}
