import React from 'react';
import phone from '../../../assets/img/phone-white.svg';
import chat from '../../../assets/img/chat-white.svg';
import whats from '../../../assets/img/whatsWhite.svg';

function Engagement() {
  return (
    <div className="flex lg:flex-row flex-col lg:my-20 my-10 justify-between  xl:px-28">
      <div className="mx-auto lg:w-96">
        <p className="lg:text-2xl text-xl text-center">Kickstart Engagement</p>
        <p className="text-sm grey-text mt-2 text-center">
          It takes less than a minute
        </p>

        <button className="text-white purple lg:w-48 w-full flex items-center mx-auto lg:mt-14 mt-8 justify-between border-none focus:outline-none py-2 rounded px-5">
          <img src={phone} loading="lazy" alt="phone-white" className="" />
          <p className="relative ">Phone Call</p>
          <p />
        </button>

        <button className="text-white purple lg:w-48 w-full flex items-center mx-auto mt-5 justify-between border-none focus:outline-none py-2 rounded px-5">
          <img src={chat} loading="lazy" alt="phone-white" className="" />
          <p className="relative">Chat</p>
          <p />
        </button>

        <button className="text-white purple lg:w-48 w-full flex items-center mx-auto mt-5 justify-between border-none focus:outline-none py-2 rounded px-5">
          <img src={whats} loading="lazy" alt="phone-white" className="" />
          <p className="relative">Whatsapp</p>
          <p />
        </button>
      </div>
      <div className="h-96 w-0.5 hidden lg:block bg-gray-100" />
      <div className="mx-auto flex  flex-col  padding_top_border lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
        <p className="text-2xl text-center">Send us a message</p>
        <p className="text-sm grey-text text-center mt-2">
          A member of our team will get back to you shortly.
        </p>

        <div className="flex items-center mt-14">
          <input
            type="text"
            className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
            placeholder="Name *"
          />
          <input
            type="text"
            className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
            placeholder="Organisation Name *"
          />
        </div>

        <div className="flex items-center mt-4">
          <input
            type="text"
            className="border focus:outline-none border-gray-300 py-2  lg:px-6 px-2 rounded w-2/4 mr-2 text-sm"
            placeholder="Email *"
          />
          <input
            type="text"
            className="border focus:outline-none border-gray-300 py-2 lg:px-6 px-2 rounded w-2/4 text-sm"
            placeholder="Phone Number *"
          />
        </div>

        <textarea
          className="border focus:outline-none border-gray-300 w-full py-2 lg:px-6 px-2 rounded mt-4 text-sm"
          placeholder="Message *"
          rows="5"
        />

        <button className="text-white purple w-48 text-center mt-5 border-none focus:outline-none py-2 rounded px-5">
          <p className="relative">Let’s Connect</p>
        </button>
      </div>
    </div>
  );
}

export default Engagement;
