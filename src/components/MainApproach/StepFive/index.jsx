import React, { useState } from 'react';
import LineFive from './LineFive';
import check from '../../../assets/img/app-yes.svg';
import KickStart from '../../Home/SmallHome/components/Navbar/KickStart';

export default function StepFive() {
  const [showKickstart, setShowKickstart] = useState(false);
  return (
    <div className="mb-24">
      <LineFive />
      <img src={check} alt="" className="mx-auto lg:mt-16 xl:mt-3 mt-16 h-12" />

      <h1 className="text-center lg:text-3xl text-lg font-bold mt-8">
        Project handoff successfully
      </h1>

      <p
        onClick={() => {
          setShowKickstart(true);
        }}
        className="mx-auto py-2 mt-10 text-center w-32 px-3 rounded purple text-white text-sm hover:bg-indigo-900 cursor-pointer"
      >
        Start a project
      </p>

      <div className={`${showKickstart ? 'block' : 'hidden'}`}>
        <KickStart visible={showKickstart} setVisible={setShowKickstart} />
      </div>
    </div>
  );
}
