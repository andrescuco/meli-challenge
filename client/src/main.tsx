import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import axios from "axios";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

// [x] 4. Add tests
// [x] 1. Use new endpoints
// [x] 2. Finish styling
// [x] 3. Refractor styles
// [ ] 5. Bugs / retouches
// [ ] *. Clicking on the logo should go back to the previous search
// [ ] *. Loading state
// [x] *. List shouldn't be clickable from the outside
// [ ] *. Add /views and /components top level index.ts
// [x] *. Add favicon
// [x] *. Run global prettier
// [ ] 6. Documentation

axios.defaults.baseURL = `http://localhost:5000`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
