// import { GET_TEACHERS } from "../actions/teachers.action";

// const initialState = {};

// export default function teachersReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_TEACHERS:
//       return action.payload;
    
//     default:
//       return state;
//   }
// }

import {
  CREATE_TEACHER,
  DELETE_TEACHER,
  GET_TEACHERS,
  UPDATE_TEACHER,
} from "../actions/teachers.action.js";

const initialState = {};

export default function teachersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEACHERS:
      return action.payload;

    case CREATE_TEACHER:
      return state.concat(action.payload);

    case UPDATE_TEACHER:
      return state.map((teacher) => {
        if (teacher.id === action.payload.id) {
          return action.payload;
        }
        return teacher;
      });

    case DELETE_TEACHER:
      return state.filter((teacher) => teacher.id !== action.payload.id);
    default:
      return state;
  }
}
