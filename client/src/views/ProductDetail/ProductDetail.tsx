import { Container, Row, Col } from "react-bootstrap";
import { BreadCrumb, LoadingScreen, ErrorScreen, Button } from "../../components"
import { useProductDetail } from "../../hooks";
import s from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { product, hasErrors } = useProductDetail();

  if (hasErrors) return <ErrorScreen />;
  if (!product) return <LoadingScreen />;

  return (
    <div className={s.container}>
    <BreadCrumb categories={product.categories ?? []} />
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 1 }} className={`${s.content} g-0`}>
          <img src={product.picture} alt={`product ${product.title}`} />
        </Col>
        <Col md={{ span: 1 }} style={{ backgroundColor: "white" }}></Col>
        <Col md={{ span: 3 }} className={`${s.content} g-0`}>
          <div className={s.info}>
            <span className={s.quantityAndSold}>
              {product.condition} - {product.sold_quantity} vendidos
            </span>
            <span className={s.title}>{product.title}</span>
            <span className={s.price}>$ {product.price.amount.toLocaleString('es-CO')}</span>
            <Button>Comprar</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 7, offset: 1 }} className={`${s.content} g-0`}>
          <section className={s.description}>
            <h2>Descripción del producto</h2>
            <p>{product.description}</p>
          </section>
        </Col>
        <Col md={{ span: 3 }} className={`${s.content} g-0`}></Col>
      </Row>
    </Container>
    </div>
  );
}
