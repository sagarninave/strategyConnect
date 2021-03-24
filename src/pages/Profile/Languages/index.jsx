import React, { useState } from 'react';
import AddLanguage from './AddLanguage';
import EditLanguage from './EditLanguage';
import EmptyLanguage from './EmptyLanguage';

export default function Languages() {
  const [value, setValue] = useState(true);
  const [addLanguage, setAddLanguage] = useState(false);
  const [editLanguage, setEditLanguage] = useState(false);
  return (
    <div
      style={{ borderTop: '1px solid rgba(10, 10, 10,0.1)' }}
      className="flex flex-wrap items-center justify-between mt-5 lg:mt-10 pt-7 lg:pt-14"
    >
      <div
        className={`flex items-center w-full self-start lg:w-auto mb-7 lg:mb-0 justify-between`}
      >
        <p
          style={{ color: '#38369A' }}
          className="lg:text-lg self-start relative top-2 font-semibold text-base uppercase"
        >
          Languages
        </p>
        {/* small edit and add btn on small screen */}
        <div className="flex lg:hidden item-center">
          <button
            onClick={() => {
              setEditLanguage(true);
            }}
            className="border-indigo-800 border rounded text-indigo-800 px-3 "
          >
            Edit
          </button>
          <button
            onClick={() => {
              setAddLanguage(true);
            }}
            className="purple ml-4 rounded text-white font-bold text-3xl px-2 "
          >
            +
          </button>
        </div>
        {/* small edit and add btn on small screen */}
      </div>
      <div className="w-full lg:w-4/5">
        <div className="">
          <div
            className={` flex-wrap  items-center ${
              value ? 'flex' : 'hidden'
            } justify-between`}
          >
            <p
              style={{ color: '#3B3E41' }}
              className="text-lg font-semibold mb-2 lg:mb-0"
            ></p>
            <div className="lg:flex hidden items-center">
              <button
                onClick={() => {
                  setEditLanguage(true);
                }}
                style={{ border: '1px solid #38369A', color: '#38369A' }}
                className="text-base rounded px-4 py-2"
              >
                Edit Languages
              </button>
              <button
                onClick={() => {
                  setAddLanguage(true);
                }}
                className="purple text-white px-4 py-2 ml-4 rounded text-base"
              >
                Add Languages
              </button>
            </div>
          </div>
          {value ? (
            <div className="flex items-center mt-0 lg:mt-10 flex-wrap ">
              {/* project Card */}
              <p className="py-4 px-4 w-full mt-4 lg:mt-0 lg:w-auto mr-0 lg:mr-7 border rounded border-gray-200 text-gray-500 ">
                English - Intermediate
              </p>
              <p className="py-4 px-4 w-full mt-4 lg:mt-0 lg:w-auto mr-0 lg:mr-7  border rounded border-gray-200 text-gray-500 ">
                Hindi - Begginer
              </p>
              <p className="py-4 px-4 w-full mt-4 lg:mt-0 lg:w-auto mr-0 lg:mr-7  border rounded border-gray-200 text-gray-500 ">
                Telugu - Begginer
              </p>
              {/* project Card */}
            </div>
          ) : (
            <EmptyLanguage />
          )}
        </div>
      </div>

      <AddLanguage
        visible={addLanguage}
        setVisible={(val) => {
          setAddLanguage(val);
        }}
      />
      <EditLanguage
        visible={editLanguage}
        setVisible={(val) => {
          setEditLanguage(val);
        }}
      />
    </div>
  );
}
