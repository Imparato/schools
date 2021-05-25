import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import TeacherCreate from "./TeacherCreate";
import TeacherEdit from "./TeacherEdit";
import TeachersShow from "./TeachersShow";

const Teachers = () => {
  const [createMode, setCreateMode] = useState(false);
  const school = useSelector((state) => state.currentSchoolReducer);
  const teachers = useSelector((state) => state.teachersReducer);
  
  
  return (
    <div className="relative w-full overflow-auto">
      { teachers && createMode ? (
        <TeacherCreate schoolId={school.id} setCreateMode={ setCreateMode }/>
      ) : (
        <TeachersShow schoolId={school.id} teachers={teachers} setCreateMode={ setCreateMode } />
      )}
    </div>
  );
};

export default Teachers;



