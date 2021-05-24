
export const GET_SCHOOLS = "GET_SCHOOLS";

// Get all schools for 1 user
export const getSchools = () => {
  return (dispatch) => {
    return fetch("/schools")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_SCHOOLS, payload: data })
      })
      .catch((err) => console.log(`error getSchool ${err}`));
  }
};



