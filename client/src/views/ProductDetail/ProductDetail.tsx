import { useEffect, useState } from "react";
import { Product } from "../../types";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  const getProductDetailData = async () => {
    const { data } = await axios.get(`/api/items/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetailData();
  }, [id]);

  if (!product) return <span>"Loading..."</span>;

  return (
    <div className={s.grid}>
    <div className={s.container}>
      <img src={product.picture} alt={`product ${product.title}`} />

      <div className={s.info}>
        <span>{product.condition} - {product.sold_quantity} vendidos</span>
        <span>{product.title}</span>
        <span>{product.price.amount}</span>
        <button>Comprar</button>
      </div>
    </div>
    </div>
  );
}
