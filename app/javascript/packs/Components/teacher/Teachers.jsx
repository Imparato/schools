import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TeachersShow from "./TeachersShow";

const Teachers = () => {
  const teachers = useSelector((state) => state.teachersReducer);

  return (
    <div className="w-full">
      {teachers && <TeachersShow teachers={ teachers }/>}
    </div>
  );
};

export default Teachers;
