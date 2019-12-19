import { combineReducers } from "redux";
import bug from "./bug";
import auth from "./auth";

const allReducers = combineReducers({
  auth,
  bug
});

export default allReducers;
