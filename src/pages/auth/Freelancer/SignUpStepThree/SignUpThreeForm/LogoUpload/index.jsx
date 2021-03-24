import React, { useState } from 'react';

export default function LogoUpload({
  logo,
  hiddenFileInput,
  handleClick,
  handleChange,
}) {
  const [logoActive, setLogoActive] = useState(false);
  return (
    <div
      style={{ paddingTop: 12, paddingBottom: 12 }}
      className={`flex items-center justify-between mt-6 relative cursor-pointer ${
        logoActive ? 'active' : 'inactive'
      }-textInput`}
    >
      <img
        src={logo}
        alt=""
        className="rounded"
        style={{ height: 48, width: 48 }}
      />

      <p
        className="bg-white border cursor-pointer hover:bg-indigo-900 text-indigo-800 hover:text-white rounded text-sm"
        onClick={() => {
          handleClick();
          setLogoActive(true);
        }}
        style={{
          borderColor: '#38369A',
          padding: '7px 8px',
        }}
      >
        Change logo
      </p>
      <input
        type="file"
        ref={hiddenFileInput}
        id="actual-btn"
        onChange={handleChange}
        hidden
      />
    </div>
  );
}
