import React, { useState } from 'react';
import EllipsisText from 'react-ellipsis-text';
import projOne from '../../../assets/img/projOne.webp';
import projTwo from '../../../assets/img/projTwo.webp';
import projThree from '../../../assets/img/projThree.webp';
import projFour from '../../../assets/img/projFour.webp';
import EmptyProjects from './EmptyProjects';
import EditProject from './EditProject';
import AddProject from './AddProject';

export default function Projects() {
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const projectImgArray = [projOne, projTwo, projThree, projFour];
  return (
    <div className="flex flex-wrap  items-center justify-between mt-5 lg:mt-10 pt-7 lg:pt-0">
      <div
        className={`flex items-center w-full ${
          projectImgArray.length === 0 ? '' : 'self-start'
        }  lg:w-auto mb-7 lg:mb-0 justify-between`}
      >
        <p
          style={{ color: '#38369A' }}
          className="lg:text-lg self-start relative top-2 lg:-top-1 font-semibold text-base uppercase"
        >
          PROJECTS
        </p>
        {/* small edit and add btn on small screen */}
        <div className="flex lg:hidden item-center">
          <button
            onClick={() => {
              setEditOpen(true);
            }}
            className="border-indigo-800 border rounded text-indigo-800 px-3 "
          >
            Edit
          </button>
          <button
            onClick={() => {
              setAddOpen(true);
            }}
            className="purple ml-4 rounded text-white font-bold text-3xl px-2 "
          >
            +
          </button>
        </div>
        {/* small edit and add btn on small screen */}
      </div>
      <div className="w-full lg:w-4/5">
        <div className="">
          <div className="flex flex-wrap  items-center justify-between">
            <p
              style={{ color: '#3B3E41' }}
              className="text-lg font-semibold mb-2 lg:mb-0"
            ></p>
            <div className="lg:flex hidden items-center">
              <button
                onClick={() => {
                  setEditOpen(true);
                }}
                style={{ border: '1px solid #38369A', color: '#38369A' }}
                className="text-base rounded px-4 py-2"
              >
                Edit Projects
              </button>
              <button
                onClick={() => {
                  setAddOpen(true);
                }}
                className="purple text-white px-4 py-2 ml-4 rounded text-base"
              >
                Add Projects
              </button>
            </div>
          </div>
        </div>

        {projectImgArray.length === 0 ? (
          <EmptyProjects />
        ) : (
          <div className="">
            <div className="flex items-center mt-0 lg:mt-10 flex-wrap justify-between">
              {/* project Card */}
              {projectImgArray.map((item, index) => {
                return (
                  <div
                    className="w-full md:w-64 xl:w-96 mt-7 lg:mt-14"
                    key={index + 'jdvhknlkmv'}
                  >
                    <img
                      src={item}
                      alt=""
                      loading="lazy"
                      className="rounded w-full mb-4 h-28 lg:h-auto"
                    />
                    <p className="text-sm">
                      <EllipsisText
                        text={
                          'AI-Powered analytics and result No-Code Form Building UI and facing all the'
                        }
                        length={'70'}
                      />
                    </p>
                  </div>
                );
              })}

              {/* project Card */}
            </div>
          </div>
        )}
      </div>

      <EditProject
        visible={editOpen}
        setVisible={(val) => {
          setEditOpen(val);
        }}
      />
      <AddProject
        visible={addOpen}
        setVisible={(val) => {
          setAddOpen(val);
        }}
      />
    </div>
  );
}
