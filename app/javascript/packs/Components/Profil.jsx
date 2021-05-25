import { LogoutIcon } from "@heroicons/react/outline";
import React from "react";
// import Cookie from 'js-cookie';

const Profil = () => {
  
  const disconnect = async () => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    await fetch("/users/sign_out", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    }).catch((err) => console.log(err));
    
    window.localStorage.removeItem("school");
    window.location.reload();
  };
  return (
    <div className="w-100 h-100 flex align-center justify-center">
      <button
        onClick={disconnect}
        type="button"
        className="inline-flex h-1 items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Déconnexion
        <LogoutIcon />
      </button>
    </div>
  );
};

export default Profil;
