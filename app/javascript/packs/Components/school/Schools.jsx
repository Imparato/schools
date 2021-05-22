import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import SchoolShow from "./SchoolShow";

const Schools = () => {
  const school = useSelector((state) => state.currentSchoolReducer);
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
