import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsSearch, ProductDetail, ProductsList } from "./views";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductsSearch />}>
        <Route path="/items/:id" element={<ProductDetail />} />
        <Route path="/items" element={<ProductsList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
