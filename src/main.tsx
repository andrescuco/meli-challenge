import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import ProductDetail from "./ProductDetail";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/items/:id" element={<ProductDetail />} />
        </Route>
        {/* <Route path="items?search=" element={<ProductsList />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
