const dskhachhangReducerInitialState = {
    dskhachhangData: [],
  };
  const dsKhachHangReducer = (state = dskhachhangReducerInitialState, action) => {
    switch (action.type) {
      case "FETCH_DSKHACHHANG":
        state.dskhachhangData = action.payload;
        return { ...state };
      default:
        return state;
    }
  };
  
  export default dsKhachHangReducer;
  