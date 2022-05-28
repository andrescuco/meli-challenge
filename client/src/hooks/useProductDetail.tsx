import { Product } from "../types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  const getProductDetailData = async () => {
    const { data } = await axios.get(`/api/items/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetailData();
  }, [id]);

  return { product };
}
