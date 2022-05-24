import { BASE_URL } from "./constants";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  const getProductDetailData = async () => {
    const { data } = await axios.get(`${BASE_URL}/items/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetailData();
  }, [id]);

  if (!product) return <span>"Loading..."</span>;

  return (
    <div>
      <img src={product.thumbnail} alt={`product ${product.title}`} />
      <span>{product.price}</span>
      <span>{product.title}</span>
      <span>{product.condition}</span>
      <span>{product.sold_quantity}</span>
      <button>Comprar</button>
    </div>
  );
}
