import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

import { ApiProvider } from "./store/GetApi.jsx";

createRoot(document.getElementById("root")).render(
  <ApiProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ApiProvider>
);
