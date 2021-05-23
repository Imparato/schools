import React, { useState } from "react";
import { isEmpty } from "../../utils";
import AddressEdit from "./AddressEdit";

const AddressesShow = ({ addresses, schoolId }) => {
  const [editMode, setEditMode] = useState(false);
  const [address, setAddress] = useState();

  const editAddress = (addressToEdit) => {
    setAddress(addressToEdit);
    setEditMode(true);
  };

  return (
    <>
      {editMode ? (
        <AddressEdit
          schoolId={schoolId}
          setEditMode={setEditMode}
          address={address}
        />
      ) : (
        <>
          <div className="absolute right-0 mr-8 mt-6">
            <button
              type="button"
              className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Ajouter une adresse
            </button>
          </div>
          <div className="flex flex-col my-20 mx-8">
            <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Publiée
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Adresse
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Complément
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Code postal
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Ville
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isEmpty(addresses) &&
                        addresses.map((address, addressIdx) => (
                          <tr
                            key={address.id}
                            className={
                              addressIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {address.published ? "Oui" : "Non"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {address.address}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {address.address_complement}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {address.zipcode}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {address.city}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                onClick={() => editAddress(address)}
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                              >
                                Modifier
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddressesShow;
