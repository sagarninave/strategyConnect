/* eslint-disable no-extend-native */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import img1 from '../../../../../assets/img/1.png';
import img3 from '../../../../../assets/img/3.png';
import img6 from '../../../../../assets/img/6.png';
import img7 from '../../../../../assets/img/7.png';
import img8 from '../../../../../assets/img/8.png';
import img9 from '../../../../../assets/img/9.png';
import img10 from '../../../../../assets/img/10.png';
import img12 from '../../../../../assets/img/12.png';
import img13 from '../../../../../assets/img/13.png';
import img14 from '../../../../../assets/img/14.png';
import img15 from '../../../../../assets/img/15.png';
import img16 from '../../../../../assets/img/16.png';
import img17 from '../../../../../assets/img/17.png';
import img18 from '../../../../../assets/img/18.png';
import img19 from '../../../../../assets/img/19.png';
import img20 from '../../../../../assets/img/20.png';
import fareye from '../../../../../assets/img/fareye.png';
import holiday from '../../../../../assets/img/holidayme.png';
import { Link } from 'react-router-dom';

import adidas from '../../../../../assets/img/adiddas.png';
import cresent from '../../../../../assets/img/cresent.png';
import sport360 from '../../../../../assets/img/sport360.png';
import saudiventurecapital from '../../../../../assets/img/saudiventurecapital.png';
import gate from '../../../../../assets/img/gate.png';


export default function index() {
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  const firstSet = [adidas, cresent, sport360, gate, saudiventurecapital];
  // const firstSet = [adidas, cresent, fareye, holiday, img12];
  const secondSet = [img13, img14, img15, img16, img17];
  const thirdSet = [img18, img19, img20, img1, img3];
  const fourthSet = [img6, img7, img8, img9, img10];
  const fifthSet = [img15, img7, img13, img1, img20];

  const randomNumber = [1, 2, 3, 4, 5];

  const one = firstSet.random();
  const two = secondSet.random();
  const three = thirdSet.random();
  const four = fourthSet.random();
  const five = fifthSet.random();

  const imgOne = () => {
    gsap.fromTo(
      '.slack',
      {
        y: 0,
      },
      {
        y: -50,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      '.slack',
      {
        y: 20,
      },
      {
        y: 0,
        duration: 2,
      }
    );
  };
  const imgTwo = () => {
    gsap.fromTo(
      '.second',
      {
        y: 0,
      },
      {
        y: -20,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      '.second',
      {
        y: 20,
      },
      {
        y: 0,
        duration: 2,
      }
    );
  };
  const imgThree = () => {
    gsap.fromTo(
      '.third',
      {
        y: 0,
      },
      {
        y: -20,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      '.third',
      {
        y: 20,
      },
      {
        y: 0,
        duration: 2,
      }
    );
  };
  const imgFour = () => {
    gsap.fromTo(
      '.fourth',
      {
        y: 0,
      },
      {
        y: -20,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      '.fourth',
      {
        y: 20,
      },
      {
        y: 0,
        duration: 2,
      }
    );
  };
  const imgFive = () => {
    gsap.fromTo(
      '.fifth',
      {
        y: 0,
      },
      {
        y: -20,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      '.fifth',
      {
        y: 20,
      },
      {
        y: 0,
        duration: 2,
      }
    );
  };

  const [myState, setState] = useState({
    number: null,
    imageOne: null,
    imageTwo: null,
    imageThree: null,
    imageFour: null,
    imageFive: null,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variaable to clear it

      const sureValue = randomNumber.random();
      setState({ number: sureValue });
      if (sureValue === 1) {
        imgOne();
        // setState({ ...myState, imageOne: firstSet.random() });
      } else if (sureValue === 2) {
        imgTwo();
        // setState({ ...myState, imageTwo: secondSet.random() });
      } else if (sureValue === 3) {
        imgThree();
        // setState({ ...myState, imageThree: thirdSet.random() });
      } else if (sureValue === 4) {
        imgFour();
        // setState({ ...myState, imageFour: fourthSet.random() });
      } else {
        imgFive();
        // setState({ ...myState, imageFive: fifthSet.random() });
      }
    }, 5000);

    return () => clearInterval(intervalId); //This is important
  }, []);

  return (
    <div className="mt-20 pb-20">
      <p className="text-center xl:text-4xl text-2xl font-bold">We Are Proud</p>
      <p className="font-semibold text-lg xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-4 text-center mt-6 font-thin">
        We are a trusted consulting service provider to around 150 clients from
        around the globe. Our clients range from startups and small business to
        corporations and governments.
      </p>

      <div className="xl:px-32 px-8 xl:mt-12 mt-8 mx-auto flex items-center flex-wrap justify-between">
        <Link to="/client">
          <img
            src={myState.number === 1 ? one : firstSet[0]}
            loading="lazy"
            alt="pick"
            className="h-6 slack mt-4 lg:mt-16 xl:h-10 "
          />
        </Link>
        <Link to="/client">
          <img
            src={myState.number === 2 ? two : secondSet[0]}
            loading="lazy"
            alt="pick"
            className="h-6 mt-4 second lg:mt-16 xl:h-10 "
          />
        </Link>
        <Link to="/client">
          <img
            src={myState.number === 3 ? three : thirdSet[0]}
            alt="pick"
            loading="lazy"
            className="h-6 mt-10 third lg:mt-16 xl:h-10 "
          />
        </Link>
        <Link to="/client">
          <img
            src={myState.number === 4 ? four : fourthSet[0]}
            alt="pick"
            loading="lazy"
            className="h-6 mt-10 fourth lg:mt-16 xl:h-10 "
          />
        </Link>
        <Link to="/client">
          <img
            src={myState.number === 5 ? five : fifthSet[0]}
            alt="pick"
            loading="lazy"
            className="h-6 mt-10 fifth lg:mt-16 xl:h-10"
          />
        </Link>
      </div>
    </div>
  );
}
