import { Product } from "./types";

export default function ProductCard({
  title,
  price,
  thumbnail,
  shipping,
  address
}: Product) {
  return (
    <div>
      <img src={thumbnail} alt={`product ${title}`} />
      <span>{price}</span>
      <span>{shipping.free_shipping && "Free shipping!"}</span>
      <span>{title}</span>
      <span>{address.state_name}</span>
    </div>
  );
}
