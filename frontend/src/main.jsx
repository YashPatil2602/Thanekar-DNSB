console.info("Thanekar DNSB production boot 20260911-1105");
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import App from "./App";
import "./components/PremiumGold.css";

createRoot(document.getElementById("root")).render( <
    StrictMode >
    <
    App / >
    <
    /StrictMode>
)