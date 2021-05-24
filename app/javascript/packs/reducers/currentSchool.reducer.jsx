import { EDIT_SCHOOL, GET_SCHOOL } from "../actions/currentSchool.action";

const initialState = {};

export default function currentSchoolReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCHOOL:
      return action.payload;
    case EDIT_SCHOOL:
      return action.payload;
    default:
      return state;
  }
}
