import React, { useState } from "react";
import SchoolEdit from "./SchoolEdit";

const SchoolShow = ({ school }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <div className="bg-white shadow sm:rounded-lg w-100">
        {editMode ? (
          <SchoolEdit
            school={school}
            setEditMode={setEditMode}
          />
        ) : (
          <>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-3 mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Nom :</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {school.name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Publié :
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {school.published ? "Oui" : "Non"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Description :
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {school.description}
                  </dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email :</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {school.email}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Site web :
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {school.website}
                  </dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Ville :</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {school.city}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Réseaux :
                  </dt>
                  {/* {schools.networks.map} */}
                  {/* <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-2/3">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                      {schools.network.map((net) => {
                        return (
                          <li
                            key={net.id}
                            className="pl-3 pr-4 w-40 py-2 flex items-center justify-between text-sm"
                          >
                            <div className=" flex-1 flex items-center">
                              <span className="ml-2 ">{net.url}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </dd> */}
                </div>
              </dl>
            </div>
            <div className="flex w-100 justify-center mt-2">
              <button
                onClick={() => setEditMode(!editMode)}
                className="inline-flex items-center px-4 py-3 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Modifier
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SchoolShow;
