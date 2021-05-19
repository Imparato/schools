import { MailIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";

const SchoolEdit = ({ schools, setEditMode, setSchools }) => {
  const [name, setName] = useState(schools.school.name);
  const [published, setPublished] = useState(schools.school.published);
  const [description, setDescription] = useState(schools.school.description);
  const [email, setEmail] = useState(schools.school.email);
  const [website, setWebsite] = useState(schools.school.website);
  const [city, setCity] = useState(schools.school.city);

  const reset = () => {
    setName(schools.school.name);
    setPublished(schools.school.published);
    setDescription(schools.school.description);
    setEmail(schools.school.email);
    setWebsite(schools.school.website);
    setCity(schools.school.city);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    fetch(`/schools/${schools.school.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        published: published,
        description: description,
        email: email,
        website: website,
        city: city,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("fetch");
        setSchools(data[0]);
        setEditMode(false);
      });
  }

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
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Réseaux</dt>
              {/* {schools.networks.map} */}
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200 w-60">
                  {schools.network.map((net) => {
                    return (
                      <li
                        key={net.id}
                        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                      >
                        <div className="w-0 flex-1 flex items-center">
                          <span className="ml-2 flex-1 w-0 truncate">
                            {net.url}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <button type="submit" className="inline-flex ml-40 items-center px-4 py-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Valider
        </button>
        <input type="button" value='Annuler' onClick={() => reset()} className="inline-flex ml-40 items-center px-4 py-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"/>
      </form>
    </>
  );
};

export default SchoolEdit;
