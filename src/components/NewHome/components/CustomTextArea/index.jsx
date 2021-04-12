import React, { useState } from 'react';
import { useField } from 'formik';

export default function CustomTextArea({ ...props }) {
  const [field, meta] = useField(props);
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={`flex items-center justify-between mt-6 relative ${
        !meta.error && clicked
          ? 'active'
          : clicked && meta.error
          ? 'error'
          : 'inactive'
      }-textInput`}
    >
      <textarea
        style={{ color: '#38369A', height: 80 }}
        onClick={() => {
          setClicked(true);
        }}
        className="focus:outline-none w-full"
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
