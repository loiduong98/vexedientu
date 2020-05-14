const dstuyenInitialState = {
  dstuyenData: [],
};
const dstuyenReducer = (state = dstuyenInitialState, action) => {
  switch (action.type) {
    case "TEST_CONNECT":
      console.log("ket noi thanh cong");
      return state;
    case "FETCH_DSTUYEN":
      state.dstuyenData = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default dstuyenReducer;
