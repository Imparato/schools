export const GET_TEACHERS = "GET_TEACHERS";

export const getTeachers = (schoolId) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/teachers`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: GET_TEACHERS, payload: data})
      });
  }
};