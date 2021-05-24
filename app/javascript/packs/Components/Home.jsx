import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../actions/addresses.action";
import { getCurrentSchool } from "../actions/currentSchool.action";
import { isEmpty } from '../utils';
import Schools from './school/Schools';
const Home = () => {
  const schools = useSelector((state) => state.schoolsReducer);
  const currentSchool = useSelector((state) => state.currentSchoolReducer);
  const dispatch = useDispatch()  

  const handleClick = (school) => {
    dispatch(getCurrentSchool(school));
    dispatch(getAddresses(school.id));
    window.localStorage.setItem("school", JSON.stringify(school));
  }
  return (
    <>
      {schools[0] && isEmpty(currentSchool) && (
        <div className=" flex w-100  lg:overflow-hidden h-screen  sm:mt-12 sm:pb-16 ">
          <div className="w-100 mx-auto overflow-scroll lg:m-0.5 content flex justify-center ">
            {schools.map((school) => {
              return (
                <div
                  key={school.id}
                  className="flex flex-col w-1/3 sm:col-10 justify-center  rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-green-100 text-green-600"
                        id="tier-standard"
                      >
                        école
                      </h3>
                    </div>
                    <div className="mt-4 flex justify-center items-baseline text-4xl font-extrabold">
                      {school.name}
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{school.city}</p>
                  </div>
                  <div className="flex-1 flex flex-col sm:col-10 justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <div className="rounded-md shadow">
                      <a
                        onClick={() => handleClick(school)}
                        className="flex cursor-pointer items-center no-underline justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-600"
                        aria-describedby="tier-standard"
                      >
                        Choisir
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {!isEmpty(currentSchool) && <Schools />}
    </>
  );
};

export default Home;
