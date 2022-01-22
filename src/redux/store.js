import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import userReducer from "./reducers/users.reducer.js";

const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunkMiddleware))
);

export default store;
