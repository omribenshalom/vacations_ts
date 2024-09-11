import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import interceptorsService from "./Services/InterceptorsService";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./index.css";

if (process.env.NODE_ENV === "production") disableReactDevTools();

interceptorsService.createInterceptors();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
