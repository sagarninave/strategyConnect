import React, { useState } from 'react';
import CustomDropdown from '../../../components/CustomDropdown';
import downArrow from '../../../../../assets/img/textArrDown.svg';
import upArrow from '../../../../../assets/img/textUpArrow.svg';
import edit from '../../../../../assets/img/edit.svg';
import trash from '../../../../../assets/img/trash.svg';

export default function LanguagesComponent({
  placeholder,
  languagesValues,
  fluencyValues,
  langArrayList,
  itemOnePlaceholder,
  itemTwoPlaceholder,
  showOneDrop,
}) {
  const [picked, setPicked] = useState(false);
  const [myJoinAs, setMyJoinAs] = useState('');
  const [fluent, setFluent] = useState('');
  //   const [langArrayList, setLangArrayList] = useState([]);

  const onSubmit = () => {
    //     setLangArrayList((previousData) => ({
    //       ...previousData,
    //       lang: myJoinAs,
    //       fluency: fluent,
    //     }));
    //     setPicked(true);
    //     langArrayList.push({ lang: myJoinAs, fluency: fluent });
    //     console.log({ langArrayList });
  };

  return (
    <div
      className={`relative ${picked ? 'active' : 'inactive'}-textInput mt-6 `}
    >
      <p style={{ color: '#707376' }}>{placeholder}</p>

      <div
        style={{
          marginTop: 16,
          borderTop: '1px solid rgba(10, 10, 10, 0.11)',
        }}
        className="flex flex-col lg:flex-row items-center pb-4 justify-between"
      >
        <CustomDropdown
          items={languagesValues}
          placeholder={itemOnePlaceholder}
          id="selectLanguage"
          width={showOneDrop ? 'w-full lg:mr-6' : `lg:w-40 w-full text-sm mr-2`}
          onValueChange={(val) => {
            setMyJoinAs(val);
            setPicked(true);
          }}
          padding="10px"
          downArrow={downArrow}
          upArrow={upArrow}
          dropdownContWidth="w-52"
        />
        {showOneDrop ? null : (
          <CustomDropdown
            items={fluencyValues}
            placeholder={itemTwoPlaceholder}
            id="fluency"
            width="lg:w-24 w-full text-sm mr-2"
            onValueChange={(val) => {
              setFluent(val);
              setPicked(true);
            }}
            padding="10px "
            downArrow={downArrow}
            upArrow={upArrow}
            dropdownContWidth="w-52"
          />
        )}

        <p
          onClick={onSubmit}
          className="text-white text-center w-full lg:w-auto cursor-pointer hover:bg-indigo-900 relative top-3 text-sm font-light rounded py-3 px-4 purple"
        >
          Save
        </p>
      </div>
      {/* list of languages */}
      <div
        style={{
          borderTop: '1px solid rgba(10, 10, 10, 0.08)',
        }}
        className="lg:mt-2 mt-4 pb-2"
      >
        {langArrayList.map((item, index) => {
          return (
            <div
              key={index + 'dkcjnlmlk'}
              style={{ backgroundColor: 'rgba(177, 181, 185, 0.09)' }}
              className="flex items-center rounded justify-between mt-4 py-2 px-3"
            >
              <p
                className="text-sm w-full"
                style={{
                  color: '#0A0A0A',
                  borderRight: '0.6px solid #B1B5B9',
                }}
              >
                {item.lang} - {item.fluency}
              </p>
              <div className="flex items-center ml-4">
                <img src={edit} alt="edit" className="cursor-pointer" />
                <img src={trash} alt="delete" className="ml-2 cursor-pointer" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
