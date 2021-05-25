export const GET_SCHOOL = "GET_SCHOOL";
export const EDIT_SCHOOL = "EDIT_SCHOOL";

// get 1 school
export const getCurrentSchool = (school) => {
  return (dispatch) => {
    return dispatch({ type: GET_SCHOOL, payload: school });
  };
}

export const editSchool = (
  schoolId,
  name,
  published,
  description,
  email,
  website,
  city,
  csrf
) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        published: published,
        description: description,
        email: email,
        website: website,
        city: city,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: EDIT_SCHOOL, payload: data });
      })
      .catch((err) => console.log(`error editSchool ${err}`));
  };
};