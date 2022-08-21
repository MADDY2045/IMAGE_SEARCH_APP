import loadData from "./searchImageReducer";
import searchInput from "./searchInput";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  loadData: loadData,
  searchInput: searchInput,
});

export default allReducers;
