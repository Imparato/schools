import React, { useState } from "react";
import { PlusIcon as PlusIconSolid } from "@heroicons/react/solid";
import Network from "./Network";

const Networks = ({ schools, reset }) => {
  const [networks, setNetworks] = useState(schools.network);

  // useState(() => {
  //    setNetworks(schools.network);
  // },[])

  // CREATE
  const addInputTag = () => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    fetch(`/schools/${schools.school.id}/networks`, {
      method: "POST",
      body: JSON.stringify({
        url: "",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNetworks(data[0].network);
      });
  };

  return (
    <>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Réseaux :</dt>
        {/* {schools.networks.map} */}
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul
            id="input-tag"
            className="border border-gray-200 rounded-md divide-y divide-gray-200 w-60"
          >
            {networks &&
              networks.map((net) => {
                return (
                  <Network
                    key={net.id}
                    schoolId={schools.school.id}
                    network={net}
                    setNetworks={setNetworks}
                  />
                );
              })}
          </ul>
          <button
            onClick={() => addInputTag()}
            type="button"
            className=" mt-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
          </button>
        </dd>
      </div>
      <div className="bg-white pb-3 space-y-2 relative z-0 inline-flex shadow-sm rounded-md col-12 w-full">
        <button
          id="btn-edit-school"
          type="submit"
          className="inline-flex px-4 py-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Valider
        </button>
        <input
          type="button"
          value="Annuler"
          onClick={() => reset()}
          className="inline-flex px-4 py-3 items-center border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        />
      </div>
    </>
  );
};

export default Networks;
