import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Product } from "../../types";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./ProductDetail.module.css";
import BreadCrumb from "../../components/BreadCrumb";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  const getProductDetailData = async () => {
    const { data } = await axios.get(`/api/items/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetailData();
  }, [id]);

  if (!product) return <span>"Loading..."</span>;

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
            <button>Comprar</button>
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
