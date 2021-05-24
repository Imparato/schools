export const GET_ADDRESSES = "GET_ADDRESSES";
export const UPDATE_ADDRESSE = "UPDATE_ADDRESSE";
export const CREATE_ADDRESSE = "CREATE_ADDRESSE";
export const DELETE_ADDRESSE = "DELETE_ADDRESSE";


export const getAddresses = (schoolId) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/addresses`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_ADDRESSES, payload: data });
      });
  };
}

export const updateAdresse = (csrf, schoolId, addressUpdated) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/addresses/${addressUpdated.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        published: addressUpdated.published,
        address_complement: addressUpdated.address_complement,
        city: addressUpdated.city,
        zipcode: addressUpdated.zipcode,
        details: addressUpdated.details,
        phone: addressUpdated.phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: UPDATE_ADDRESSE, payload: data });
      })
      .catch((err) => console.log(err));
  };
}

export const createAddresse = (csrf, schoolId, addressUpdated) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/addresses`, {
      method: "POST",
      body: JSON.stringify({
        published: addressUpdated.published,
        address_complement: addressUpdated.address_complement,
        address: addressUpdated.address,
        city: addressUpdated.city,
        zipcode: addressUpdated.zipcode,
        details: addressUpdated.details,
        phone: addressUpdated.phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: CREATE_ADDRESSE, payload: data });
      })
      .catch((err) => console.log(err));
  };
}

export const deleteAddresse = (csrf, schoolId, addressId) => {
  return (dispatch) => {
    return fetch(`/schools/${schoolId}/addresses/${addressId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-CSRF-Token": csrf,
      },
    })
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: DELETE_ADDRESSE, payload: data });
      })
      .catch((err) => console.log(err));
  }
}