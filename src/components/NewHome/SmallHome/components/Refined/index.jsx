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

      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-8 py-8 lg:px-16 px-8 justify-start refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex hidden lg:flex lg:justify-start">
          <LazyLoadImage
            alt={BusinessPlanning}
            effect="blur"
            style={{ height: '15rem', flexGrow: 1 }}
            className="hidden lg:flex h-96 flex-initial"
            src={BusinessPlanning}
          />
        </div>

        <div className="flex-1 ml-32">
          <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
            <Link to="/businessPlanning"> Business Planning </Link>
          </p>
          <p className="font-medium text-base lg:text-xl lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-10 font-thin">
            A presentation describing the nature of the business,
            the sales and marketing strategy, and an excel model
            giving the financial background, and containing a projected
            profit and loss statement.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-1 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex-1 mr-32">
          <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
            <Link to="/goToMarketStrategy"> Go To Market Planning </Link>
          </p>
          <p className="font-medium text-base lg:text-xl  lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-10 font-thin">
            A marketing plan that documents the goals, objectives,
            research, costs, strategies, and action needed to drive
            business for the overall company.
          </p>
        </div>
        <div className="flex hidden lg:flex  justify-end">
          <LazyLoadImage
            alt={GoToMarketPlanning}
            effect="blur"
            style={{ height: '15rem', flexGrow: 1 }}
            className="hidden lg:flex h-96 flex-1"
            src={GoToMarketPlanning}
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-1 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex hidden lg:flex  justify-start">
          <LazyLoadImage
            alt={FinancialModeling}
            effect="blur"
            style={{ height: '15rem', flexGrow: 1 }}
            className="hidden lg:flex h-96 flex-1"
            src={FinancialModeling}
          />
        </div>

        <div className="flex-1 ml-32">
          <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
            <Link to="/financeModeling">Financial Modelling </Link>

          </p>
          <p className="font-medium text-base lg:text-xl  lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-10 font-thin">
            A summary of a company’s expenses and earnings
            in the form of a spreadsheet that can be used to
            calculate the impact of a future event or decision.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-1 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex-1 mr-32">
          <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
            Competitors Benchmarking
          </p>
          <p className="font-medium text-base lg:text-xl  lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-10 font-thin">
            Comparing your company against a number of
            competitors using a set collection of metrics
            (financial, operational or growth).
          </p>
        </div>
        <div className="flex hidden lg:flex  justify-end">
          <LazyLoadImage
            alt={CompetitorBenchmarking}
            effect="blur"
            style={{ height: '15rem', flexGrow: 1 }}
            className="hidden lg:flex h-96 flex-1"
            src={CompetitorBenchmarking}
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#fff" }} className="flex lg:py-8 py-8 lg:px-16 px-8 justify-between refined-bg md:mt-0 xl:mt-0 mt-0 items-center">
        <div className="flex hidden lg:flex justify-start">
          <LazyLoadImage
            alt={TechProductBenchmarking}
            effect="blur"
            style={{ height: '15rem', flexGrow: 1 }}
            className="hidden lg:flex h-96 flex-1"
            src={TechProductBenchmarking}
          />
        </div>
        <div className="flex-1 justify-start ml-32">
          <p className="lg:text-3xl text-lg text-center lg:text-left font-bold">
            Tech Product Benchmarking
          </p>
          <p className="font-medium text-base lg:text-xl lg:w-11/12 text-center lg:text-left mx-auto lg:mx-0 grey-text mt-10 font-thin">
            Measuring the performance of a company’s tech
            products, services, or processes against those of
            another business considered to be the best in the
            industry, aka “best in class.”
          </p>
        </div>
      </div>
    </>
  );
}
