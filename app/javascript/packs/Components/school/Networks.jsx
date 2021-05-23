import React, { useState } from "react";
import { PlusIcon as PlusIconSolid } from "@heroicons/react/solid";
import Network from "./Network";
import { useDispatch, useSelector } from "react-redux";
import { createNetwork } from "../../actions/network.action";
import { isEmpty } from "../../utils";

const Networks = ({ school, reset }) => {
  // const [networks, setNetworks] = useState(schools.network);
  const networks = useSelector((state) => state.networksReducer);
  const dispatch = useDispatch()
  // CREATE NETWORK
  const addInputTag = () => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    dispatch(createNetwork(csrf, school.id,""))
  };

  return (
    <>
      <div className=" bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Réseaux :</dt>
        {/* {schools.networks.map} */}
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 w-1/2">
          <ul
            id="input-tag"
            className="border border-gray-200 rounded-md divide-y divide-gray-200"
          >
            {!isEmpty(networks) &&
              networks.map((network) => {
                return (
                  <Network
                    key={network.id}
                    schoolId={school.id}
                    network={network}
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
      <div className="bg-white pb-3 mt-2 z-0 inline-flex justify-around shadow-sm rounded-md w-full">
        <input
          type="button"
          value="Annuler"
          onClick={() => reset()}
          className="inline-flex items-center px-4 py-3 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Enregistrer
        </button>
      </div>
    </>
  );
};

export default Networks;