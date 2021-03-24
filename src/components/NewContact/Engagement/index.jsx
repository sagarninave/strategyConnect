import React from 'react';
import phone from '../../../assets/img/phone-white.svg';
import chat from '../../../assets/img/chat-white.svg';
import whats from '../../../assets/img/whatsWhite.svg';

function Engagement() {
  return (
    <div className="flex lg:flex-row flex-col lg:my-20 my-10 justify-between  xl:px-28">
      <div className="mx-auto lg:w-96">
        <p className="lg:text-2xl text-xl text-center font-semibold">Kickstart Engagement</p>
        <p className="text-sm grey-text mt-2 text-center">
          It takes less than a minute
        </p>
        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
            <img src={phone} loading="lazy" alt="phone-white" className="contactBtn" />
            <p className="relativeContact ">Phone Call</p>
          </button>
        </div>
        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
            <img src={chat} loading="lazy" alt="phone-white" className="contactBtn" />
            <p className="relativeContact ">Chat</p>
          </button>
        </div>
        
        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
            <img src={whats} loading="lazy" alt="phone-white" className="contactBtn" />
            <p className="relativeContact ">Whatsapp</p>
          </button>
        </div>
      </div>
      <div className="h-96 w-0.5 hidden lg:block bg-gray-100" />
      <div className="mx-auto flex  flex-col  padding_top_border lg:border-none px-8 lg:px-0 lg:mt-0  justify-center items-center">
        <p className="text-2xl text-center font-semibold">Send us a message</p>
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
        <div className="p-2 pl-2 mt-32 pt-0 rounded-md border-2 ml-16 mr-16" style={{ width: "11.4rem", margin: 'auto', marginTop: ' 25px' }}>
          <button type="submit" className="text-white purple lg:w-40 w-full flex items-center mt-2 mr-2 justify-between border-none focus:outline-none py-2 px-7 rounded px-5">
            <p className="relativeContact ">Let’s Connect</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Engagement;
