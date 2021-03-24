import React from 'react';
import Switch from 'react-switch';

export default function CustomImageUpload({
  avater,
  handleClick,
  hiddenFileInput,
  handleChange,
  checked,
  setChecked,
  marginLess,
}) {
  return (
    <div
      style={{
        border: '1px solid #38369A',
        borderRadius: 5,
      }}
      className={`px-5 pt-4 pb-3 ${marginLess ? 'mt-4' : 'mt-16'} `}
    >
      <div className="flex flex-row items-center">
        <img
          src={avater}
          style={{ borderRadius: '50%' }}
          alt="avater"
          className="h-14 w-14"
        />

        <button
          onClick={handleClick}
          style={{ border: '0.8px solid #38369A', color: '#38369A' }}
          className="p-2 rounded  text-sm ml-2"
        >
          Change Image
        </button>
        <input
          type="file"
          ref={hiddenFileInput}
          id="actual-btn"
          onChange={handleChange}
          hidden
        />
      </div>

      <div
        className={`flex justify-between items-center mt-3 switch-wrap-${
          checked ? 'active' : 'inactive'
        }`}
      >
        <p className="text-base">{`Your profile picture is ${
          checked ? '' : 'not'
        } public`}</p>
        <Switch
          onChange={() => {
            setChecked(!checked);
          }}
          height={11.67}
          width={20}
          offHandleColor={'#B1B5B9'}
          onHandleColor={'#98BA12'}
          checkedIcon={false}
          uncheckedIcon={false}
          checked={checked}
        />
      </div>
    </div>
  );
}
