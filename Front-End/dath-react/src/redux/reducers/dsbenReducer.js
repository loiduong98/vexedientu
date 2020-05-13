import dsbenData from "../../data/dsben.json";
const dsbenInitialState = {
  dsbenData: dsbenData,
};
const dsbenReducer = (state = dsbenInitialState, action) => {
  switch (action.type) {
    case "TEST":
      console.log("Kết nối action thành công");
      return state;
    default:
      return state;
  }
};

export default dsbenReducer;
