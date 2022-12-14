import { createStore, applyMiddleware } from "redux";
import allReducer from "../reducers";
import thunk from "redux-thunk";

export default createStore(allReducer, applyMiddleware(thunk));
