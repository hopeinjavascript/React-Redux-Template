import userActionTypes from "../actionTypes/users.actionTypes";

export const fetchUsers = () => {
  return async function (dispatch, getState) {
    // const url = "http://localhost:5000/users"; //your server URL
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const users = await res.json();
    dispatch({ type: userActionTypes.FETCH_USERS, payload: { users } });
  };
};

export const addUser = (user) => {
  return {
    type: userActionTypes.ADD_USER,
    payload: {
      user,
    },
  };
};

export const removeUser = (id) => {
  return {
    type: userActionTypes.REMOVE_USER,
    payload: {
      id,
    },
  };
};
