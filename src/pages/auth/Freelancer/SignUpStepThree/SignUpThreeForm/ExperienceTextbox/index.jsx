import React from 'react';

export default function ExperienceTextBox() {
  return (
    <div
      className={`flex items-center justify-between mt-6 relative cursor-pointer ${'inactive'}-textInput`}
    >
      <p style={{ color: '#707376', opacity: 0.5 }}>
        Total years of experience
      </p>
      <p style={{ color: 'black', opacity: 0.3 }} className="font-bold text-xl">
        04
      </p>
    </div>
  );
}
