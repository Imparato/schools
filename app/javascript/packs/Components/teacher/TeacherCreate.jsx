import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTeacher } from "../../actions/teachers.action";

const TeacherCreate = ({ setCreateMode, schoolId }) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    const newTeacher = {
      first_name,
      last_name,
      bio,
      phone,
    };
    dispatch(createTeacher(csrf, schoolId, newTeacher));
    setCreateMode(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full  space-y-1">
        <form onSubmit={(e) => handleSubmit(e)} className="mt-1 space-y-3">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              Prénom:
            </label>
            <div className="mt-1">
              <input
                id="first_name"
                name="first_name"
                type="first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom:
            </label>
            <div className="mt-1">
              <input
                id="last_name"
                name="last_name"
                type="last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Biographie:
            </label>
            <div className="mt-1">
              <input
                id="bio"
                name="bio"
                type="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Télephone:
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherCreate;