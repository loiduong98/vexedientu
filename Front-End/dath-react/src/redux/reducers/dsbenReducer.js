const dsbenInitialState = {
  dsbenData: [],
};
const dsbenReducer = (state = dsbenInitialState, action) => {
  switch (action.type) {
    case "TEST":
      console.log("Kết nối action thành công");
      return state;
    case "FETCH_DSBEN":
      state.dsbenData = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default dsbenReducer;
