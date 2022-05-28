import { Container, Row, Col } from "react-bootstrap";
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
    <Container fluid>
      <Row>
        <Col md={{ span: 10, offset: 1 }} className={s.container}>
          <Row onClick={() => onProductClick(id)}>
            <Col md={{ span: 8 }} className={s.content}>
              <div className={s.image} >
                <img src={picture} alt={`product ${title}`}/>
              </div>

              <div className={s.info}>
                <div className={s.summary}>
                  <div className={s.priceAndShipping}>
                    <span className={s.price}>$ {price.toLocaleString('es-CO')}</span>
                      {hasFreeShipping && (
                        <img
                          src={FreeShippingIcon}
                          alt="shipping truck with green background"
                        />
                      )}
                  </div>
                  <span>{title}</span>
                </div>
              </div>
            </Col>

            <Col md={{ span: 2, offset: 2 }}>
              <div className={s.state}>
                <span>{stateName}</span>
              </div>
            </Col>
          </Row>
          <div className={s.separator}></div>
        </Col>
      </Row>
    </Container>
  );
}
