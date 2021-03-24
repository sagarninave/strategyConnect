import React from 'react';
import zazzy from '../../../../assets/img/zazzy.svg';

export default function Information() {
  return (
    <div
      className="mt-10 pt-10"
      style={{ borderTop: ' 1px solid rgba(10, 10, 10,0.1)' }}
    >
      <p
        style={{ color: '#3B3E41' }}
        className="text-lg mb-2 font-semibold lg:mb-0"
      >
        - Professional information
      </p>

      <div className="mt-7">
        <div className="flex flex-col lg:flex-row items-center">
          <img src={zazzy} alt="" className="h-20 w-20 self-start rounded" />
          <div className="lg:ml-10">
            <p className="font-bold mt-2 lg:mt-0 text-xl lg:text-2xl">
              Visual Designer
            </p>
            <div
              className="flex items-center mt-3"
              style={{ color: '#707376' }}
            >
              <p
                style={{ borderRight: ' 1px solid rgba(10, 10, 10,0.1)' }}
                className=" px-2"
              >
                zazzy.studio
              </p>
              <p
                style={{ borderRight: ' 1px solid rgba(10, 10, 10,0.1)' }}
                className="px-2"
              >
                Pune
              </p>
              <p className="px-2">Full-time</p>
            </div>

            {/* long text  */}
            <p
              style={{ color: '#707376' }}
              className="leading-8 text-lg mt-7 font-light"
            >
              About me I could say that I have constantly been involved in
              acquiring the best talent in the market for my organization. I
              have been actively involved in handling the tasks of headhunting,
              identifying and approaching suitable candidates for the right
              profile.
            </p>
            {/* long text  */}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(10,10,10,0.1)',
            borderBottom: '1px solid rgba(10,10,10,0.1)',
          }}
          className="flex flex-col lg:flex-row items-center mt-10 pt-10 pb-14"
        >
          <img src={zazzy} alt="" className="h-20 w-20 self-start rounded" />
          <div className="lg:ml-10">
            <p className="font-bold mt-2 lg:mt-0 text-xl lg:text-2xl">
              UI/UX Designer
            </p>
            <div
              className="flex flex-wrap items-center mt-3"
              style={{ color: '#707376' }}
            >
              <p
                style={{ borderRight: ' 1px solid rgba(10, 10, 10,0.1)' }}
                className="text-base px-2 mt-2 lg:mt-0"
              >
                Mellow design studio
              </p>
              <p
                style={{ borderRight: ' 1px solid rgba(10, 10, 10,0.1)' }}
                className="text-base px-2 mt-2 lg:mt-0"
              >
                Banglore
              </p>
              <p
                style={{ borderRight: ' 1px solid rgba(10, 10, 10,0.1)' }}
                className="text-base px-2 mt-2 lg:mt-0"
              >
                Full-time
              </p>
              <p className="text-base px-2 mt-2 lg:mt-0">
                June 2019 - July 2020
              </p>
            </div>

            {/* long text  */}
            <p
              style={{ color: '#707376' }}
              className="leading-8 text-lg mt-7 font-light"
            >
              About me I could say that I have constantly been involved in
              acquiring the best talent in the market for my organization. I
              have been actively involved in handling the tasks of headhunting,
              identifying and approaching suitable candidates for the right
              profile.
            </p>
            {/* long text  */}
          </div>
        </div>
      </div>
    </div>
  );
}
