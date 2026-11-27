import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const TinaPreview = import.meta.env.MODE === "cms" && window.parent !== window
  ? lazy(() => import("./TinaPreview"))
  : null;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {TinaPreview ? (
        <Suspense fallback={null}>
          <TinaPreview><App /></TinaPreview>
        </Suspense>
      ) : <App />}
    </BrowserRouter>
  </React.StrictMode>
);
