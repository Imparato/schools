import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAddresse } from '../../actions/addresses.action';

const AddressCreate = ({setCreateMode, schoolId}) => {
  const [currentAddress, setCurrentAddress] = useState("");
  const [published, setPublished] = useState(false);
  const [addressComplement, setAddressComplement] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    const newAddress = {
      id: address.id,
      address_complement: addressComplement,
      published,
      city,
      zipcode,
      details,
      phone,
    };
    dispatch( createAddresse(csrf, schoolId, newAddress));
    setCreateMode(false);
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
            <input
              id="published"
              type="checkbox"
              checked={published}
              name="published"
              onChange={(e) => setPublished(e.target.checked)}
              className="block mb-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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

export default AddressCreate;