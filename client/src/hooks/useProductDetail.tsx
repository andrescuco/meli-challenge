import { Product } from "../types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  const getProductDetailData = async () => {
    try {
      const { data } = await axios.get(`/api/items/${id}`);
      setProduct(data);
    } catch (error) {
      console.error(error);
      setHasErrors(true);
    }
  };

  useEffect(() => {
    getProductDetailData();
  }, [id]);

  return { product, hasErrors };
}
