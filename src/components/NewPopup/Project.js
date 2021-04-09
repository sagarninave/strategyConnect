/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getAllIndustries } from './../../services/StartProject';
import { getIndustries } from '../../state/actions/startProjectAction';
const axios = require('axios');


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

export default function Project(props) {
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%'
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

  const [formFields, setFormFields] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    industry: '',
    project: '',
    projectdescription: ''
  });

  const [industryList, setIndustryList] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {

    // getAllIndustries().then(result => { 
    //   // console.log("industries : ", result)
    //   setIndustryList(result.data.data.list)
    // });

    getIndustries();
    // .then(result => { 
    //   console.log("industries 111: ", result)
    // });


    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onHandleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  // const loadIndustries = () => {
  //   let res = axios({
  //     method: 'get',
  //     url: `https://testapi.strategyconnect.co/api/data/generic/case_study/industry-list?limit=100`,
  //     headers: {'Content-Type': 'application/json', Authorization: 'test', namespace: 'WEB'}
  //   })
  //   res.then(x => { 
  //     console.log("xxxx", x);
  //   })
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("GO TO ", formFields)

    let data = {
      "name": formFields.name,
      "organisation_name": formFields.organization,
      "email": formFields.email,
      "contact": formFields.phone,
      "message": formFields.message,
      "enquiry_type": props.enquiry_type,
      "industry": formFields.industry,
      "project": formFields.project,
      "project_description": formFields.project
    }

    console.log(data)
    axios({
      method: 'post',
      url: `http://localhost:3003/api/data/generic/save-enquiry/enquiry`,
      data: data,
      headers: {
        'x-fwd-authorization': 'test',
        'Namespace': 'STRATEGY'
      }
    })
      .then(result => {
        if (result.data.meta.ok === 1 && result.data.meta.message === "Success!") {
          setIsSubmitted(true);
          setFormFields({
            name: '',
            organization: '',
            email: '',
            phone: '',
            industry: '',
            project: '',
            projectdescription: ''
          })
          console.log("send form response", result.data)
        }
        setTimeout(() => {close()}, 2000);
      });
  }

  const close = () => {
    setIsSubmitted(false);
    setFormFields({
      name: '',
      organization: '',
      email: '',
      phone: '',
      industry: '',
      project: '',
      projectdescription: ''
    })
    props.close();
  }

  console.log("my industries", industryList)
  return (
    <>
      <div className="showInDesktop">
        {
          dimensions > 480 ?
            <Modal
              isOpen={props.open}
              onRequestClose={close}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
                <span className="floatRight">
                  <button onClick={close}>
                    <AiOutlineCloseCircle style={{ fontSize: "1.5rem" }} />
                  </button>
                </span>
                <p className="text-2xl text-center font-semibold"> Project Information </p>
                <p className="text-sm grey-text text-center mt-2"> Lets talk about everything</p>
                <form onSubmit={onSubmit}>
                  <div className="flex items-center mt-14">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={onHandleChange}
                      value={formFields.name}
                    />
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                      placeholder="Organisation Name"
                      id="organization"
                      name="organization"
                      onChange={onHandleChange}
                      value={formFields.organization}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                      placeholder="Email"
                      name="email"
                      onChange={onHandleChange}
                      value={formFields.email}
                    />
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={onHandleChange}
                      value={formFields.phone}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
                      placeholder="Industry"
                      name="industry"
                      onChange={onHandleChange}
                      value={formFields.industry}
                    />
                    {/* <Autocomplete
                      id="free-solo-demo"
                      freeSolo
                      options={top100Films.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField {...params} label="" margin="normal" variant="outlined" />
                      )}
                    /> */}
                    {/* <Autocomplete
                      // freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={industryList.map((option) => option.name)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Search input"
                          margin="normal"
                          variant="outlined"
                          InputProps={{ ...params.InputProps, type: 'search' }}
                        />
                      )}
                    />
                     */}
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
                      placeholder="Project"
                      name="project"
                      onChange={onHandleChange}
                      value={formFields.project}
                    />
                  </div>
                  <textarea
                    className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-4 text-sm"
                    placeholder="Project Description"
                    rows="5"
                    name="projectdescription"
                    onChange={onHandleChange}
                    value={formFields.projectdescription}
                  />
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
            </Modal> :
            <Modal
              isOpen={props.open}
              onRequestClose={close}
              style={customMobileStyles}
              contentLabel="Example Modal"
            >
              <div className="mx-auto w-full lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
                <span className="floatRight">
                  <button onClick={close}>
                    <AiOutlineCloseCircle style={{ fontSize: "1.5rem" }} />
                  </button>
                </span>
                <p className="text-2xl text-center font-semibold"> Project Information </p>
                <p className="text-sm grey-text text-center mt-2">Lets talk about everything</p>
                <form onSubmit={onSubmit} className="w-full">
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={onHandleChange}
                      value={formFields.name}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Organisation Name"
                      id="organization"
                      name="organization"
                      onChange={onHandleChange}
                      value={formFields.organization}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Email"
                      name="email"
                      onChange={onHandleChange}
                      value={formFields.email}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={onHandleChange}
                      value={formFields.phone}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Industry"
                      name="industry"
                      onChange={onHandleChange}
                      value={formFields.industry}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="text"
                      className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-full text-sm"
                      placeholder="Project"
                      name="project"
                      onChange={onHandleChange}
                      value={formFields.project}
                    />
                  </div>
                  <textarea
                    className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-4 text-sm"
                    placeholder="Project Description"
                    rows="3"
                    name="projectdescription"
                    onChange={onHandleChange}
                    value={formFields.projectdescription}
                  />
                  <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
                    <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
                      <p className="relativeContact ">Submit</p>
                    </button>
                    {
                      isSubmitted && <p className="mt-4 text-center text-green-900"> Data Saved Successfully </p>
                    }
                  </div>
                </form>
              </div>
            </Modal>
        }
      </div>
    </>
  )
}
