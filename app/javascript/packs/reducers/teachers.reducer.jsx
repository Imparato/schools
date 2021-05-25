import { GET_TEACHERS } from "../actions/teachers.action";

const initialState = {};

export default function teachersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEACHERS:
      return action.payload;
    
    default:
      return state;
  }
}
