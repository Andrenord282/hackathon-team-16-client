import React from "react";
import ReactDOM from "react-dom/client";

import App from "App";
import "index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const modalRoot = document.getElementById("modal-root");

root.render(<App />);
