import React, { useRef, useState } from "react";
import Networks from "./Networks";

const SchoolEdit = ({ schools, setEditMode, setSchools }) => {
  const [name, setName] = useState(schools.school.name);
  const [published, setPublished] = useState(schools.school.published);
  const [description, setDescription] = useState(schools.school.description);
  const [email, setEmail] = useState(schools.school.email);
  const [website, setWebsite] = useState(schools.school.website);
  const [city, setCity] = useState(schools.school.city);

  const tagsRef = useRef();
  // remet tout les champs a la valeur initial
  const reset = () => {
    setName(schools.school.name);
    setPublished(schools.school.published);
    setDescription(schools.school.description);
    setEmail(schools.school.email);
    setWebsite(schools.school.website);
    setCity(schools.school.city);
    setEditMode(false);
  };

  // Update => schools_controller
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
        setSchools(data[0]);
        setEditMode(false);
      });
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
        <Networks schools={schools} reset={reset} />
      </form>
    </>
  );
};

export default SchoolEdit;
