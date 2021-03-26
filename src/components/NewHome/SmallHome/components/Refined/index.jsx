import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import BusinessPlanning from '../../../../../assets/img/BusinessPlanning.png';
import GoToMarketPlanning from '../../../../../assets/img/GoToMarketPlanning.png';
import FinancialModeling from '../../../../../assets/img/FinancialModeling.png';
import CompetitorBenchmarking from '../../../../../assets/img/CompetitorBenchmarking.png';
import TechProductBenchmarking from '../../../../../assets/img/TechProductBenchmarking.png';

export default function index() {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-8 lg:pb-0 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex-1 lg:flex justify-center">
          <p className="lg:text-4xl text-lg text-center lg:text-left font-bold">
            Functional Areas
          </p>
        </div>
      </div>
      <Link to="/business-planning">
        <div style={{ backgroundColor: "#fff" }} className="flex lg:py-8 py-8 lg:px-16 px-8 justify-start refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
          <div className="flex  lg:flex lg:justify-start">
            <LazyLoadImage
              alt={BusinessPlanning}
              effect="blur"
              className=" lg:flex bussinessImg flex-initial"
              src={BusinessPlanning}
            />
          </div>
          <div className="flex-1 ml-32">
            <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
              Business Planning
            </p>
            <p className="font-medium text-base lg:text-xl lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-10 font-thin">
              A presentation describing the nature of the business,
              the sales and marketing strategy, and an excel model
              giving the financial background, and containing a projected
              profit and loss statement.
          </p>
          </div>
        </div>
      </Link>

      <Link to="/finance-modeling">
        <div style={{ backgroundColor: "#fff" }} className="flex lg:py-1 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-5 xl:mt-5 mt-5 items-center">
          <div className="flex-1 mr-32">
            <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
              Financial Modeling
            </p>
              <p className="font-medium text-base lg:text-xl  lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-10 font-thin">
                A summary of a company’s expenses and earnings
                in the form of a spreadsheet  can be used to
                calculate the impact of a future event or decision.
            </p>
          </div>
          <div className="flex  lg:flex  justify-end">
            <LazyLoadImage
              alt={FinancialModeling}
              effect="blur"
              className=" lg:flex bussinessImg flex-1"
              src={FinancialModeling}
            />
          </div>
        </div>
      </Link>

      <Link to="/go-to-market-strategy">
        <div style={{ backgroundColor: "#fff" }}
          className="flex lg:py-1 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-5 xl:mt-5 mt-5 mb-10 items-center">
          <div className="flex  lg:flex  justify-start">
            <LazyLoadImage
              alt={GoToMarketPlanning}
              effect="blur"
              className=" lg:flex bussinessImg flex-1"
              src={GoToMarketPlanning}
            />
          </div>
          <div className="flex-1 ml-32">
            <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
              Go-To-Market Planning
            </p>
            <p className="font-medium text-base lg:text-xl  lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-10 font-thin">
              A marketing plan that documents the goals, objectives,
              research, costs, strategies, and action needed to drive
              business for the overall company.
          </p>
          </div>
        </div>
      </Link>
    </>
  );
}
