import { XCircleIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

const Network = ({ network, schoolId, setNetworks }) => {
  const [url, setUrl] = useState(network.url);  
  const handleDelete = () => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    fetch(`/schools/${schoolId}/networks/${network.id}`, {
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
        console.log(data);
        setNetworks(data[0].network);
        // setNetworks(data[0].network);
      });
  };
  const handleEdit = () => {
    // verifie si l'input a changer
    if(network.url !== url) {
      console.log("edit that"); 
       const csrf = document
         .querySelector("meta[name='csrf-token']")
       .getAttribute("content");

     fetch(`/schools/${schoolId}/networks/${network.id}`, {
         method: "PATCH",
       body: JSON.stringify({
         url: url
       }),
       headers: {
         "Content-type": "application/json; charset=UTF-8",
         "X-CSRF-Token": csrf,
       },
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         // setNetworks(data[0].network);
       });
    
    }
  };
  
  return (
    <li className=" flex items-center justify-between text-sm">
      <div className=" flex-1 flex items-center">
        <input
          onBlur={() => handleEdit()}
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          className="p-2 flex-1"
        />
        <XCircleIcon onClick={handleDelete} style={{cursor: "pointer"}} className="h-5 w-5" />
      </div>
    </li>
  );
};

export default Network;
