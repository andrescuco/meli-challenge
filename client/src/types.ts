export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Product = {
  id: string;
  condition?: string;
  sold_quantity?: string;
  free_shipping: boolean;
  picture: string;
  price: Price;
  state_name: string;
  title: string;
};
