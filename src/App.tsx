import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Product } from "./types";
import { Link, Outlet } from "react-router-dom";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import axios from "axios";

const BASE_URL = "https://api.mercadolibre.com";
const otherEndpoint = "https://api.mercadolibre.com/items/:id";
const anotherEndpoint =
  "https://api.mercadolibre.com/items/:id%E2%80%8B/description";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const loadListData = async () => {
    const { data } = await axios.get(`${BASE_URL}/sites/MLA/search`, {
      params: { q: searchQuery }
    });

    setProducts(data.results);
    return data;
  };

  const handleChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = () => {
    loadListData();
  };

  // Seach breadcrumpb

  return (
    <div className="App">
      <SearchBox handleChange={handleChange} handleSubmit={handleSubmit} />
      <Outlet />
      {products.map((product: Product) => (
        <Link to={`/items/${product.id}`} key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            shipping={product.shipping}
            address={product.address}
          />
        </Link>
      ))}
    </div>
  );
}

export default App
