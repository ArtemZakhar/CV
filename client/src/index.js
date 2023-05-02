import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/app/App";
import store from "./components/pages/ExpirienceObtainedAfterJS/porfolioBlock/store/index";
import "./style/style.scss";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);