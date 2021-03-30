/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import SmallHome from './SmallHome';

function NewHome() {
  useEffect(() => {
    document.title = 'StrategyConnect | NewHome';
    window.scrollTo(0, 0);
    console.log(navigator)
  }, []);

  return (
    <div>
      <SmallHome />
    </div>
  );
}

export default NewHome;
