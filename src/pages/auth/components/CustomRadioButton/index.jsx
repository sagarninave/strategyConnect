import React, { useState } from 'react';

export default function CustomRadioButton({ ...props }) {
  const [picked, setPicked] = useState(false);
  return (
    <div
      className={`relative ${picked ? 'active' : 'inactive'}-textInput mt-6 `}
    >
      <div className={`flex items-center justify-between `}>
        <p className="" style={{ color: picked ? '#38369A' : '#707376' }}>
          Are you an independent consultant?
        </p>
        <img
          src={picked ? props.activeIcon : props.inactiveIcon}
          alt="icon"
          className=""
        />
      </div>

      <div className="flex items-center mt-2">
        <span
          className="flex items-center cursor-pointer"
          onClick={() => {
            props.setActive(true);
            setPicked(true);
          }}
        >
          <div
            style={{
              height: 12,
              width: 12,
              border: '1px solid #38369A',
              borderRadius: '50%',
            }}
            className="flex justify-center items-center"
          >
            <div
              style={{
                height: 7,
                width: 7,
                backgroundColor: '#38369A',
                borderRadius: '50%',
                display: props.active ? 'block' : 'none',
              }}
            />
          </div>
          <p style={{ color: '#707376' }} className="ml-2">
            Yes
          </p>
        </span>

        <span
          className="flex items-center ml-4 cursor-pointer"
          onClick={() => {
            props.setActive(false);
            setPicked(true);
          }}
        >
          <div
            style={{
              height: 12,
              width: 12,
              border: '1px solid #38369A',
              borderRadius: '50%',
            }}
            className="flex justify-center items-center"
          >
            <div
              style={{
                height: 7,
                width: 7,
                backgroundColor: '#38369A',
                borderRadius: '50%',
                display: !props.active ? 'block' : 'none',
              }}
            />
          </div>
          <p style={{ color: '#707376' }} className="ml-2">
            No
          </p>
        </span>
      </div>
    </div>
  );
}
