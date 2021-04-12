import React, { useState } from 'react';
import EllipsisText from 'react-ellipsis-text';
import { useField } from 'formik';

export default function CustomFileUpload({ ...props }) {
  const [clicked, setClicked] = useState(false);
  const [meta] = useField(props);
  return (
    <div
      onClick={() => {
        props.handleClick();
        setClicked(true);
      }}
      className={`flex items-center justify-between mt-6 relative cursor-pointer ${
        clicked ? 'active' : 'inactive'
      }-textInput`}
    >
      <p style={{ color: '#707376' }}>
        <EllipsisText text={props.fileName} length={25} />
      </p>
      <img
        src={clicked ? props.activeIcon : props.inactiveIcon}
        alt="icon"
        className=""
      />
      <input
        type="file"
        ref={props.hiddenFileInput}
        id="actual-btn"
        onChange={props.handleChange}
        hidden
      />

      <p
        style={{ color: meta.error ? 'red' : '#38369A' }}
        className="absolute bg-white -top-2 text-xs px-2 left-5"
      >
        {clicked && meta.error
          ? meta.error
          : clicked && !meta.error
          ? props.placeholder
          : null}
      </p>
    </div>
  );
}
