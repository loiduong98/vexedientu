import dsbenReducer from "../reducers/dsbenReducer";
import dstuyenReducer from "../reducers/dstuyenReducer";

import { combineReducers } from "redux";
import khachhangReducer from "./khachhangReducer";
import dslichchayReducer from "./dslichchayReducer";
import dsxeReducer from "./dsxeReducer";
import loginReducer from "./loginReducer";

const allReducer = combineReducers({
  dsbenReducer: dsbenReducer,
  dstuyenReducer: dstuyenReducer,
  khachhangReducer: khachhangReducer,
  dslichchayReducer: dslichchayReducer,
  dsxeReducer: dsxeReducer,
  loginReducer: loginReducer,
});
export default allReducer;
