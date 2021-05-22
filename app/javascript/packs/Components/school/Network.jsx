import { XCircleIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteNetwork, updateNetwork } from "../../actions/network.action";

const Network = ({ network, schoolId }) => {
  const [url, setUrl] = useState(network.url);
  
  const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNetwork(csrf, schoolId, network.id));
  };

  const handleEdit = () => {
    // verifie si l'input a changer
    if(network.url !== url) {
      dispatch(updateNetwork(csrf, schoolId, network.id, url));
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
        <XCircleIcon
          onClick={handleDelete}
          style={{ cursor: "pointer" }}
          className="h-5 w-5"
        />
      </div>
    </li>
  );
};

export default Network;
