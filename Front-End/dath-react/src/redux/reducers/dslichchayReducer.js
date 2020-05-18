const dslichchayReducerInitialState = {
  dslichchayData: [],
};
const dslichchayReducer = (state = dslichchayReducerInitialState, action) => {
  switch (action.type) {
    case "FETCH_DSLICHCHAY":
      state.dslichchayData = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default dslichchayReducer;
