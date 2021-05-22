export const GET_NETWORKS = "GET_NETWORKS";
export const CREATE_NETWORK = "CREATE_NETWORK";
export const UPDATE_NETWORK = "UPDATE_NETWORK";
export const DELETE_NETWORK = "DELETE_NETWORK";

export const getNetworks = (schoolId) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/networks`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_NETWORKS, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const createNetwork = (csrf, schoolId, url) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/networks`, {
      method: "POST",
      body: JSON.stringify({
        url: url,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Donnée du controller :" );
        console.log(data);
        dispatch({ type: CREATE_NETWORK, payload: data });
      });
  }
};

export const updateNetwork = (csrf, schoolId, networkId, url) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/networks/${networkId}`, {
      method: "PATCH",
      body: JSON.stringify({
        url: url,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: UPDATE_NETWORK, payload: data });
      });
  };
};

export const deleteNetwork = (csrf,schoolId, networkId) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/networks/${networkId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: DELETE_NETWORK, payload: data });
      });
  };
};