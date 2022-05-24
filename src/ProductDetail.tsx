import { useEffect, useState } from "react";
import { Product } from "./types";
import axios from "axios";

type ProductCardProps = Product & {
  onClickBuy: () => void;
  condition: string;
  sold_quantity: number;
};

const BASE_URL = "https://api.mercadolibre.com";

export default function ProductDetail() {
  //{
  // id,
  // title,
  // price,
  // thumbnail,
  // shipping,
  // address,
  // onClickBuy,
  // condition,
  // sold_quantity
  //}
  const [productData, setProductData] = useState();

  const loadProductDetailData = async (id = "MLA935826998") => {
    const { data } = await axios.get(`${BASE_URL}/items/${id}`);

    console.log(data);
    setProductData(data);
  };

  useEffect(() => {
    loadProductDetailData();
  }, []);

  if (!productData) return "Loading...";

  return (
    <div>
      <img src={productData.thumbnail} alt={`product ${productData.title}`} />
      <span>{productData.price}</span>
      <span>{productData.title}</span>
      <span>{productData.condition}</span>
      <span>{productData.sold_quantity}</span>
      <button>Comprar</button>
    </div>
  );
}
