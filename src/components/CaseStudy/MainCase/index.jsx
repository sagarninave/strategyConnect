import React, { useState } from 'react';
import search from '../../../assets/img/search.svg';
import arrDown from '../../../assets/img/arrDown.svg';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import SIdeBar from './SIdeBar';
import FIlteredCards from './FIlteredCards';

function MainCase({ caseStudy }) {
  const { caseStudies } = caseStudy;
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [indusName, setIndusName] = useState('');
  const [projectName, setProjName] = useState('');
  const [typeNum, setTypeNum] = useState(null);

  // var storedIndustries = JSON.parse(localStorage.getItem('industry'));

  // const filteredIndustries = storedIndustries.filter((item, i) => {
  //   const letter = indusName;
  //   return item.client.includes(letter);
  // });
  // console.log({ filteredIndustries });

  return (
    <div className="flex justify-between lg:mt-20  mt-10 xl:px-32 px-4">
      {/* sidebArcomponent */}
      <SIdeBar
        name={indusName}
        setName={setIndusName}
        projectName={projectName}
        type={typeNum}
        setType={setTypeNum}
        setProjName={setProjName}
        search={search}
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
        arrDown={arrDown}
      />
      {/* sidebArcomponent */}
      {/* mainComponent */}
      <div className=" lg:w-8/12 w-11/12 mx-auto relative -top-8 flex justify-between items-center flex-wrap">
        <div className="border w-full mx-auto lg:hidden mt-4 rounded border-gray-300 flex justify-between items-center p-3.5">
          <input
            type="text"
            className="border-none focus:outline-none text-base font-thin"
            placeholder="Search project"
          />
          <img src={search} loading="lazy" alt="search" className="" />
        </div>
        <p
          onClick={() => {
            setVisibleSidebar(true);
          }}
          className="purple h-10  rounded-full text-center w-28 mx-auto fixed z-20 inset-y-2/4 inset-x-1/4 text-white flex justify-center items-center  lg:hidden"
        >
          Filter
        </p>

        <FIlteredCards caseStudy={caseStudies} />
        <ReactPaginate
          previousLabel={'Previous'}
          previousClassName={
            'border py-1 px-2 text-black text-sm rounded border-gray-300'
          }
          disabledClassName={
            'border py-1 px-2 text-gray-300 text-sm rounded border-gray-300'
          }
          nextClassName={
            'border py-1 px-4 text-black text-sm rounded border-gray-300'
          }
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={10}
          marginPagesDisplayed={2}
          onPageChange={() => {}}
          containerClassName={
            ' justify-between light-divide-line pt-10 items-center w-full pr-12 hidden lg:flex my-8'
          }
          subContainerClassName={'pages pagination'}
          activeClassName={
            'text-white text-sm font-bold px-2 py-1 purple rounded focus:outline-none'
          }
        />

        <div className=" py-8 w-full light-divide-line mt-8 block lg:hidden  rounded items-center">
          <p className="purple w-32 rounded text-white text-sm text-center mx-auto py-2 px-4">
            Show More
          </p>
        </div>
      </div>
      {/* mainComponent */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  caseStudy: state.caseStudy,
});

export default connect(mapStateToProps, {})(MainCase);
