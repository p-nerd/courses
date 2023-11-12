import "solid-devtools";
import "./index.css";

import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import App from "./App";

const root = document.getElementById("root");

render(
    () => (
        <Router>
            <App />
        </Router>
    ),
    root!,
);
