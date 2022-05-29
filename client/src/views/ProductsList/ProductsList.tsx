import { Product } from "../../types";
import useProductsSearch from "../../hooks/useProductsSearch";
import ProductCard from "../../components/ProductCard";
import BreadCrumb from "../../components/BreadCrumb";
import s from "./ProductList.module.css";
import LoadingScreen from "../../components/LoadingScreen";

export default function ProductsList() {
  const { products, categories, onProductClick } = useProductsSearch();

  if (!products) return <LoadingScreen />;

  return (
    <div className={s.container}>
      <BreadCrumb categories={categories} />
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
