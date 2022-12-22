import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import globalReducer from "../src/state";
import { Provider } from "react-redux";
import App from "../src/App";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
