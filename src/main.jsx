import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/pages/header.css";
import "../src/pages/home.css";
import "../src/pages/om.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
