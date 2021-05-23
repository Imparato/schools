import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import AddressEdit from "./AddressEdit";
import AddressesShow from "./AddressesShow";
import AddressCreate from "./AddressCreate";

const Addresses = () => {
  // const [addresses, setAddresses] = useState();
  const [createMode, setCreateMode] = useState(false);
  const school = useSelector((state) => state.currentSchoolReducer);
  const addresses = useSelector((state) => state.addressesReducer);
  
  
  return (
    <div className="relative w-full overflow-auto">
      {!isEmpty(addresses) && createMode ? (
        <AddressCreate schoolId={school.id} setCreateMode={ setCreateMode }/>
      ) : (
        <AddressesShow schoolId={school.id} addresses={addresses} setCreateMode={ setCreateMode } />
      )}
    </div>

    // <div>
    //   {addresses &&
    //     addresses.map((address) => {
    //       return <p>{address.address}</p>;
    //     })}
    // </div>
  );
};

export default Addresses;
