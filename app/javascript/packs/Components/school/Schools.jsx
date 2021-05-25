import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNetworks } from "../../actions/network.action";
import { isEmpty } from "../../utils";
import SchoolShow from "./SchoolShow";

const Schools = () => {
  const school = useSelector((state) => state.currentSchoolReducer);
  const dispatch = useDispatch();
  useState(() => {
    if (!isEmpty(school)) dispatch(getNetworks(school.id));
  },[])
  const [ready, setReady] = useState(false);

  return (
    <>
      {!isEmpty(school) && (

        <SchoolShow school={school} />
      )}
    </>
  );
};

export default Schools;
