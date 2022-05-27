import { Product } from "./types";
import FreeShippingIcon from "../assets/free-shipping-icon.png"
import s from "./ProductCard.module.css";

export default function ProductCard({
  title,
  price,
  thumbnail,
  shipping,
  address
}: Product) {
  return (
    <div className={s.grid}>
    <div className={s.container}>
      <img src={thumbnail} alt={`product ${title}`} className={s.image} />

      <div className={s.info}>
      <div className={s.summary}>
        <div className={s.priceAndShipping}>
          <span className={s.price}> $ {price.toLocaleString('de-DE')}</span>
          <span>{shipping.free_shipping && <img src={FreeShippingIcon} alt="shipping truck with green background" />}</span>
        </div>
        <span>{title}</span>
      </div>

      <div className={s.state}>
        <span>{address.state_name}</span>
      </div>
      </div>
    </div>
    </div>
  );
}
