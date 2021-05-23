import React, { useState } from 'react';
import '@tailwindcss/forms';
import { useDispatch } from 'react-redux';
import { updateAdresse } from '../../actions/addresses.action';
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddressEdit = ({ address, schoolId, setEditMode }) => {
  const [currentAddress, setCurrentAddress] = useState(address.address);
  const [published, setPublished] = useState(address.published);
  const [addressComplement, setAddressComplement] = useState(
    address.address_complement
  );
  const [city, setCity] = useState(address.city );
  const [zipcode, setZipcode] = useState(address.zipcode);
  const [details, setDetails] = useState(address.details);
  const [phone, setPhone] = useState(address.phone);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    const updatedAdress = {
      id: address.id,
      address: currentAddress,
      address_complement: addressComplement,
      published,
      city,
      zipcode,
      details,
      phone,
    };
    dispatch(updateAdresse(csrf, schoolId, updatedAdress));
    setEditMode(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full  space-y-1">
        <form onSubmit={(e) => handleSubmit(e)} className="mt-1 space-y-3">
          <div className="flex items-center space-x-3">
            <label
              htmlFor="published"
              className="block text-sm font-medium text-gray-700"
            >
              Publié :
            </label>
            <Switch
              checked={published}
              onChange={setPublished }
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
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Addresse:
            </label>
            <div className="mt-1">
              <input
                id="address"
                name="address"
                type="address"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="address_complement"
              className="block text-sm font-medium text-gray-700"
            >
              Complément d'addresse:
            </label>
            <div className="mt-1">
              <input
                id="address_complement"
                name="address_complement"
                type="address_complement"
                value={addressComplement}
                onChange={(e) => setAddressComplement(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700"
            >
              Details:
            </label>
            <div className="mt-1">
              <input
                id="details"
                name="details"
                type="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Ville:
            </label>
            <div className="mt-1">
              <input
                id="city"
                name="city"
                type="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="zipcode"
              className="block text-sm font-medium text-gray-700"
            >
              Code postal:
            </label>
            <div className="mt-1">
              <input
                id="zipcode"
                name="zipcode"
                type="zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
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

export default AddressEdit;