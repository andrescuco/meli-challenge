import FreeShippingIcon from "../../../assets/free-shipping-icon.png";
import s from "./ProductCard.module.css";

type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  picture: string;
  hasFreeShipping: boolean;
  stateName: string;
  onProductClick: (productId: string) => void;
};

export default function ProductCard({
  id,
  title,
  price,
  picture,
  hasFreeShipping,
  stateName,
  onProductClick,
}: ProductCardProps) {
  return (
    <div className={s.grid}>
      <div className={s.container} onClick={() => onProductClick(id)}>
        <img src={picture} alt={`product ${title}`} className={s.image} />

        <div className={s.info}>
          <div className={s.summary}>
            <div className={s.priceAndShipping}>
              <span className={s.price}> $ {price.toLocaleString()}</span>
              <span>
                {hasFreeShipping && (
                  <img
                    src={FreeShippingIcon}
                    alt="shipping truck with green background"
                  />
                )}
              </span>
            </div>
            <span>{title}</span>
          </div>

          <div className={s.state}>
            <span>{stateName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
