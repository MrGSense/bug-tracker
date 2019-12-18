import { combineReducers } from "redux";
import bug from "./bug";
import auth from "./auth";

export default combineReducers({
  auth,
  bug
});
