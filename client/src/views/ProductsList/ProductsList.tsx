import { Product } from "../../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import BreadCrumb from "../../components/BreadCrumb";
import axios from "axios";
import s from "./ProductList.module.css";

export default function ProductsList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const searchQuery = searchParams.get('search');

  const getProductsListData = async () => {
    const { data } = await axios.get(`/api/items`, {
      params: { search: searchQuery }
    });

    setProducts(data.items);
    return data;
  };

  const onProductClick = (productId: string) => {
    navigate(`/items/${productId}`);
  }

  useEffect(() => {
    getProductsListData();
  }, [searchParams]);

  return (
    <div className={s.container}>
      <BreadCrumb />
      {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price.amount}
            picture={product.picture}
            hasFreeShipping={product.free_shipping}
            stateName={product.state_name}
            onProductClick={onProductClick}
          />
      ))}
    </div>
  );
}
