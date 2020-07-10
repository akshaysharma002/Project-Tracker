const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login Succesfull");
      return {
        authError: null,
      };
    case "LOGIN_ERROR":
      console.log("Login Unsuccesfull");
      return {
        authError: "Login Failed",
      };

    case "SIGNOUT_SUCCESS":
      console.log("sign out success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("sign up success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("sign up error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
