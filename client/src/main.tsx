import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBox from './SearchBox'
import ProductDetail from "./ProductDetail";
import ProductsList from "./ProductsList";
import axios from "axios";
import './index.css'

axios.defaults.baseURL = `http://localhost:5000`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBox />}>
          <Route path="/items/:id" element={<ProductDetail />} />
          <Route path="/items" element={<ProductsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
