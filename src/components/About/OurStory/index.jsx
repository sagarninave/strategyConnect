import React from 'react';
import men from '../../../assets/img/smen.png';
import boxes from '../../../assets/img/tboxOne.png';
import box from '../../../assets/img/boxOne.png';
import boys from '../../../assets/img/g-boy.png';

function index() {
  return (
    <div className="xl:pt-16 py-7 our-light-bg lg:mt-24 mt-10   lg:pl-24 pl-4 pr-0 lg:pr-4">
      <p className="text-sm uppercase grey-text">Our Story</p>
      <p className="lg:text-4xl text-xl lg:mt-3 font-bold">
        How we started and grown big
      </p>
      <div className="flex item-center  mt-16 lg:mt-20">
        <img
          src={men}
          loading="lazy"
          alt=""
          className=" lg:h-64 h-20 w-44 lg:w-6/12 rounded-lg"
        />
        <img
          src={boxes}
          loading="lazy"
          alt=""
          className=" lg:h-96 h-28 lg:ml-5 ml-2.5 relative lg:-top-32 -top-9"
        />
      </div>

      {/* div for bottom flex under box image */}
      <div className="flex item-center relative lg:mt-5 lg:-top-32  mr-1.5 lg:mr-0 -top-6">
        <div
          className="flex justify-between lg:mr-5   lg:w-6/12 w-44"
          // style={{ width: 532 }}
        >
          <p className="text-sm grey-text leading-7 w-6/12 hidden lg:flex">
            The numbers are in. Digital products with great user experience far
            out perform those without. That is why successful tech startups are
            investing in top-notch user interfaces. Digital products with great
            user experience far out perform those without. That is why
            successful tech startups are investing.By partnering with, and
            learning from tech giants such as Tencent we can accelerate our
            vision to build a global digital payment network across all corners
            of the globe.
          </p>
          <div className="lg:hidden" />
          <img
            src={box}
            loading="lazy"
            alt="box"
            className="lg:h-44 h-14 lg:ml-8 justify-elf-end lg:mr-0"
          />
        </div>

        <img
          src={boys}
          loading="lazy"
          alt="boys"
          className="lg:h-72 h-20 ml-2.5 lg:ml-0"
        />
      </div>

      {/* div for bottom flex under box image */}

      <p className="lg:pr-24 relative lg:-top-32 lg:mt-11  text-sm lg:leading-7 pr-4 lg:pr-0 leading-6 grey-text">
        We’re supported by high profile investors who share our vision of
        high-speed, low-cost global payments for all. By partnering with, and
        learning from tech giants such as Tencent we can accelerate our vision
        to build a global digital payment network across all corners of the
        globe. We’re a passionate, creative, and data-driven team seeking to
        strengthen and inspire communities around the world. The numbers are in.
        Digital products with great user experience far out perform those
        without. That is why successful tech startups are investing in top-notch
        user interfaces.
      </p>

      <p className="lg:pr-24 hidden te:block text-sm lg:leading-7 relative lg:-top-32 pr-4 lg:pr-0   leading-6 grey-text mt-6">
        The Moen Aromatherapy Handshowers are uniquely designed to create an
        incredible and sensory shower experience. The numbers are in Digital
        products with great user experience far outperform those without.
        projects move fast and involve rapid-prototyping.
      </p>
    </div>
  );
}

export default index;
