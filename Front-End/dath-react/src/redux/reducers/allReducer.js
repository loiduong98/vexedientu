import dsbenReducer from "../reducers/dsbenReducer";
import dstuyenReducer from "../reducers/dstuyenReducer";

import { combineReducers } from "redux";
import khachhangReducer from "./khachhangReducer";
import dslichchayReducer from "./dslichchayReducer";

const allReducer = combineReducers({
  dsbenReducer: dsbenReducer,
  dstuyenReducer: dstuyenReducer,
  khachhangReducer: khachhangReducer,
  dslichchayReducer: dslichchayReducer,
});
export default allReducer;