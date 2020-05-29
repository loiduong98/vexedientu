const stateUser = {
    credentials:null
}

const userReducer = (state = stateUser, action) => {
    switch (action.type) {
        case "FETCH_LOGIN":
        {
            state.userReducer = action.payload;   
            return { ...state };
        }
        default:
            return state;
    }
}
export default userReducer;
