import React from 'react';

export default function ContinueFooter({ percentage, id }) {
  return (
    <div className="fixed bg-white w-full lg:w-2/5 footerBorder bottom-0 lg:py-5 py-3.5 px-5 lg:px-10 flex items-center justify-between">
      <div
        style={{ height: 83, width: `${percentage}%` }}
        className="absolute greenFooterBorder left-0"
      />
      <p className="text-base">
        Note: You can still update your profile later.
      </p>
      <button
        type="submit"
        form={id}
        className="p-2 rounded purple_re  text-white text-sm"
      >
        Continue
      </button>
    </div>
  );
}
