import React, { useState } from 'react';
import { useField } from 'formik';

export default function CustomDropdown({ ...props }) {
  const [meta] = useField(props);
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState(false);
  const [picked, setPicked] = useState(props.placeholder);
  return (
    <div
      style={{ padding: `${props.padding}` }}
      className={`flex items-center cursor-pointer relative  ${
        props.width
      } justify-between mt-6 relative ${
        !meta.error && active
          ? 'active'
          : clicked && meta.error
          ? 'error'
          : 'inactive'
      }-textInput`}
    >
      <p
        type="text"
        style={{ color: '#707376', opacity: 0.5 }}
        className="focus:outline-none"
        onClick={() => {
          setClicked(!clicked);
          if (props.placeholder !== picked) {
            setActive(true);
          }
        }}
        id={props.id}
      >
        {picked}
      </p>

      <img
        src={clicked ? props.upArrow : props.downArrow}
        alt="icon"
        className=""
      />
      <p
        style={{ color: meta.error ? 'red' : '#38369A' }}
        className="absolute bg-white -top-2 text-xs px-2 left-5"
      >
        {clicked && meta.error
          ? meta.error
          : active && !meta.error
          ? props.placeholder
          : null}
      </p>

      {clicked ? (
        <div
          className={`absolute bg-white overflow-y-scroll hideScroll h-28 z-50  shadow-lg rounded -bottom-24 border border-gray-300 w-72 lg:${
            props.dropdownContWidth ? props.dropdownContWidth : 'w-80'
          }`}
        >
          {props.items.map((item, i) => {
            return (
              <p
                onClick={() => {
                  setPicked(item.value);
                  setClicked(false);
                  props.onValueChange(item.value);
                  setActive(true);
                }}
                key={i + 'hdbnj'}
                className="w-full p-2 hover:bg-gray-100"
              >
                {item.value}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
