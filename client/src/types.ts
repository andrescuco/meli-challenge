export type Address = {
  state_name: string;
};

export type Shipping = {
  free_shipping: boolean;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  condition?: string;
  sold_quantity?: number;
  shipping: Shipping;
  address: Address;
};
