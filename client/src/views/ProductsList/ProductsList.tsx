import { Product } from "../../types";
import { BreadCrumb, LoadingScreen, ErrorScreen, ProductCard } from "../../components";
import { useProductsSearch } from "../../hooks";
import s from "./ProductList.module.css";

export default function ProductsList() {
  const { products, categories, onProductClick, hasErrors } = useProductsSearch();

  if (hasErrors) return <ErrorScreen />;
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
