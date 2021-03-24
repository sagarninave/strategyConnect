import React, { useState, useEffect } from 'react';
import mail from '../../../assets/img/envelope.svg';
import location from '../../../assets/img/homeloc.svg';
import phone from '../../../assets/img/phone-loc.svg';

const items = [
  {
    img: mail,
    boldText: 'Email ID',
    smallText: 'info@strategyconnect.com',
  },
  {
    img: location,
    boldText: 'Address',
    smallText:
      '8th Floor, #145 The Offices 4, One Central Dubai World Trade Center, Dubai, UAE.',
    smallText2: '8 The Greens, Dover, Delaware 19901, USA.',
  },
  {
    img: phone,
    boldText: 'Phone Number',
    smallText: '+971 527344538',
  },
];

function Address() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div className="purple_bl lg:py-14 py-10 xl:px-32 px-4 flex lg:flex-row flex-col items-center justify-between">
      {items.map((item, i) => {
        return (
          <div
            key={i}
            style={{ top: i == 1 && dimensions.width > 1024 ? 17 : 0 }}
            className={`flex lg:flex-col relative flex-row w-full lg:items-center`}
          >
            <img
              src={item.img}
              loading="lazy"
              alt="mail"
              className="lg:mr-0 mr-4 h-6 md:h-auto relative top-5 md:top-0"
            />
            <div>
              <p className="text-base mt-4 lg:text-center ">{item.boldText}</p>
              <p className="text-sm grey-text mt-2 md:text-center ">
                {item.smallText}
              </p>
              <p className="text-sm grey-text mt-2 md:text-center ">
                {item.smallText2}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Address;
