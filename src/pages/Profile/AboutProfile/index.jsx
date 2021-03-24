import React from 'react';
import linked from '../../../assets/img/link.svg';
import faceB from '../../../assets/img/facebo.svg';
import whats from '../../../assets/img/what.svg';

export default function AboutProfile() {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:mt-14 mt-8 lg:pl-2">
      <p
        style={{ color: '#38369A' }}
        className="lg:text-lg text-base font-semibold uppercase"
      >
        About
      </p>
      <div className="lg:w-4/5 w-full">
        <p
          style={{ color: '#707376' }}
          className="lg:text-lg text-sm mt-4 lg:mt-0 font-light leading-7 lg:leading-9"
        >
          About me I could say that I have constantly been involved in acquiring
          the best talent in the market for my organization. I have been
          actively involved in handling the tasks of headhunting, identifying
          and approaching suitable candidates for the right profile. I am
          skilled in implementing effective process and programs to manage
          modern business systems in challenging and diverse environments.
        </p>

        <div
          style={{ borderTop: '1px solid rgba(10, 10, 10,0.05)' }}
          className="flex items-center pt-7 mt-7"
        >
          <img src={linked} alt="" className=" h-8 lg:h-auto" />
          <img src={faceB} alt="" className="mx-8 -8 lg:h-auto" />
          <img src={whats} alt="" className="-8 lg:h-auto" />
        </div>
      </div>
    </div>
  );
}
