import React, { Fragment, useEffect, useState } from "react";
import SchoolEdit from "./SchoolEdit";

const SchoolShow = ({ schools, setSchools }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <div className="bg-white shadow sm:rounded-lg w-100">
        {editMode ? (
          <SchoolEdit schools={schools} setEditMode={setEditMode} setSchools={setSchools}  />
        ) : (
          <>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-3 mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Nom :</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {schools.school.name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Publié :
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {schools.school.published ? "Oui" : "Non"}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Description :
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {schools.school.description}
                  </dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email :</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {schools.school.email}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Site web :
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {schools.school.website}
                  </dd>
                </div>
                <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Ville :</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {schools.school.city}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Réseaux</dt>
                  {/* {schools.networks.map} */}
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200 w-60">
                      {schools.network.map((net) => {
                        return (
                          <li
                            key={net.id}
                            className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                          >
                            <div className="w-0 flex-1 flex items-center">
                              <span className="ml-2 flex-1 w-0 truncate">
                                {net.url}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
            <button
              onClick={() => setEditMode(!editMode)}
              className="inline-flex ml-40 items-center px-4 py-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Modifier
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default SchoolShow;
