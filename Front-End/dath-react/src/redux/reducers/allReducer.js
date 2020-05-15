import dsbenReducer from "../reducers/dsbenReducer";
import dstuyenReducer from "../reducers/dstuyenReducer";

import { combineReducers } from "redux";

const allReducer = combineReducers({
    dsbenReducer: dsbenReducer,
    dstuyenReducer: dstuyenReducer,
});
export default allReducer;