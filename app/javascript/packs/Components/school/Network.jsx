import { XCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Network = ({network}) => {
  return (
      <li
        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
      >
        <div className=" flex-1 flex items-center">
        <input value={network.url} className="ml-2 flex-1" />
        <XCircleIcon/>
        </div>
      </li>
  );
};

export default Network;