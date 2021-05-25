import {
  GET_SCHOOLS } from "../actions/school.action";

const initialState = {};

export default function schoolsReducer(state = initialState, action) {
  switch (action.type) {

    case GET_SCHOOLS:
      return action.payload;
    
    default:
      return state;
  };
}