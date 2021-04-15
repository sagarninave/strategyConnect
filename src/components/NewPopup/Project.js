import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { formApi, baseApi } from '../../services/constants';
import { country } from './country';
import Autocomplete from '@material-ui/lab/Autocomplete';

const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '98%',
    },
  },
  errorInput: {
    backgroundColor: '#F2DEDE',
    color: 'red',
    '& label': {
      color: "red"
    },
    '& .MuiOutlinedInput-root': {
      borderColor: 'red'
    }
  },
  industryMobile: {
    '& .MuiFormControl-fullWidth': {
      width: '100%!important'
    }
  },
  industry: {
    width: '100%!important',
    '& .MuiFormControl-fullWidth': {
      width: '100%!important'
    }
  },
  vinBox: {
    width: 320,
    marginTop: "4px"
  }
}));

export default function Project(props) {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
    }
  };

  const customMobileStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%'
    }
  };

  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [industry, setIndustry] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const [errName, setErrName] = useState(false);
  const [errOrganization, setErrOrganization] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errPhoneCode, setErrPhoneCode] = useState(false);
  const [errIndustry, setErrIndustry] = useState(false);
  const [errProjectTitle, setErrProjectTitle] = useState(false);
  const [errProjectDescription, setErrProjectDescription] = useState(false);

  const [errMsgName, setErrMsgName] = useState(null);
  const [errMsgOrganization, setErrMsgOrganization] = useState(null);
  const [errMsgEmail, setErrMsgEmail] = useState(null);
  const [errMsgPhone, setErrMsgPhone] = useState(null);
  const [errMsgPhoneCode, setErrMsgPhoneCode] = useState(null);
  const [errMsgIndustry, setErrMsgIndustry] = useState(null);
  const [errMsgProjectTitle, setErrMsgProjectTitle] = useState(null);
  const [errMsgProjectDescription, setErrMsgProjectDescription] = useState(null);

  const [industryList, setIndustryList] = useState([]);
  const [dimensions, setDimensions] = useState(window.innerWidth);

  const [values, setValues] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    phoneCode: "",
    message: "",
    industry: "",
    projectTitle: "",
    projectDescription: ""
  });

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'organization') {
      setOrganization(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'phone') {
      setPhone(event.target.value);
    } else if (event.target.name === 'phoneCode') {
      setPhoneCode(event.target.value);
    } else if (event.target.name === 'industry') {
      setIndustry(event.target.value);
    } else if (event.target.name === 'projectTitle') {
      setProjectTitle(event.target.value);
    } else if (event.target.name === 'projectDescription') {
      setProjectDescription(event.target.value);
    }
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrName(false);
    setErrOrganization(false);
    setErrEmail(false);
    setErrPhone(false);
    setErrPhoneCode(false);
    setErrIndustry(false);
    setErrProjectTitle(false);
    setErrProjectDescription(false);
  }

  async function autoCompleteFunction(value) {
    await setIndustry(value);
    await setValues({ ...values, industry: value });
  }

  const validateForm = async e => {
    let checkEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    let checkPhone = /^[0-9]+$/
    e.preventDefault()
    if (values.name === '' &&
      values.organization === '' &&
      values.email === '' &&
      values.phone === '' &&
      values.phoneCode === '' &&
      values.industry === '' &&
      values.projectTitle === '' &&
      values.projectDescription === '') {
      setErrName(true);
      setErrOrganization(true);
      setErrEmail(true);
      setErrPhone(true);
      setErrPhoneCode(true);
      setErrIndustry(true);
      setErrProjectTitle(true);
      setErrProjectDescription(true);
      setErrMsgName('Name is Required');
      setErrMsgOrganization('Organization is Required');
      setErrMsgEmail('Email is Required');
      setErrMsgPhone('Phone is Required');
      setErrMsgPhoneCode('Phone Code is Required');
      setErrMsgIndustry("Industry is Required");
      setErrMsgProjectTitle("Project Title is Required");
      setErrMsgProjectDescription("Project Description is Required");
    } else if (values.name === '') {
      setErrName(true);
      setErrMsgName('Name is Required');
    } else if (values.organization === '') {
      setErrOrganization(true);
      setErrMsgOrganization('Organization is Required');
    } else if (values.email === '') {
      setErrEmail(true);
      setErrMsgEmail('Email is Required');
    } else if (!checkEmail.test(values.email)) {
      setErrEmail(true);
      setErrMsgEmail('Invalid Email');
    } else if (values.phoneCode === '' || values.phoneCode === null || values.phoneCode === undefined) {
      setErrPhoneCode(true);
      setErrMsgPhoneCode('Phone Code is Required');
    } else if (values.phone === '') {
      setErrPhone(true);
      setErrMsgPhone('Phone is Required');
    } else if (!checkPhone.test(values.phone)) {
      setErrPhone(true);
      setErrMsgPhone('Invalid Phone');
    } else if (values.phone.length < 10) {
      setErrPhone(true);
      setErrMsgPhone('Minimum 10 Digits');
    } else if (values.phone.length > 10) {
      setErrPhone(true);
      setErrMsgPhone('Maximum 10 Digits');
    } else if (values.phone.includes(values.name)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Name');
    } else if (values.phone.includes(values.organization)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Organization');
    } else if (values.phone.includes(values.email)) {
      setErrPhone(true);
      setErrMsgPhone('Contain Email');
    } else if (values.industry === '') {
      setErrIndustry(true);
      setErrMsgIndustry('Industry is Required');
    } else if (values.projectTitle === '') {
      setErrProjectTitle(true);
      setErrMsgProjectTitle('Project Title is Required');
    } else if (values.projectDescription === '') {
      setErrProjectDescription(true);
      setErrMsgProjectDescription('Project Description is Required');
    } else {
      submitProjectDetails();
    }
  }

  const submitProjectDetails = () => {
    let data = {
      "name": values.name,
      "organisation_name": values.organization,
      "email": values.email,
      "contact": values.phone,
      "country_code": values.phoneCode,
      "message": "",
      "enquiry_type": props.enquiry_type,
      "industry": values.industry,
      "project": values.projectTitle,
      "project_description": values.projectDescription
    }
    console.log("data : ", data);
    axios({
      method: 'post',
      url: `${formApi}data/generic/save-enquiry/enquiry`,
      data: data,
      headers: {
        'x-fwd-authorization': 'test',
        'Namespace': 'STRATEGY'
      }
    })
      .then(result => {
        if (result.data.meta.ok === 1 && result.data.meta.message === "Success!") {
          setIsSubmitted(true);

          setValues({ ...values, name: '' });
          setValues({ ...values, organization: '' });
          setValues({ ...values, email: '' });
          setValues({ ...values, phone: '' });
          setValues({ ...values, phoneCode: '' });
          setValues({ ...values, industry: '' });
          setValues({ ...values, projectTitle: '' });
          setValues({ ...values, projectDescription: '' });

          setName('');
          setOrganization('');
          setEmail('');
          setPhone('');
          setPhoneCode('');
          setIndustry('');
          setProjectTitle('');
          setProjectDescription('');

          setErrName(false);
          setErrOrganization(false);
          setErrEmail(false);
          setErrPhone(false);
          setErrPhoneCode(false);
          setErrIndustry(false);
          setErrProjectTitle(false);
          setErrProjectDescription(false);
          // console.log("send form response", result.data)
        }
        setTimeout(() => { close() }, 2000);
      });
  }

  const close = () => {
    setValues({ ...values, name: '' });
    setValues({ ...values, organization: '' });
    setValues({ ...values, email: '' });
    setValues({ ...values, phone: '' });
    setValues({ ...values, phoneCode: '' });
    setValues({ ...values, industry: '' });
    setValues({ ...values, projectTitle: '' });
    setValues({ ...values, projectDescription: '' });

    setName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setPhoneCode('');
    setIndustry('');
    setProjectTitle('');
    setProjectDescription('');

    setErrName(false);
    setErrOrganization(false);
    setErrEmail(false);
    setErrPhone(false);
    setErrPhoneCode(false);
    setErrIndustry(false);
    setErrProjectTitle(false);
    setErrProjectDescription(false);

    setIsSubmitted(false);
    props.close();
  }

  function getIndustries() {
    let fetchAPI = axios({
      method: "get",
      url: `${baseApi}data/generic/industry_categorization/list?start=0&limit=371&filters={}`,
      headers: { 'Content-Type': 'application/json', Authorization: 'test', namespace: 'WEB' }
    })
    fetchAPI.then(result => {
      let resData = result.data.data.list;
      let industryTemp = []
      resData.map((item, index) => {
        industryTemp.push(item.name)
      })
      setIndustryList(industryTemp)
    })
  }

  const Pop = props => {
    const { className, anchorEl, style, ...rest } = props
    const bound = anchorEl.getBoundingClientRect()
    return <div {...rest} style={{
      position: 'absolute',
      zIndex: 9999,
      width: bound.width
    }} />
  }

  useEffect(() => {
    getIndustries();
    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Modal
        isOpen={props.open}
        onRequestClose={close}
        style={dimensions > 768 ? customStyles : customMobileStyles}
        contentLabel="Example Modal"
      >
        <div style={{ zIndex: "-999999999" }} className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
          <span className="floatRight">
            <button onClick={close}>
              <AiOutlineCloseCircle style={{ fontSize: "1.5rem" }} />
            </button>
          </span>
          <p className="text-2xl text-center font-semibold">Project Information</p>
          <p className="text-sm grey-text text-center mt-2"> Lets talk about everything.</p>
          <form onSubmit={(e) => validateForm(e)}>
            {/* desktop */}
            <div className="showInDesktop">
              <div className="flex items-center mt-4">
                <TextField
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => handleChange(e)}
                  value={name}
                  id="name"
                  label={errName ? errMsgName : "Name"}
                  variant="outlined"
                  data-testid="name"
                  className={`${errName && classes.errorInput} left-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
                <TextField
                  name="organization"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={organization}
                  placeholder="Organisation Name"
                  id="organization"
                  label={errOrganization ? errMsgOrganization : "Organisation Name"}
                  variant="outlined"
                  data-testid="organization"
                  className={`${errOrganization && classes.errorInput} right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  name="email"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={email}
                  placeholder="Email"
                  id="email"
                  label={errEmail ? errMsgEmail : "Email"}
                  variant="outlined"
                  data-testid="email"
                  className={`${errEmail && classes.errorInput} left-text-box focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm`}
                />
                <div className="flex right-text-box justif-between focus:outline-none border-gray-300 py-2 rounded w-2/4 text-sm">
                  <select
                    name="phoneCode"
                    value={phoneCode}
                    onChange={(e) => handleChange(e)}
                    className={`${errPhoneCode && classes.errorInput} flex-1 country`}
                  >
                    <option className="text-black-500 bg-white"> Code </option>
                    {
                      country.sort().map((item, index) => {
                        return <option className="text-black-500 bg-white"
                          key={index}
                          value={item.code + ' (' + item.dial_code + ')'}
                        > {item.code + ' (' + item.dial_code + ')'} </option>
                      })
                    }
                  </select>
                  <TextField
                    name="phone"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    value={phone}
                    placeholder="Phone Number"
                    id="phone"
                    label={errPhone ? errMsgPhone : "Phone Number"}
                    variant="outlined"
                    data-testid="phone"
                    className={`${errPhone && classes.errorInput}`}
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <Autocomplete
                  PopperComponent={Pop}
                  id="combo-box-demo"
                  options={industryList}
                  getOptionLabel={(option) => option}
                  value={industry}
                  style={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="Industries" variant="outlined" />}
                  onChange={(event, newValue) => autoCompleteFunction(newValue)}
                  className={`${errIndustry && classes.errorInput} industry left-text-box flex justif-between focus:outline-none border-gray-300 rounded w-2/4 text-sm`}
                />
                <TextField
                  name="projectTitle"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={projectTitle}
                  placeholder="Project Title"
                  name="projectTitle"
                  id="projectTitle"
                  label={errProjectTitle ? errMsgProjectTitle : "Project Title"}
                  variant="outlined"
                  data-testid="projectTitle"
                  style={{ marginLeft: '0rem!important' }}
                  className={`${errProjectTitle && classes.errorInput} right-text-box border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full ml-2 text-sm`}
                />
              </div>
              <div className="flex items-center mt-4">
                <TextField
                  name="projectDescription"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={projectDescription}
                  placeholder="Project Description"
                  id="projectDescription"
                  label={errProjectDescription ? errMsgProjectDescription : "Project Description"}
                  multiline
                  rows={4}
                  variant="outlined"
                  data-testid="projectDescription"
                  className={`${errProjectDescription && classes.errorInput} border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm`}
                />
              </div>
            </div>

            {/* mobile */}
            <div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => handleChange(e)}
                  value={name}
                  id="name"
                  label={errName ? errMsgName : "Name"}
                  variant="outlined"
                  data-testid="name"
                  className={`${errName && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="organization"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={organization}
                  placeholder="Organisation Name"
                  id="organization"
                  label={errOrganization ? errMsgOrganization : "Organisation Name"}
                  variant="outlined"
                  data-testid="organization"
                  className={`${errOrganization && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="email"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={email}
                  placeholder="Email"
                  id="email"
                  label={errEmail ? errMsgEmail : "Email"}
                  variant="outlined"
                  data-testid="email"
                  className={`${errEmail && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>

              <div className="showInMobile flex items-center mt-4">
                <div className="flex mobile-full-text-width justif-between focus:outline-none border-gray-300 py-2 rounded w-2/4 text-sm">
                  <select
                    name="phoneCode"
                    value={phoneCode}
                    onChange={(e) => handleChange(e)}
                    className={`${errPhoneCode && classes.errorInput} flex-1 country`}
                  >
                    <option className="text-black-500 bg-white"> Code </option>
                    {
                      country.sort().map((item, index) => {
                        return <option className="text-black-500 bg-white"
                          key={index}
                          value={item.code + ' (' + item.dial_code + ')'}
                        > {item.name} </option>
                      })
                    }
                  </select>
                  <TextField
                    name="phone"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    value={phone}
                    placeholder="Phone Number"
                    id="phone"
                    label={errPhone ? errMsgPhone : "Phone Number"}
                    variant="outlined"
                    data-testid="phone"
                    className={`${errPhone && classes.errorInput}`}
                  />
                </div>
              </div>
              <div className="showInMobile flex items-center mt-4">
                <Autocomplete
                  PopperComponent={Pop}
                  id="combo-box-demo"
                  options={industryList}
                  getOptionLabel={(option) => option}
                  value={industry}
                  style={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="Industries" variant="outlined" />}
                  onChange={(event, newValue) => autoCompleteFunction(newValue)}
                  className={`${errIndustry && classes.errorInput} industryMobile mobile-full-text-width  flex justif-between focus:outline-none border-gray-300 py-2 rounded w-2/4 text-sm`}
                />
              </div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="projectTitle"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={projectTitle}
                  placeholder="Project Title"
                  name="projectTitle"
                  id="projectTitle"
                  label={errProjectTitle ? errMsgProjectTitle : "Project Title"}
                  variant="outlined"
                  data-testid="projectTitle"
                  className={`${errProjectTitle && classes.errorInput} mobile-full-text-width border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm`}
                />
              </div>
              <div className="showInMobile flex items-center mt-4">
                <TextField
                  name="projectDescription"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={projectDescription}
                  placeholder="Project Description"
                  id="projectDescription"
                  label={errProjectDescription ? errMsgProjectDescription : "projectDescription"}
                  multiline
                  rows={2}
                  variant="outlined"
                  data-testid="projectDescription"
                  className={`${errProjectDescription && classes.errorInput} border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-8 text-sm`}
                />
              </div>
            </div>

            <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
              <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
                <p className="relativeContact ">Submit</p>
              </button>
            </div>
          </form>
          {
            isSubmitted && <p className="mt-4 text-center text-green-900"> Data Saved Successfully </p>
          }
        </div>
      </Modal>
    </>
  )
}
