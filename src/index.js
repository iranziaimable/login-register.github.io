import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthoProvider } from "./components/Authontication/AuthoProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthoProvider>
        <App />
      </AuthoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
