import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';

export default function ProfileCompleteModal(props) {
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
  return (
    <Modal
      visible={props.visible}
      width={`${dimensions.width < 768 ? '85%' : '50%'}`}
      effect="fadeInUp"
      onClickAway={() => props.setVisible(false)}
    >
      <div className=" rounded h-auto bg-white overflow-y-scroll">
        <div
          className="lg:py-6 py-4 w-full"
          style={{ borderBottom: '1px solid rgba(10, 10, 10,0.1)' }}
        >
          <p className="lg:text-2xl  text-base text-center  text-black ">
            You have completed <span className="font-bold ">62%</span> of your
            profile.
          </p>
        </div>

        {/* progress div */}
        <div
          className="mx-auto lg:py-6 py-3 rounded-lg mt-10 lg:px-24 px-4 mb-4 flex items-center "
          style={{
            width: '80%',
            border: '1.5px solid #98BA12',
            background: 'rgba(227, 250, 139, 0.1)',
          }}
        >
          <p
            className="font-bold lg:text-2xl text-sm lg:mr-5  mr-2"
            style={{ color: '#98BA12' }}
          >
            62%
          </p>

          <div class="progress">
            <div
              role="progressbar"
              class="progress-bar bg-info progress-bar-striped"
              style={{ width: '62%' }}
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        {/* progress div */}
        <div className="px-4 lg:px-0">
          <p
            style={{ color: '#3B3E41' }}
            className="text-center lg:w-4/5 w-full mx-auto mb-10 lg:text-xl  text-sm"
          >
            According to our data, 83% of companies hire professionals with
            complete profile.
          </p>
        </div>

        <div
          style={{ borderTop: '1px solid rgba(10, 10, 10,0.1)' }}
          className="flex items-center justify-center lg:py-5 py-3"
        >
          <button
            style={{ border: '1.5px solid #38369A', color: '#38369A' }}
            className="lg:py-2 py-1 lg:px-6 px-3 rounded bg-white lg:text-base text-sm  text-center"
          >
            <Link to="/profile">View Profile</Link>
          </button>
          <button
            style={{ border: '1.5px solid #38369A' }}
            className="lg:py-2 py-1 ml-3 lg:px-4 px-3 rounded purple lg:text-base text-sm  text-center text-white"
          >
            <Link to="/profile">Update Profile</Link>
          </button>
        </div>
      </div>
    </Modal>
  );
}
