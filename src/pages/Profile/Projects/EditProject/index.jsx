import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import EllipsisText from 'react-ellipsis-text';
import close from '../../../../assets/img/cancel.svg';
import trash from '../../../../assets/img/delete.svg';
import edit from '../../../../assets/img/editP.png';

export default function EditProject(props) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  const bigHeight = (80 / 100) * dimensions.height;
  const smallHeight = dimensions.height;
  const project = [edit, edit, edit, edit];
  return (
    <Modal
      visible={props.visible}
      effect="fadeInUp"
      width={
        dimensions.width < 780
          ? '100%'
          : dimensions.width == 1200
          ? '45%'
          : dimensions.width == 1024
          ? '60%'
          : '40%'
      }
      onClickAway={() => props.setVisible(false)}
    >
      <div
        style={{ height: dimensions.width < 780 ? smallHeight : bigHeight }}
        className="rounded-lg bg-white "
      >
        <div
          style={{ borderBottom: '1px solid rgba(56, 54, 154,0.1)' }}
          className="flex items-center justify-between p-8"
        >
          <p className="text-xl">EDIT PROJECTS</p>
          <img
            src={close}
            alt=""
            onClick={() => {
              props.setVisible(false);
            }}
            className="cursor-pointer"
          />
        </div>

        <div className="px-8 mt-3  h-4/6 overflow-y-scroll hideScroll">
          {project.map((item, index) => {
            return (
              <div
                key={index + 'dkjndlkm'}
                className="pb-7 flex lg:flex-row flex-col item-center mt-7 justify-between"
                style={{
                  borderBottom:
                    index === project.length - 1
                      ? ''
                      : '1px solid rgba(56, 54, 154,0.1)',
                }}
              >
                <img
                  src={item}
                  alt=""
                  className="h-24 rounded lg:w-40 w-full"
                  loading="lazy"
                />
                <div className="flex items-center mt-8 lg:mt-0">
                  <p
                    style={{ borderRadius: 5 }}
                    className="border border-gray-300 self-center p-2 mr-4 lg:mr-12 lg:ml-7 w-64"
                  >
                    <EllipsisText
                      text={
                        'AI-Powered analytics and result No-Code Form Building UI and facing all the'
                      }
                      length={'70'}
                    />
                  </p>

                  <img
                    src={trash}
                    alt=""
                    className="cursor-pointer"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="px-10 py-5 flex justify-end"
          style={{ borderTop: '1px solid rgba(56, 54, 154,0.1)' }}
        >
          <button
            onClick={() => {
              props.setVisible(false);
            }}
            style={{ border: '1px solid #38369A', color: '#38369A' }}
            className="text-base rounded px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              props.setVisible(false);
            }}
            className="purple text-white px-4 py-2 ml-4 rounded text-base"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}
