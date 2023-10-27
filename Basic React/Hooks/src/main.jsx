import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// importando
import Contador from "./components/contador.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>
);
