import React from 'react';

export default function index() {
  return (
    <div className=" sm:hidden flex flex-col mt-10 px-5 pb-8">
      <p className="text-base font-semibold text-center">
        Get the latest updates in your box
      </p>

      <p className="text-center grey-text text-sm mt-4">
        Stay up to date! Get all the lateset posts delivered staright to yous
        inbox.
      </p>

      <div className="w-11/12 justify-center mx-auto flex mt-8 ml-3.5 items-center">
        <input
          type="text"
          placeholder="Enter email address"
          className="focus:outline-none py-1.5 border border-gray-400 px-3 bg-white text-black font-thin text-base rounded"
        />
        <p className="py-2 px-4 ml-2 text-white purple rounded cursor-pointer text-sm">
          Subscribe
        </p>
      </div>

      <p className="grey-text text-xs text-left mt-2 ml-2  lg:ml-0 ">
        Don’t worry, we hate spam too
      </p>
    </div>
  );
}
