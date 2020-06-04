const isLogged = false;
const loginReducer = (state = isLogged, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_STATUS":
      return !state;

    default:
      return state;
  }
};

export default loginReducer;
