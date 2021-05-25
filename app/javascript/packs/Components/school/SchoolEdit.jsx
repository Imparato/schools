import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editSchool } from "../../actions/currentSchool.action";
import Networks from "./Networks";
import { Switch } from "@headlessui/react";
import "@tailwindcss/forms";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SchoolEdit = ({ school, setEditMode }) => {
  const [name, setName] = useState(school.name);
  const [published, setPublished] = useState(school.published);
  const [description, setDescription] = useState(school.description);
  const [email, setEmail] = useState(school.email);
  const [website, setWebsite] = useState(school.website);
  const [city, setCity] = useState(school.city);

  const dispatch = useDispatch()
  // remet tout les champs a la valeur initial
  const reset = () => {
    setName(school.name);
    setPublished(school.published);
    setDescription(school.description);
    setEmail(school.email);
    setWebsite(school.website);
    setCity(school.city);
    setEditMode(false);
  };

  // Update => schools_controller
  const handleSubmit = (e) => {
    e.preventDefault();
        const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    dispatch(editSchool(school.id,name,published,description,email,website,city, csrf));  
    setEditMode(false);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-3 mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Nom :</dt>
              <input
                className="pl-3 border-2 rounded-md border-green-300 bg-green-50"
                type="name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Publié :</dt>
              <Switch
                checked={published}
                onChange={setPublished}
                className={classNames(
                  published ? "bg-green-600" : "bg-green-200",
                  "relative inline-flex mb-1 flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  className={classNames(
                    published ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                >
                  <span
                    className={classNames(
                      published
                        ? "opacity-0 ease-out duration-100"
                        : "opacity-100 ease-in duration-200",
                      "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                    )}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3 w-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className={classNames(
                      published
                        ? "opacity-100 ease-in duration-200"
                        : "opacity-0 ease-out duration-100",
                      "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                    )}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3 w-3 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                  </span>
                </span>
              </Switch>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Description :
              </dt>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <textarea
                className="pl-3 border-2 rounded-md border-green-300 bg-green-50"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email :</dt>
              <input
                className="pl-3 border-2 rounded-md border-green-300 bg-green-50"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Site web :</dt>
              <input
                className="pl-3 border-2 rounded-md border-green-300 bg-green-50"
                type="text"
                name="text"
                id="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Ville :</dt>
              <input
                className="pl-3 border-2 rounded-md border-green-300 bg-green-50"
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </dl>
        </div>
        <Networks school={school} reset={reset} />
      </form>
    </>
  );
};

export default SchoolEdit;
