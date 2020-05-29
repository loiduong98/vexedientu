const stateUser = {
    credentials:null
}

const userReducer = (state = stateUser, action) => {
    switch (action.type) {
<<<<<<< HEAD
=======
        case "FETCH_LOGIN":
        {
            state.userReducer = action.payload;   
            return { ...state };
        }
>>>>>>> frontend-cong
        default:
            return state;
    }
}
export default userReducer;
