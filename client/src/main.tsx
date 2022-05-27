import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "./App";
import axios from "axios";
import './index.css'

// [ ] 4. Add tests
// [ ] 1. Use new endpoints
// [ ] 2. Finish styling
// [ ] 3. Refractor styles
// [ ] 5. Bugs / retouches
  // [ ] *. Clicking on the logo should go back to the previous search
  // [ ] *. Loading state
  // [ ] *. List shouldn't be clickable from the outside
  // [ ] *. Add /views and /components top level index.ts
  // [ ] *. Add favicon
  // [ ] *. Run global prettier
// [ ] 6. Documentation

axios.defaults.baseURL = `http://localhost:5000`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
