import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import marketplaceexperts from '../../../../../assets/img/MarketplaceExperts.png';
import productservice from '../../../../../assets/img/ProductService.png';
import gift1 from '../../../../../assets/img/gift1.gif';
import gift2 from '../../../../../assets/img/gift2.gif';
import './service.css';

export default function index() {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-8 lg:pb-0 py-8 lg:pt-0 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex-1 lg:flex justify-center">
          <p className="lg:text-4xl text-lg text-center lg:text-left font-bold">
            Services
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: "#fff" }}
        className="borderhover flex lg:py-14 lg:pt-4 py-16 lg:px-32 px-8 justify-between refined-bg md:mt-10 xl:mt-0 mt-0 items-center">
        <div style={{ width: '511px', height: '507px'}}
          className="flip-card flex-1 p-5 pr-4 mr-16 rounded-md cursor-pointer service-panel">
          <div style={{ backgroundColor: "#E8F2FA", height: '100%' }}
            className="flip-card-inner flex-1 hidden lg:flex rounded-md justify-center">
            <div className="flip-card-front flex-1 text-center text-center item-center mt-32">
              <LazyLoadImage
                alt={productservice}
                effect="blur"
                style={{ weight: '132px', height: '142px', flexGrow: 1 }}
                className="hidden lg:flex h-96 flex-1"
                src={productservice}
              />
              <p className="mt-2 text-base text-3xl font-semibold">
                Product Services
              </p>
            </div>
            <div className="flip-card-back font-medium text-lg text-center p-4">
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

        <div style={{ width: '511px', height: '507px'}}
          className="flip-card flex-1 p-5 pr-4 mr-16 rounded-md cursor-pointer service-panel">
          <div style={{ backgroundColor: "#E8F2FA", height: '100%' }}
            className="flip-card-inner flex-1 hidden lg:flex rounded-md justify-center">
            <div className="flip-card-front flex-1 text-center text-center item-center mt-32">
              <LazyLoadImage
                alt={marketplaceexperts}
                effect="blur"
                style={{ weight: '132px', height: '142px', flexGrow: 1 }}
                className="hidden lg:flex h-96 flex-1"
                src={marketplaceexperts}
              />
              <p className="mt-2 text-base text-3xl font-semibold">
                Marketplace Experts
              </p>
            </div>
            <div className="flip-card-back font-medium text-lg text-center p-4">
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
                  Users pay an hourly rate fee to when doing a call <br/> with consultants.
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

      <div>
        <img className="giff" src={gift1} alt="GIf" />
      </div>
    </>
  );
}
