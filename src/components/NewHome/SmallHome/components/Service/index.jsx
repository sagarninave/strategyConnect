import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import marketplaceexperts from '../../../../../assets/img/MarketplaceExperts.png';
import productservice from '../../../../../assets/img/ProductService.png';
import gift3 from '../../../../../assets/img/gift3.gif';

export default function Service() {

  const [publicCard, setPublicCard] = useState(false);
  const [marketCard, setMarketCard] = useState(false);

  const setPublic = () => {
    if(publicCard === true){
      setPublicCard(false);
    }
    else{
      setPublicCard(true);
      setMarketCard(false);
    }
  }

  const setMarket = () => {
    if(marketCard === true){
      setMarketCard(false);
    }
    else{
      setPublicCard(false);
      setMarketCard(true);
    }
  }

  return (
    <>
      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-8 lg:pb-0 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex-1 lg:flex justify-center">
          <p className="mobileFunctionalAreaHeading lg:text-4xl text-lg text-center lg:text-left font-bold">
          Services
          </p>
        </div>
      </div>
      
      <div style={{ backgroundColor: "#fff"}} 
        className="borderhover flex justify-between w:9/12 refined-bg mt-10 lg:mt-0 xl:mt-0 lg:pt-4 px-8 lg:px-32 ">
        <div 
          className="flip-card showInDesktop flex-1 minHeightBussiness p-5 mr-5 rounded-md cursor-pointer service-panel">
          <div style={{ backgroundColor: "#E8F2FA", height: '100%' }}
            className="flip-card-inner flex-1  lg:flex rounded-md justify-center">
            <div className="flip-card-front flex-1 text-center text-center item-center mt-32">
              <LazyLoadImage
                alt={productservice}
                effect="blur"
                style={{ weight: '132px', height: '142px', flexGrow: 1 }}
                className=" lg:flex h-96 flex-1"
                src={productservice}
              />
              <p className="mt-2 text-base text-3xl font-semibold">
                Product Services
              </p>
            </div>
            <div className="service-text flip-card-back font-medium text-base text-center p-4 xl:p-8">
              <p className="my-2 mt-2 pb-2 font-semibold">
                Projects are done in a faster and cheaper manner where on-demand teams of 
                consultants are assigned to each project.
              </p>
              <hr style={{border:'1px solid #D7D5E8', width:"70%", margin:'auto'}}/>
              <p className="my-2 mt-3 pb-2 text-center font-semibold">
                How can people buy the service:  <br/>
                <span className="font-medium text-justify">
                  Clients do request  a call on the website and SC will develop a proposal for them
                </span> 
              </p>
              <hr style={{border:'1px solid #D7D5E8', width:"70%", margin:'auto'}}/>
              <p className="my-2 mt-3 text-center font-semibold">
                How do customers use the service: <br/>
                <span className="font-medium text-justify">
                  At the end of the engagement, customers will receive the studies in the form of 
                  PowerPoint, word doc, or excel documents.
                </span> 
              </p>
            </div>
          </div>
        </div>

        <div 
          className="float-left showInDesktop flip-card flex-1 p-5 ml-5 minHeightBussiness rounded-md cursor-pointer service-panel">
          <div style={{ backgroundColor: "#E8F2FA", height: '100%' }}
            className="flip-card-inner flex-1  lg:flex rounded-md justify-center">
            <div className="flip-card-front flex-1 text-center text-center item-center mt-32">
              <LazyLoadImage
                alt={marketplaceexperts}
                effect="blur"
                style={{ weight: '132px', height: '142px', flexGrow: 1 }}
                className=" lg:flex h-96 flex-1"
                src={marketplaceexperts}
              />
              <p className="mt-2 text-base text-3xl font-semibold">
                Marketplace Experts
              </p>
            </div>
            <div className="service-text flip-card-back font-medium text-base text-center p-4 xl:p-8">
              <p className="my-2 mt-2 font-semibold">
                On-demand calls billed on an hourly basis
              </p>
              <hr style={{border:'1px solid #D7D5E8', width:"70%", margin:'auto'}}/>
              <p className="my-2 mt-2 text-center font-semibold">
                How can people buy the service: <br/>
                <span className="font-medium text-justify">
                Users pay a subscription fee  get full access to the consultants so that they can
                book with them.
                </span> 
              </p>
              <hr style={{border:'1px solid #D7D5E8', width:"70%", margin:'auto'}}/>
              <p className="my-2 mt-2 text-center font-semibold">
                <span className="font-medium text-justify">
                  Users pay an hourly rate fee to when doing a call with consultants.
                </span> 
              </p>
              <hr style={{border:'1px solid #D7D5E8', width:"70%", margin:'auto'}}/>
              <p className="my-2 mt-2 text-center font-semibold">
                How do customers use the service: <br/>
                <span className="font-medium text-justify">
                  They get an account with access to the database of consultants
                </span> 
              </p>
              <hr style={{border:'1px solid #D7D5E8', width:"70%", margin:'auto'}}/>
              <p className="my-2 mt-2 text-center font-semibold">
                <span className="font-medium text-justify">
                  Customers can book a call and pay for it using the website.
                </span> 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile  */}
      <div style={{ backgroundColor: "#fff", padding: "0px 40px" }}
        className="flex justify-between w:7/12 refined-bg my-5">
        <div className="showInMobile flex-1 minHeightBussiness p-5 mr-5 rounded-md cursor-pointer service-panel">
          <div style={{ backgroundColor: "#E8F2FA", height: '100%' }}
              className="flex-1 lg:flex rounded-md"
              onClick={() => setPublic()}
            >
            <div className="alignServiceItem flex-1 text-center item-center">
              <LazyLoadImage
                alt={productservice}
                effect="blur"
                style={{ weight: '40px', height: '53px', flexGrow: 1 }}
                className=" lg:flex h-1/5 flex-1"
                src={productservice}
              />
              <p className="serviceHeading text-base text-center font-semibold">
                Product Services
              </p>
            </div>
          </div>
        </div>

        <div className="showInMobile float-left flex-1 p-5 ml-5 minHeightBussiness rounded-md cursor-pointer service-panel">
          <div style={{ backgroundColor: "#E8F2FA", height: '100%' }}
            className="flex-1 lg:flex rounded-md justify-center"
            onClick={() => setMarket()}>
            <div className="alignServiceItem flex-1 text-center item-center">
              <LazyLoadImage
                alt={marketplaceexperts}
                effect="blur"
                style={{ weight: '40px', height: '53px', flexGrow: 1 }}
                className=" lg:flex h-1/5 flex-1"
                src={marketplaceexperts}
              />
              <p className="serviceHeading text-base text-center font-semibold">
                Marketplace Experts
              </p>
            </div>
          </div>
        </div>
      </div>

    {
      publicCard ? 
      <div className="showInMobile mobileServiceData w-10/12 mx-auto font-medium text-center p-8"
        style={{ backgroundColor: "#E8F2FA" }}>
        <p className="my-2 mt-2 font-semibold" style={{ fontSize: "0.9rem", textAlign:"center" }}>
          Projects are done in a faster and cheaper manner where on-demand teams of
          consultants are assigned to each project.              
        </p>
        <hr style={{ border: '1px solid #D7D5E8', width: "100%", margin: 'auto' }} />
        <p className="my-2 mt-2 font-semibold" style={{ fontSize: "0.9rem"}}>
          How can people buy the service:  <br />
          <span className="font-medium" style={{textAlign:"justify"}}>
            Clients do request  a call on the website and SC will develop a proposal for them
          </span>
        </p>
        <hr style={{ border: '1px solid #D7D5E8', width: "100%", margin: 'auto' }} />

        <hr style={{ border: '1px solid #D7D5E8', width: "100%", margin: 'auto' }} />
        <p className="my-2 mt-2 font-semibold" style={{ fontSize: "0.9rem", textAlign:"center"}}>
          How do customers use the service: <br />
          <span className="font-medium"  style={{textAlign:"justify"}}>
            At the end of the engagement, customers will receive the studies in the form of
            PowerPoint, word doc, or excel documents.                
          </span>
        </p>
      </div> : null
    }

    {
      marketCard ?
      <div className="showInMobile mobileServiceData w-10/12 mx-auto font-medium text-center p-8"
        style={{ backgroundColor: "#E8F2FA" }}>
        <p className="my-2 mt-2 font-semibold" style={{ fontSize: "0.9rem" }}>
          On-demand calls billed on an hourly basis
              </p>
        <hr style={{ border: '1px solid #D7D5E8', width: "100%", margin: 'auto' }} />
        <p className="my-2 mt-2 font-semibold" style={{ fontSize: "0.9rem" }}>
          How can people buy the service: <br />
          <span className="font-medium">
            Users pay a subscription fee  get full access to the consultants so that they can
            book with them.
                </span>
        </p>
        <hr style={{ border: '1px solid #D7D5E8', width: "100%", margin: 'auto' }} />
        <p className="my-2 mt-2 font-semibold" style={{ fontSize: "0.9rem" }}>
          <span className="font-medium">
            Users pay an hourly rate fee to when doing a call with consultants.
                </span>
        </p>
        <hr style={{ border: '1px solid #D7D5E8', width: "100%", margin: 'auto' }} />
        <p className="my-2 mt-2 font-semibold" style={{ fontSize: "0.9rem" }}>
          How do customers use the service: <br />
          <span className="font-medium">
            They get an account with access to the database of consultants
                </span>
        </p>
        <hr style={{ border: '1px solid #D7D5E8', width: "100%", margin: 'auto' }} />
        <p className="my-2 mt-2 font-semibold" style={{ fontSize: "0.9rem" }}>
          <span className="font-medium">
            Customers can book a call and pay for it using the website.
          </span>
        </p>
      </div> : null
    }
      <div>
        <img className="giff" src={gift3} alt="GIf" />
      </div>
    </>
  );
}
