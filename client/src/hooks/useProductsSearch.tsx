import { Product } from "../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useProductsSearch() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>();
  const [categories, setCategories] = useState<string[]>([]);
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const navigate = useNavigate();
  const searchQuery = searchParams.get("search");

  const getProductsListData = async () => {
    try {
      const { data } = await axios.get(`/api/items`, {
        params: { search: searchQuery },
      });

      setProducts(data.items);
      setCategories(data.categories);
      return data;
    } catch (error) {
      console.error(error);
      setHasErrors(true);
    }
  };

  const onProductClick = (productId: string) => {
    navigate(`/items/${productId}`);
  };

  useEffect(() => {
    getProductsListData();
  }, [searchParams]);

  return { products, categories, onProductClick, hasErrors }
}
