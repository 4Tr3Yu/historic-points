import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoadingProvider } from "./lib/loader";
import "./styles/index.scss";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App/>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
