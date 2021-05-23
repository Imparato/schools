import { CREATE_ADDRESSE, DELETE_ADDRESSE, GET_ADDRESSES, UPDATE_ADDRESSE } from '../actions/addresses.action.js';

const initialState = {};

export default function addressesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESSES:
      return action.payload;

    case CREATE_ADDRESSE:
      return state.concat(action.payload);

    case UPDATE_ADDRESSE:
      return state.map((address) => {
        if (address.id === action.payload.id) {
          return action.payload;
        }
        return address;
      });
    
    case DELETE_ADDRESSE:
      return state.filter((address) => address.id !== action.payload.id)
    default:
      return state;
  }
}