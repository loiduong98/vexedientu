import dstuyenData from "../../data/dstuyen.json";
const dstuyenInitialState = {
  dstuyenData: dstuyenData,
};
const dstuyenReducer = (state = dstuyenInitialState, action) => {
  switch (action.type) {
    case "TEST_CONNECT":
      console.log("ket noi thanh cong");
      return state;
    default:
      return state;
  }
};

export default dstuyenReducer;
