import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Strip .html extensions from URL for SPA routing (fixes Google-indexed URLs with .html)
const path = window.location.pathname;
if (path.endsWith('.html') && path !== '/index.html') {
  const cleanPath = path.slice(0, -5);
  window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
}

createRoot(document.getElementById("root")!).render(<App />);
