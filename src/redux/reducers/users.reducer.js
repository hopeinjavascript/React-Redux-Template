import userActionTypes from "../actionTypes/users.actionTypes";

const initState = {
  users: [],
};

const userReducer = (state = initState, action) => {
  if (action.type === userActionTypes.FETCH_USERS) {
    return { ...state, users: action.payload.users };
  }

  if (action.type === userActionTypes.ADD_USER) {
    return "ADD_USER";
  }

  if (action.type === userActionTypes.REMOVE_USER) {
    return "REMOVE_USER";
  }

  return state;
};

export default userReducer;
