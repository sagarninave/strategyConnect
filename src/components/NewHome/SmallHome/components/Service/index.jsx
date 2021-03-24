import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import marketplaceexperts from '../../../../../assets/img/MarketplaceExperts.png';
import productservice from '../../../../../assets/img/ProductService.png';
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
        <div style={{ width: '511px', height: '507px', border: "1px solid #E8F2FA" }}
          className="flip-card flex-1 p-5 pr-4 mr-16 rounded-md cursor-pointer">
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
            <div className="flip-card-back font-medium text-lg text-center divide-y divide-teal-400 divide-y-8 p-2">
              <p className="my-2 mt-2 font-semibold">
                Projects are done in a faster and cheaper manner where on-demand teams of consultants are <br />
                assigned to each project.
              </p>
              <p className="my-2 mt-2">
                <span className="font-semibold">
                  How can people buy the service: 
                </span> <br />
                Clients do request for a call on the website and <br />
                SC will develop a proposal for them</p>
              <p className="my-2 mt-2">
                <span className="font-semibold">
                  How do customers use the service: 
                </span> <br />
                At the end of the engagement, customer will <br />
                receive the studies in the form of PowerPoint, <br />
                word doc or excel documents.</p>
            </div>
          </div>
        </div>

        <div style={{ width: '511px', height: '507px', border: "1px solid #E8F2FA" }}
          className="flip-card flex-1 p-5 pr-4 mr-16 rounded-md cursor-pointer">
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
            <div className="flip-card-back font-medium text-lg text-center divide-y divide-y-8 p-2">
              <p className="my-2 mt-2 font-semibold">
                On-demand calls billed on an hourly basis
              </p>
              <p className="my-2 mt-2">
                <span className="font-semibold">
                  How can people buy the service: 
                </span> <br />
                Users pay a subscription fee to get full access to <br/>
                the consultants so that they can book with them.
              </p>

              <p className="my-2 mt-2">
                Users pay an hourly rate fee to when doing a call <br/> with consultants.
              </p>

              <p className="my-2 mt-2">
                <span className="font-semibold">
                  How do customers use the service: 
                </span> <br />
                They get an account with access to the database <br/>
                of consultants
              </p>

              <p className="my-2 mt-2">
                Customers can book a call and pay for it using the <br/> website.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
