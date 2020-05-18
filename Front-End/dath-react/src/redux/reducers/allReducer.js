import dsbenReducer from "../reducers/dsbenReducer";
import dstuyenReducer from "../reducers/dstuyenReducer";

import { combineReducers } from "redux";
import khachhangReducer from "./khachhangReducer";
import dslichchayReducer from "./dslichchayReducer";

const allReducer = combineReducers({
<<<<<<< HEAD
    dsbenReducer: dsbenReducer,
    dstuyenReducer: dstuyenReducer,
    khachhangReducer: khachhangReducer,
=======
  dsbenReducer: dsbenReducer,
  dstuyenReducer: dstuyenReducer,
  khachhangReducer: khachhangReducer,
  dslichchayReducer: dslichchayReducer,
>>>>>>> 7a3884c5ce99efc5d3b7944662ecc7cad6687b5f
});
export default allReducer;