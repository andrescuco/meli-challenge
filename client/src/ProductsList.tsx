import { BASE_URL } from "./constants";
import { Product } from "./types";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import BreadCrumb from "./BreadCrumb";
import axios from "axios";

export default function ProductsList() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const searchQuery = searchParams.get('search');

  const getProductsListData = async () => {
    const { data } = await axios.get(`${BASE_URL}/sites/MLA/search`, {
      params: { q: searchQuery }
    });

    setProducts(data.results.slice(0, 4));
    return data;
  };

  useEffect(() => {
    getProductsListData();
  }, [searchParams]);

  return (
      <>
      <BreadCrumb />
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
      </>
  );
}
