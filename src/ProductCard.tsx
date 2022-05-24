import { Product } from "./types";

type ProductCardProps = Product;

export default function ProductCard({
  id,
  title,
  price,
  thumbnail,
  shipping,
  address
}: ProductCardProps) {
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
