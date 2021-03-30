import React, { useState, useEffect } from 'react';
import boys from '../../../assets/img/g-boy.png';
import shubham from '../../../assets/img/Shubham1.png';
import haninder from '../../../assets/img/Haninder1.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function OurStory() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    console.log(window.innerWidth,)

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div style={{ backgroundColor: "#F3F8FC" }} className="mt-5 py-5 lg:p-10">
      <p className="aboutstory1920 text-sm lg:text-lg pb-3 lg:pb-0 text-center uppercase black-text">Our Story</p>
      <div className="flex justify-between relative lg:mt-8 mx-auto">
        <div className="flex-1 justify-start pr-0 lg:w-6/12 w-44 hidden lg:block xl:block">
          <div style={{ backgroundColor: "#fff" }} className="rounded-md mr-20">
            <div style={{ borderColor: "#2EC4EA" }} className="rounded-md border-2 p-6 pb-0 imgRes">
              <LazyLoadImage
                alt={boys}
                effect="blur"
                src={boys}
                style={{ height: "auto" }}
                loading="lazy"
                alt="boys"
                className="h-full w-full lg:h-full h-20 ml-2.5 lg:ml-0 mb-4"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 pr-0 lg:w-6/12 w-44">
          <div className="rounded-md justify-between mx-4 lg:p-0">
            <p className="aboutstorypara1920 text-lg grey-text leading-7 w-full lg:flex text-justify">
              The idea for Strategy Connect germinated as a discussion between Haninder and Shubham when they
              discovered in their respective work environments that many organizations are suffering from issues
              around CRM implementations, Performace Marketing initiatives, Last Mile Logistics management. This
              was especially true for startups and  SMEs in the MENA region as they found it difficult to get
              matched with the right talent at affordable prices.
            </p>
          </div>
        </div>
      </div>

      <p className="aboutstorypara1920 aboutstoryparatwo1920 text-lg grey-text w-full text-justify px-4 py-4 lg:pt-5 lg:px-0 lg:leading-7">
        Shubham and Haninder got started with XXX company, helping them pair with the right team of professionals
        from outside the GCC based on their networks in India, Pakistan, Lebanon, and Egypt - highly experienced,
        top-quality talent assembled on-demand and customized for the project needs. It was a great success and
        they never looked back!
      </p>

      <p className="aboutstorypara1920 aboutstoryparathree1920 text-lg grey-text w-full text-justify px-4 pb-4 lg:pt-5 lg:px-0 lg:leading-7">
        Rapid growth ensued, with many more companies signing up for different project needs and different
        lengths of projects and team sizes. This prompted automation, procedural compliance, and reporting
        standardization at Strategy Connect.
      </p>

      <p className="aboutstory1920 text-sm lg:text-xl lg:mt:6 text-center uppercase black-text">FOUNDING TEAM</p>

      <div className="flex mobile justify-between relative lg:mt-8  mx-auto">
        <div className="flex-1 justify-start pr-0 lg:w-6/12 w-44">
          <div style={{ backgroundColor: "#fff" }}
            className="rounded-md mr-20">
            <div style={{ borderColor: "#2EC4EA", }}
              className="rounded-md border-2 p-6 imgRes">
              <img src={shubham} loading="lazy" alt="boys" className="h-full w-full lg:h-full" />
            </div>
            <p className="text-xl mt-6 text-center black-text">Shubham</p>
            <p className="aboutstorypara1920 text-lg grey-text p-4 px-8 leading-7 w-full lg:flex text-justify">
              Former VP (Operations) at Namshi.com, one of the biggest online Fashion Retailer
              in the MENA region, who led a team of 100 to build operations for Namshi
              spanning across UAE, KSA and the rest of GCC
                </p>
          </div>
        </div>
        <div className="flex-1 pr-0 lg:w-6/12 w-44">
          <div style={{ backgroundColor: "#fff", width: "", float: "right" }}
            className="rounded-md ml-20 justify-between">
            <div style={{ borderColor: "#2EC4EA", }}
              className="rounded-md border-2 p-6 imgRes">
              <img src={haninder} loading="lazy" alt="haninder" className="h-full w-full lg:h-full" />
            </div>
            <p className="text-xl mt-6 text-center black-text">Haninder</p>
            <p className="aboutstorypara1920 text-lg grey-text p-4 px-8 leading-7 w-full lg:flex text-justify">
              Former VP (Operations) at Namshi.com, one of the biggest online Fashion Retailer
              in the MENA region, who led a team of 100 to build operations for Namshi
              spanning across UAE, KSA and the rest of GCC
            </p>
          </div>
        </div>
      </div>

      {/* mobile */}
        {/* <div className="relative founder-mobile bg-white rounded-md w-9/12 mt-2 mb-4 pb-10 mx-auto">
          <div style={{ borderColor: "#2EC4EA" }} className="rounded-md border-2 p-6">
            <img src={shubham} loading="lazy" alt="boys" className="h-full w-full lg:h-full" />
          </div>
          <p className="text-md my-4 text-center font-semibold black-text">Shubham</p>
          <p className="text-sm grey-text leading-4 px-4 pb-5 w-full text-justify">
            Former VP (Operations) at Namshi.com, one of the biggest online Fashion Retailer
            in the MENA region, who led a team of 100 to build operations for Namshi
            spanning across UAE, KSA and the rest of GCC
        </p>
        </div>
        <div className="relative founder-mobile bg-white rounded-md w-9/12 mt-2 pb-10 mx-auto">
          <div style={{ borderColor: "#2EC4EA" }} className="rounded-md border-2 p-6">
            <img src={haninder} loading="lazy" alt="haninder" className="h-full w-full lg:h-full" />
          </div>
          <p className="text-md my-4 text-center font-semibold black-text">Haninder</p>
          <p className="text-sm grey-text leading-4 px-4 pb-5 w-full text-justify">
            Former VP (Operations) at Namshi.com, one of the biggest online Fashion Retailer
            in the MENA region, who led a team of 100 to build operations for Namshi
            spanning across UAE, KSA and the rest of GCC
          </p>
        </div> */}
    </div>
  );
}

export default OurStory;
