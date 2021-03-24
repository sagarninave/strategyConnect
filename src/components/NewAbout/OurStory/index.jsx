import React from 'react';
import boys from '../../../assets/img/g-boy.png';
import shubham from '../../../assets/img/shubham1.jpg';
import haninder from '../../../assets/img/haninder1.jpg';

function index() {
  return (
    <div style={{ backgroundColor: "#F3F8FC" }}
      className="xl:pt-4 py-7 lg:mt-24 mt-10 mb-10 lg:p-10">
      <p className="text-xl text-center uppercase black-text">Our Story</p>

      <div className="flex item-center relative lg:mt-5 mr-1.5 lg:mr-0">
        <div style={{ borderColor: "#2EC4EA", width: "431px", height: "304px", overflow:"hidden" }} 
             className="rounded-md border-2 p-6 pb-10">
          <img src={boys} style={{height:"auto"}} loading="lazy" alt="boys" 
               className="h-full w-full lg:h-full h-20 ml-2.5 lg:ml-0 mb-4" />
        </div>
        <div className="flex justify-between ml-4 lg:ml-4 lg:w-6/12 w-44">
          <p className="text-lg grey-text leading-7 ml-20 w-full hidden lg:flex text-justify">
            The idea for Strategy Connect germinated as a discussion between Haninder and Shubham when they
            discovered in their respective work environments that many organizations are suffering from issues
            around CRM implementations, Performace Marketing intiatives, Last Mile Logistics management. This
            was especially true for startups and the SMEs in the MENA region as they found it difficult to get
            matched with the right talent at affordable prices.
          </p>
        </div>
      </div>

      <p className="text-lg lg:pr-24 relative lg:mt-11 lg:leading-7 pr-4 lg:pr-0 leading-6 grey-text text-justify">
        Shubham and Haninder got started with XXX company, helping them pair with right team of professionals
        from outside the GCC based on their networks in India, Pakistan, Lebanon and Egypt - highly experienced,
        top quality talent assembled on-demand and customized for the project needs. It was a great success and
        they never looked back!
      </p>

      <p className="lg:pr-24 te:block text-lg lg:leading-7 relative pr-4 lg:pr-0 leading-6 grey-text mt-6 text-justify">
        Rapid growth ensued, with many more companies signing up for different project needs and different
        length of projects and team sizes. This prompted automation, procedural compliance and reporting
        standardization at Strategy Connect.
      </p>

      <p className="text-xl mt-6 text-center uppercase black-text">FOUNDING TEAM</p>

      <div className="flex item-center relative lg:mt-5">
        <div style={{ backgroundColor: "#fff", width:"431px"}} className="rounded-md mr-20">
          <div style={{ borderColor: "#2EC4EA", width: "431px", height: "282px" }}
            className="rounded-md border-2 p-6">
            <img src={shubham} loading="lazy" alt="boys" className="h-full w-full lg:h-full" />
          </div>
          
          <p className="text-xl mt-6 text-center black-text">Shubham</p>

          <p className="text-lg grey-text  p-4 ml-4 leading-7 w-full lg:flex text-justify">
            Former VP (Operations) at Namshi.com, <br/>
            one of the biggest online Fashion Retailer <br/>
            in the MENA region, who led a team of <br/>
            100 to build operations for Namshi <br/>
            spanning across UAE, KSA and the rest of <br/> 
            GCC
          </p>
        </div>

        <div style={{ backgroundColor: "#fff", width:"431px", float:"left"}} className="rounded-md ml-20">
          <div style={{ borderColor: "#2EC4EA", width: "431px", height: "282px" }}
            className="rounded-md border-2 p-6">
            <img src={haninder} loading="lazy" alt="haninder" className="h-full w-full lg:h-full" />
          </div>

          <p className="text-xl mt-6 text-center black-text">Haninder</p>

          <p className="text-lg grey-text  p-4 ml-4 leading-7 w-full lg:flex text-justify">
            Former VP (Operations) at Namshi.com, <br/>
            one of the biggest online Fashion Retailer <br/>
            in the MENA region, who led a team of <br/>
            100 to build operations for Namshi <br/>
            spanning across UAE, KSA and the rest of<br/> 
            GCC
          </p>
        </div>
      </div>
    </div >
  );
}

export default index;
