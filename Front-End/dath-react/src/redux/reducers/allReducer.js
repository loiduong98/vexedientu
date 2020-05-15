import dsbenReducer from "../reducers/dsbenReducer";
import dstuyenReducer from "../reducers/dstuyenReducer";

import { combineReducers } from "redux";
import khachhangReducer from "./khachhangReducer";

const allReducer = combineReducers({
  dsbenReducer: dsbenReducer,
  dstuyenReducer: dstuyenReducer,
  khachhangReducer: khachhangReducer,
});
export default allReducer;
