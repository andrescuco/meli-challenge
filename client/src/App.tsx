import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsSearch from "./views/ProductsSearch";
import ProductDetail from "./views/ProductDetail";
import ProductsList from "./views/ProductsList";

export const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsSearch />}>
          <Route path="/items/:id" element={<ProductDetail />} />
          <Route path="/items" element={<ProductsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
