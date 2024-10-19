import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CTAProvider } from "./contexts/CTAContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CTAProvider>
      <App />
    </CTAProvider>
  </StrictMode>
);
