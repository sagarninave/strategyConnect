import React from 'react';
import pieInactive from '../../../assets/img/pieInactive.svg';
import { SRLWrapper } from 'simple-react-lightbox';
// import approach from '../../../assets/img/approach.png';
// import approach2 from '../../../assets/img/approach2.png';
import appOne from '../../../assets/img/appImgOne.png';
import appTwo from '../../../assets/img/appImgTwo.png';
import appThree from '../../../assets/img/appImgThree.png';
// import approach3 from '../../../assets/img/approach3.png';
import comment from '../../../assets/img/comment.svg';
import ReadMoreAndLess from 'react-read-more-less';

function Summary({
  aboutRef,
  overviewRef,
  impactRef,
  approachRef,
  challengeRef,
}) {
  // const images = [approach, approach2];

  return (
    <div className=" xl:w-8/12 md:w-8/12 w-full ">
      <div
        ref={overviewRef}
        id="overview"
        className="rounded flex lg:flex-row flex-col py-8 px-7 justify-between grey-background"
      >
        <p className="text-xl font-bold grey-text">Overview</p>
        <p className="text-sm leading-6 lg:w-10/12 w-full mt-2 lg:mt-0 font-thin grey-text">
          <ReadMoreAndLess
            className="purple_text text-base font-semibold ml-2 cursor-pointer"
            charLimit={250}
            readMoreText="Read more"
            readLessText="Read less"
          >
            The Moen Aromatherapy Handshowers are uniquely designed with the
            ability to infuse essential oils directly into the waterflow to
            create an incredible and sensory shower experience, when desired. An
            incredible shower every day; an aromatherapy Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Atque aliquam libero ipsam
            architecto magni dignissimos rerum voluptates, corrupti non magnam.
          </ReadMoreAndLess>
        </p>
      </div>

      <div
        ref={aboutRef}
        id="about"
        className="rounded flex lg:flex-row flex-col py-8 px-7 justify-between mt-5 grey-background"
      >
        <p className="text-xl font-bold grey-text">About</p>
        <p className="text-sm leading-6 lg:w-10/12 mt-2 lg:mt-0 w-full  font-thin grey-text">
          <ReadMoreAndLess
            className="purple_text text-base font-semibold ml-2 cursor-pointer"
            charLimit={250}
            readMoreText="Read more"
            readLessText="Read less"
          >
            he numbers are in. Digital products with great user experience far
            outperform those without. That is why successful tech startups are
            investing in top-notch user interfaces.The Moen Aromatherapy
            Handshowers are uniquely designed with the ability to infuse
            essential oils directly into the waterflow to create ipsum dolor sit
            amet consectetur adipisicing elit. Atque aliquam libero ipsam
            architecto magni dignissimos rerum voluptates, corrupti non magnam.
          </ReadMoreAndLess>
        </p>
      </div>

      <div
        ref={challengeRef}
        id="challenge"
        className="rounded flex lg:flex-row flex-col py-8 px-7 mt-5 grey-background"
      >
        <p className="text-xl font-bold grey-text">Challenges</p>
        <div className=" lg:ml-16 ml-0 mt-4 lg:mt-0">
          <ul>
            <li className="flex">
              <img
                src={pieInactive}
                loading="lazy"
                alt="pieInactive"
                className="mr-4 relative lg:-top-2 -top-8"
              />
              <p className="text-sm leading-6 font-thin grey-text">
                The numbers are in. Digital products with great user experience
                far outperform those without.
              </p>
            </li>

            <li className="flex mt-4">
              <img
                src={pieInactive}
                loading="lazy"
                alt="pieInactive"
                className="mr-4 relative lg:-top-2 -top-8"
              />
              <p className="text-sm leading-6 font-thin grey-text">
                The Moen Aromatherapy Handshowers are uniquely designed to
                create an incredible and sensory shower experience
              </p>
            </li>

            <li className="flex mt-4">
              <img
                src={pieInactive}
                loading="lazy"
                alt="pieInactive"
                className="mr-4 relative lg:-top-2 -top-8"
              />
              <p className="text-sm leading-6 font-thin grey-text">
                The numbers are in Digital products with great user experience
                far outperform those without.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={approachRef}
        id="approach"
        className="rounded flex flex-col lg:flex-row py-8 px-7 mt-5 grey-background"
      >
        <p className="text-xl font-bold grey-text">Approach</p>
        <div className=" lg:ml-16 ml-0 mt-4 lg:mt-0">
          <p className="text-sm leading-6 font-thin grey-text">
            The numbers are in. Digital products with great user experience far
            out perform those without. That is why successful tech startups are
            investing in top-notch user interfaces.
          </p>
          {/* {images.map((items, i) => {
            return (
              <div
                key={i}
                className="rounded p-2 border-gray-300 border flex lg:flex-row flex-col bg-white mt-4 items-center"
              >
                <img
                  src={items}
                  loading="lazy"
                  alt="approach"
                  className="lg:h-24 h-28 lg:mr-4 w-full lg:w-auto"
                />
                <p className="text-sm lg:leading-6 mt-4 font-thin grey-text">
                  The Moen Aromatherapy Handshowers are uniquely designed to
                  create an incredible and sensory shower experience. The
                  numbers are in Digital products with great user experience far
                  outperform those without. projects move fast and involve
                  rapid-prototyping.
                </p>
              </div>
            );
          })} */}

          <div className=" mt-7">
            <SRLWrapper>
              <a href={`${appOne}`}>
                <img
                  src={appOne}
                  alt=""
                  loading="lazy"
                  className="h-56 w-full bg-white  p-2 border rounded border-gray-200"
                />
              </a>
              <div className="flex lg:flex-row flex-col items-center justify-between mt-3">
                <a
                  href={`${appTwo}`}
                  className="h-52 w-full lg:w-2/5 p-2 bg-white  border rounded border-gray-200"
                >
                  <img src={appTwo} alt="" className="h-48" loading="lazy" />
                </a>

                <a
                  href={`${appThree}`}
                  className="h-52 w-full mt-3 lg:mt-0 lg:w-3/5 lg:ml-3 p-2 bg-white  border rounded border-gray-200"
                >
                  <img
                    src={appThree}
                    alt=""
                    className="lg:mt-0"
                    loading="lazy"
                  />
                </a>
              </div>
            </SRLWrapper>
          </div>

          <p className="text-sm leading-6 font-thin mt-4 grey-text">
            The Moen Aromatherapy Handshowers are uniquely designed to create an
            incredible and sensory shower experience. The numbers are in the
            Digital products with great user experience far outperform those
            without. user experience in the far outperform those without.
          </p>
          <p className="text-sm lg:leading-6 mt-4 font-thin grey-text">
            The Moen Aromatherapy Handshowers are uniquely designed to create an
            incredible and sensory shower experience. The numbers are in Digital
            products with great user experience far outperform those without.
            projects move fast and involve rapid-prototyping.
          </p>

          {/* <div className="rounded p-2 border-gray-300 border flex lg:flex-row flex-col  bg-white mt-4 items-center">
            <img
              src={approach3}
              loading="lazy"
              alt="approach"
              className="lg:h-24 h-28 lg:mr-4 w-full lg:w-auto"
            />
            <p className="text-sm lg:leading-6 mt-4 font-thin grey-text">
            The Moen Aromatherapy Handshowers are uniquely designed to create an
            incredible and sensory shower experience. The numbers are in Digital
            products with great user experience far outperform those without.
            projects move fast and involve rapid-prototyping.
          </p>
          </div> */}
        </div>
      </div>

      <div className="px-7" ref={impactRef} id="impact">
        <img
          src={comment}
          loading="lazy"
          alt="commet"
          className="mx-auto mt-10"
        />
        <p className="grey-text text-center mt-4 font-thin lg:text-xl text-sm lg:leading-8">
          StrategyConnect consultants were thorough and committed. I was amazed
          to see the value that was added vs. the cost that was charged to us.
          Highly recommend this new way of engaging star consultants!
        </p>
        <p className=" mt-8 text-center purple_text lg:text-xl text-sm">
          Ertugrul Akbulut
        </p>
        <p className="grey-text text-center my-2 font-thin lg:text-xl text-sm">
          Ex-Ecom Business Head of Ecommerce Operations
        </p>
      </div>

      <div className="rounded flex lg:flex-row flex-col  py-8 px-7 mt-8 grey-background">
        <p className="text-xl font-bold grey-text">Impact</p>
        <div className=" lg:ml-16 ml-0 mt-4 lg:mt-0">
          <ul>
            <li className="flex">
              <img
                src={pieInactive}
                loading="lazy"
                alt="pieInactive"
                className="mr-4 relative lg:-top-2 -top-8"
              />
              <p className="text-sm leading-6 font-thin grey-text">
                The numbers are in. Digital products with great user experience
                far outperform those without.
              </p>
            </li>

            <li className="flex mt-4">
              <img
                src={pieInactive}
                loading="lazy"
                alt="pieInactive"
                className="mr-4 relative -top-2"
              />
              <p className="text-sm leading-6 font-thin grey-text">
                The Moen Aromatherapy Handshowers are uniquely designed to
                create an incredible and sensory shower experience
              </p>
            </li>

            <li className="flex mt-4">
              <img
                src={pieInactive}
                loading="lazy"
                alt="pieInactive"
                className="mr-4 relative -top-2"
              />
              <p className="text-sm leading-6 font-thin grey-text">
                The numbers are in Digital products with great user experience
                far outperform those without.
              </p>
            </li>

            <li className="flex mt-4">
              <img
                src={pieInactive}
                loading="lazy"
                alt="pieInactive"
                className="mr-4 relative -top-2"
              />
              <p className="text-sm leading-6 font-thin grey-text">
                The numbers are in Digital products with great user.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Summary;
