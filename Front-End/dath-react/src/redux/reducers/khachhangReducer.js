const khachhangReducerInitialState = {
  khachhangData: [],
};
const khachhangReducer = (state = khachhangReducerInitialState, action) => {
  switch (action.type) {
    case "FETCH_KHACHHANG":
      state.khachhangData = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default khachhangReducer;
