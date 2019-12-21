import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
