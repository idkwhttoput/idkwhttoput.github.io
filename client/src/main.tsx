import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.title = "John Doe | Portfolio";
createRoot(document.getElementById("root")!).render(<App />);
