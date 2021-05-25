export const GET_TEACHERS = "GET_TEACHERS";
export const UPDATE_TEACHER = "UPDATE_TEACHER";
export const CREATE_TEACHER = "CREATE_TEACHER";
export const DELETE_TEACHER = "DELETE_TEACHER";

export const getTeachers = (schoolId) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/teachers`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: GET_TEACHERS, payload: data})
      });
  }
};

export const updateTeacher = (csrf, schoolId, teacherUpdated) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/teachers/${teacherUpdated.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        first_name: teacherUpdated.first_name,
        last_name: teacherUpdated.last_name,
        bio: teacherUpdated.bio,
        phone: teacherUpdated.phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: UPDATE_TEACHER, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const createTeacher = (csrf, schoolId, teacherUpdated) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/teachers`, {
      method: "POST",
      body: JSON.stringify({
        first_name: teacherUpdated.first_name,
        last_name: teacherUpdated.last_name,
        bio: teacherUpdated.bio,
        phone: teacherUpdated.phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: CREATE_TEACHER, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteTeacher = (csrf, schoolId, teacherId) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/teachers/${teacherId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: DELETE_TEACHER, payload: data });
      })
      .catch((err) => console.log(err));
  };
};