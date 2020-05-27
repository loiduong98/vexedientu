import dsbenReducer from "../reducers/dsbenReducer";
import dstuyenReducer from "../reducers/dstuyenReducer";
import { combineReducers } from "redux";
import khachhangReducer from "./khachhangReducer";
import dslichchayReducer from "./dslichchayReducer";
import dsxeReducer from "./dsxeReducer";
<<<<<<< .merge_file_a01584
import UserReducer from "./user"

const allReducer = combineReducers({
    dsbenReducer: dsbenReducer,
    dstuyenReducer: dstuyenReducer,
    khachhangReducer: khachhangReducer,
    dslichchayReducer: dslichchayReducer,
    dsxeReducer: dsxeReducer,
    user: UserReducer
=======
import userReducer from "./userReducer"

const allReducer = combineReducers({
  dsbenReducer: dsbenReducer,
  dstuyenReducer: dstuyenReducer,
  khachhangReducer: khachhangReducer,
  dslichchayReducer: dslichchayReducer,
  dsxeReducer: dsxeReducer,
  userReducer:userReducer
>>>>>>> .merge_file_a17088
});
export default allReducer;