import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Collers } from "./screens/Collers";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Collers />
  </StrictMode>,
);
