import React, { useState } from 'react';
import { useField } from 'formik';

export default function CustomTextInput({ ...props }) {
  const [field, meta] = useField(props);
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={`flex items-center justify-between right-text-box ${
        props.mt ? props.mt : 'mt-6'
      }   relative ${
        !meta.error && clicked
          ? 'active'
          : clicked && meta.error
          ? 'error'
          : 'inactive'
      }-textInput`}
    >
      <input
        style={{ color: '#38369A' }}
        onClick={() => {
          setClicked(true);
        }}
        className={`focus:outline-none ${!props.width ? '' : props.width}`}
        {...field}
        {...props}
      />
      <img
        src={
          clicked && meta.error
            ? props.errorIcon
            : clicked && !meta.error
            ? props.activeIcon
            : props.inactiveIcon
        }
        alt="icon"
        className={`${!props.activeIcon ? 'hidden' : ''}`}
      />
      <p
        style={{ color: meta.error ? 'red' : '#38369A' }}
        className="absolute bg-white -top-2 text-xs px-2 left-5"
      >
        {meta.touched && meta.error
          ? meta.error
          : clicked
          ? props.placeholder
          : null}
      </p>
    </div>
  );
}
