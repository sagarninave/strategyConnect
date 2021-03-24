import React, { useState } from 'react';
import downArrow from '../../../../../../assets/img/textArrDown.svg';
import DatePicker from 'react-date-picker';
import upArrow from '../../../../../../assets/img/textUpArrow.svg';

export default function CustomDatePicker({
  title,
  width,
  returnedValue,
  placeholder,
}) {
  const [dateActive, setDateActive] = useState(false);
  const [arrowToggle, setArrowToggle] = useState(false);
  const [value, onChange] = useState(new Date());
  return (
    <div className="mt-3 w-full lg:w-auto">
      <p className="text-sm" style={{ color: '#707376' }}>
        {title}
      </p>
      <div
        style={{ paddingLeft: 10, paddingRight: 10 }}
        onClick={() => {
          setDateActive(true);
          setArrowToggle(!arrowToggle);
        }}
        className={`flex items-center justify-between mt-2 relative cursor-pointer ${
          dateActive ? 'active' : 'inactive'
        }-textInput ${width}`}
      >
        <p className="text-sm" style={{ color: '#707376' }}>
          {dateActive ? (
            <DatePicker
              onChange={(value) => {
                onChange(value);
                returnedValue(value);
              }}
              calendarIcon={null}
              clearIcon={null}
              value={value}
              isOpen={dateActive}
              calendarClassName="focus:outline-none outline-none border-none"
            />
          ) : (
            placeholder
          )}
        </p>
        <img src={arrowToggle ? upArrow : downArrow} alt="" className="" />
      </div>
    </div>
  );
}
