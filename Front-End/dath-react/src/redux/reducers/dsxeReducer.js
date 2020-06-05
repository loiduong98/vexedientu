const dsxeReducerInitialState = {
  dsxeData: [],
};
const dsxeReducer = (state = dsxeReducerInitialState, action) => {
  switch (action.type) {
    case "FETCH_DSXE":
      state.dsxeData = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default dsxeReducer;
