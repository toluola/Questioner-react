/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { state } from "./index";

const rootReducer = combineReducers({
  [state.stateKey]: state.reducer
});

const middleware = [logger, thunk];
const reduxDevTools =
  process.env.NODE_ENV === "production"
    ? p => p
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    reduxDevTools
  )
);

export default store;
