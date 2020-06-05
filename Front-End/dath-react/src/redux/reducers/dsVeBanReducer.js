const dsVeBanReducerInitialState = {
    dsVeBanData: [],
  };
  const dsVeBanReducer = (state = dsVeBanReducerInitialState, action) => {
    switch (action.type) {
      case "FETCH_DSVEBAN":
        state.dsVeBanData = action.payload;
        return { ...state };
      default:
        return state;
    }
  };
  
  export default dsVeBanReducer;
  