import { XCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

const Network = ({ network }) => {
  
  useState(() => {
     const csrf = document
       .querySelector("meta[name='csrf-token']")
       .getAttribute("content");

     fetch(`/schools/${schools.school.id}/networks/${network.id}`, {
       method: "DELETE",
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
  }, [])

  return (
      <li
        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
      >
        <div className=" flex-1 flex items-center">
        <input value={network.url} className="ml-2 flex-1" />
        <XCircleIcon onClick={ handleDelete }/>
        </div>
      </li>
  );
};

export default Network;