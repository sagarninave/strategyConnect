import React, { useState, useRef } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import logo from '../../../../../assets/img/regLogo.svg';
import LanguagesComponent from '../../SignUpStepTwo/LanguagesComponent';
import ExperienceTextBox from './ExperienceTextbox';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomDropdown from '../../../components/CustomDropdown';
import zazzy from '../../../../../assets/img/zazzy.svg';
//arrow icons
import downArrow from '../../../../../assets/img/textArrDown.svg';
import upArrow from '../../../../../assets/img/textUpArrow.svg';
import LogoUpload from './LogoUpload';
import CustomDatePicker from './CustomDatePicker';
import CustomTextArea from '../../../components/CustomTextArea';
import ContinueFooter from '../../../components/ContinueFooter';
import ProfileCompleteModal from './ProfileCompleteModal';

export default function SignUpThreeForm() {
  const percentage = 80.4;
  const [professionActive, setProfessionActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [employmentType, setEmploymentType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [myLogo, setMyLogo] = useState(zazzy);
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
    formValues.employmentType = employmentType;
    formValues.myLogo = myLogo;
    formValues.startDate = startDate;
    formValues.endDate = endDate;
    console.log({ formValues });
    setVisible(true);
    //  history.push('/freelancer/sign-up/step-three');
  };

  const langArrayList = [{ lang: 'Tech', fluency: 'a year' }];
  return (
    <div className="h-screen lg:w-2/5  relative w-full overflow-y-scroll hideScroll">
      <ProfileCompleteModal
        visible={visible}
        setVisible={(val) => {
          setVisible(val);
        }}
      />
      <div className=" flex flex-col justify-center md:px-10 xl:px-12 px-8 pb-28 lg:pb-24">
        <div className="flex items-center mx-auto mt-12">
          <img src={logo} alt="logo" className="" />
          <p className="text-base ml-2 text-black">StrategyConnect</p>
        </div>

        <h1 className="text-3xl text-center mt-9">Add your experience</h1>
        <p className="grey-text text-center text-base font-light mt-3">
          Please fill your Work Experience Information
        </p>

        <div
          style={{ borderTop: '1px solid rgba(10, 10, 10, 0.05)' }}
          className="mt-8"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form id="step-three">
                  <ExperienceTextBox />
                  <LanguagesComponent
                    itemOnePlaceholder="Select Industry"
                    itemTwoPlaceholder="Duration"
                    languagesValues={IndustryValues}
                    fluencyValues={durationValues}
                    langArrayList={langArrayList}
                    placeholder="Industry focus *"
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
                      style={{ borderTop: '1px solid rgba(10, 10, 10, 0.05)' }}
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

                      <LogoUpload
                        handleClick={handleClick}
                        hiddenFileInput={hiddenFileInput}
                        handleChange={handleChange}
                        logo={myLogo}
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

                      <LanguagesComponent
                        itemOnePlaceholder="Select capabilities"
                        itemTwoPlaceholder="Duration"
                        languagesValues={IndustryValues}
                        fluencyValues={durationValues}
                        langArrayList={langArrayList}
                        placeholder="Functional capabilities *"
                      />
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>

      <ContinueFooter percentage={percentage} id="step-three" />
    </div>
  );
}
