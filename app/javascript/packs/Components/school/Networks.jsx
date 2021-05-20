import React, {useState} from 'react';
import { PlusIcon as PlusIconSolid } from "@heroicons/react/solid";
import Network from './Network';

const Networks = ({schools}) => {
  const [networks, setNetworks] = useState(schools.school.network);


  // CREATE
  const addInputTag = () => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    
    fetch(`/schools/${schools.school.id}/networks`, {
      method: "POST",
      body: JSON.stringify({
        url: ""
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      }
    })
      .then(res => res.json())
      .then(data => {
        setNetworks(data[0].network)
      });
  }

  //    console.log("input");
  //    const input = document.getElementById("input-tag");
  //    input.insertAdjacentHTML(
  //      "beforeend",
  //      ` <li className=" mt-2 pl-3 pr-4 py-3 flex items-center justify-between text-sm">
  //         <div className=" flex-1 flex items-center">
  //           <input type='text' className=" ml-2 flex-1" />
  //         </div>
  //       </li>`
  //    );
  //  };

  return (
    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">Réseaux :</dt>
      {/* {schools.networks.map} */}
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <ul
          id="input-tag"
          className="border border-gray-200 rounded-md divide-y divide-gray-200 w-60"
        >
          {networks.map((net) => {
            return <Network key={net.id} schoolId={schools.school.id} network={net} />;
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
      <button
        onClick={addInputTag}
        type="submit"
        className="inline-flex ml-40 items-center px-4 py-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Valider
      </button>
    </div>
  );
};

export default Networks;