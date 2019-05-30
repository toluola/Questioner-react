import React from "react";
import ReactDOM from "react-dom";
import decode from "jwt-decode"
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import store from "./state/store";
import { signinSuccess } from "./state/actions";
import App from "./App";

if (localStorage.questionerToken) {
  const payload = decode(localStorage.questionerToken);
  store.dispatch(signinSuccess(payload));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
