import { combineReducers } from "redux";
import currentSchoolReducer from "./currentSchool.reducer";
import schoolsReducer from './schools.reducer';
import networksReducer from "./network.reducer";

export default combineReducers({
  // all reducers
  schoolsReducer,
  currentSchoolReducer,
  networksReducer
});