import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from './redux/store'; 

import "./index.css";
import App from "./App";

ReactDOM.render(
  // wrap the entire app with provider that will take store to use redux
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
