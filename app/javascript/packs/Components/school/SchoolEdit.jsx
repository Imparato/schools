import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { editSchool } from "../../actions/currentSchool.action";
import Networks from "./Networks";

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
              <input
                id="select-all"
                type="checkbox"
                checked={published}
                name="select-all"
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
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
        <button type="submit">change</button>
        {/* <Networks schools={schools} reset={reset} /> */}
      </form>
    </>
  );
};

export default SchoolEdit;
