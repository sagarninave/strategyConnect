import React from 'react';
import ExpertOne from '../../../assets/img/MarketExpert-1.png';
import ExpertTwo from '../../../assets/img/MarketExpert-2.png';
import ExpertThree from '../../../assets/img/MarketExpert-3.png';
import ExpertFour from '../../../assets/img/Expertslogo.png';
function index() {
  return (
    <>
      <div className="centerImages">
        <img src={ExpertOne} className="imagesOne items-end" alt="Expert"></img>
        <img src={ExpertTwo} className="imagesTwo" alt="Expert"></img>
        <img src={ExpertThree} className="imagesOne items-end" alt="Expert"></img>
      </div>
      <hr className="hr" />
      {/* Simple, transparent pricing */}

      <div className="pb-10 pt-14">
        <p className="text-center marketplace-heading xl:text-2xl text-2xl font-bold">
          Simple, transparent pricing
        </p>
        <p className="marketplace-subheading font-medium text-lg xl:w-10/12 w-11/12 mx-auto light_grey grey-text mt-2 text-center font-thin">
          No contracts. No surprise fees.
        </p>
        <img src={ExpertFour} className="imagesFour" alt="Expert"></img>
      </div>

      {/* Plan Cards */}
      <div className="pt-8 lg:flex lg:mb-0 mb-4 justify-between">

        {/* Plan Cards 1 */}
        <div className="flex flex-col mb-8 items-center content-center">
          <div className="boxAnalytics2 priceCardOne">
            <p className="marketplace-card-title text-lg md:text-2xl font-bold text-center leading-10" 
               style={{borderBottom: '1px solid #B1B5B9', 
               marginBottom: '15px', 
               padding: '9px 0px'
               }}
            > Plan - 1 </p>
            <ul>
              <li className="marketplace-card-title font14 text-center text-lg light_grey grey-text font-medium">  
                Get started for
              </li>
              <li className="font14 text-center font-semibold mt-4"> 
                <span>$</span>
                <span className="bigName">12</span>
              </li>
              <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16 mgTB10" 
                   style={{width:"11.4rem",margin: 'auto'}}>
                <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                  <p className="relative" style={{margin:'auto'}}>Make Enquiry</p> 
                </button>
              </div>
            </ul>
            <ul>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick"></span>
                  Self-Service Audit Document
                </p>
              </li>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick"></span>
                  One Hour Additional Legal Advice Credit
                </p>
              </li>
              <li className="font14">
                <p className="financeCardDesc light_grey grey-text">
                  <span className="tick"></span>
                  30-Minute Audit Review & Legal Advice
              </p>
              </li>
              <li className="font14">
                <p className="financeCardDesc light_grey grey-text">
                  <span className="tick"></span>
                  Training Video Access Include
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Plan Cards 2 */}
        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics2 text-white" style={{ background: '#38369a'}}>
            <p className="marketplace-card-title text-lg md:text-2xl font-bold text-center leading-10" 
              style={{borderBottom: '1px solid #B1B5B9', 
              marginBottom: '15px', 
              padding: '9px 0px'
              }}
            > Plan - 2 </p>            
            <ul>
              <li className="marketplace-card-title font14 text-center text-lg font-medium">
                Get started for
              </li>
              <li className="font14 text-center font-semibold mt-4">
                <span>$</span>
                <span className="bigName">24</span>
              </li>
              <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16 mgTB10" 
                  style={{width:"11.4rem",margin: 'auto'}}>
                <button type="submit" className="text-white whiteBg lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                  <p className="relative" style={{margin:'auto'}}>
                    Make Enquiry
                  </p> 
                </button>
              </div>
            </ul>
            <ul>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick activeCard"></span> Self-Service Audit Document
              </p></li>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick activeCard"></span>
                  One Hour Additional Legal Advice Credit
                </p>
              </li>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick activeCard"></span>
                  30-Minute Audit Review & Legal Advice
              </p>
              </li>
              <li className="font14">

              <p className="financeCardDesc light_grey grey-text">
                <span className="tick activeCard"></span>
                  Training Video Access Include
              </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Plan Cards 3 */}
        <div className="flex flex-col items-center content-center">
          <div className="boxAnalytics2">
            <p className="marketplace-card-title text-lg md:text-2xl font-bold leading-10" 
              style={{
                borderBottom: '1px solid #B1B5B9', 
                marginBottom: '15px', 
                padding: '9px 0px', 
                textAlign: 'center' 
              }}
            > Plan - 3</p>
            <ul>
              <li className="marketplace-card-title font14 text-center text-lg light_grey grey-text font-medium">  
                Get started for
              </li>
              <li className="font14 text-center font-semibold mt-4"> 
                <span>$</span>
                <span className="bigName">36</span>
              </li>
              <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16 mgTB10" 
                   style={{width:"11.4rem",margin: 'auto',}}>
                <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded">
                  <p className="relative" style={{margin:'auto'}}>
                    Make Enquiry
                  </p> 
                </button>
              </div>
            </ul>
            <ul>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick"></span> 
                  Self-Service Audit Document
                </p>
              </li>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick"></span>
                  One Hour Additional Legal Advice Credit
                </p>
              </li>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick"></span>
                  30-Minute Audit Review & Legal Advice
                </p>
              </li>
              <li className="font14">
                <p className="financeCardDesc">
                  <span className="tick"></span>
                  Training Video Access Include
                </p>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default index;
