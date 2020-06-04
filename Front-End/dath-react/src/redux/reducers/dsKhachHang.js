const dskhachhangReducerInitialState = {
    dskhachhangData: [],
  };
  const dskhachhangReducer = (state = dskhachhangReducerInitialState, action) => {
    switch (action.type) {
      case "FETCH_DSKHACHHANG":
        state.dskhachhangData = action.payload;
        return { ...state };
      default:
        return state;
    }
  };
  
  export default dskhachhangReducer;
  