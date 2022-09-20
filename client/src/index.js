
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import App from "./app/App";
import MainRouter from "./app/Router";
import "./index.css";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <MainRouter />
      </App>
    </Provider>
  </React.StrictMode>
);
