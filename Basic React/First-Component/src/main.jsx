import React from "react";
import ReactDOM from "react-dom/client";

// calling component
import App from "./Components/App.jsx";
import Apli from "./Components/ArrowFunc.jsx";
import Aplicate from "./Components/Function.jsx";
import Father from "./Components/Father.jsx";
// calling styles
import "./index.css";

// this "create" the page
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Aplicate />
    <Apli />

    <Father />
  </React.StrictMode>
);
