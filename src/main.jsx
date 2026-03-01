import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/CSS/index.css";
import "../src/CSS/header.css";
import "../src/CSS/home.css";
import "../src/CSS/om.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
