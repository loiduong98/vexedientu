const dsTicketUserReducerInitialState = {
  ticketUserData: [],
  };
  const ticketUserReducer = (state = dsTicketUserReducerInitialState, action) => {
    switch (action.type) {
      case "FETCH_TICKETUSER":
        state.ticketUserData = action.payload;
        return { ...state };
      default:
        return state;
    }
  };
  
  export default ticketUserReducer;
  