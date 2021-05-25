import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TeacherCreate from "./TeacherCreate";
import TeachersShow from "./TeachersShow";

const Teachers = () => {
  const teachers = useSelector((state) => state.teachersReducer);
  const [createMode, setCreateMode] = useState(false);

  return (
    <div className="w-full">
      {teachers && createMode ? (<TeacherCreate/>):
        (<TeachersShow setCreateMode={setCreateMode} teachers = { teachers }/> )}
    </div>
  );
};

export default Teachers;
