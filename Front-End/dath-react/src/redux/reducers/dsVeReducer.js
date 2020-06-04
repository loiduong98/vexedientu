const dsVeReducerInitialState = {
    dsVeData: [],
  };
  const dsVeReducer = (state = dsVeReducerInitialState, action) => {
    switch (action.type) {
      case "FETCH_DSVE":
        state.dsVeData = action.payload;
        return { ...state };
      default:
        return state;
    }
  };
  
  export default dsVeReducer;
  