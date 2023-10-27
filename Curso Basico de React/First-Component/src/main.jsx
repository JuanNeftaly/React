import React from "react";
import ReactDOM from "react-dom/client";

// calling component
import App from "./Componentes/App.jsx";
import Apli from "./Componentes/ArrowFunc.jsx";
import Aplicate from "./Componentes/Function.jsx";
import Father from "./Componentes/Father.jsx";
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
