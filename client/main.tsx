import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={"loading"}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
