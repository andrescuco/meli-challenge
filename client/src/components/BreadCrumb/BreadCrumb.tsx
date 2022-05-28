import { Container, Row, Col } from "react-bootstrap";
import s from "./BreadCrumb.module.css";

type BreadCrumbProps = {
  categories: string[];
};

function BreadCrumb({ categories }: BreadCrumbProps) {
  return (
    <Container fluid>
    <Row>
    <Col xs={{ span: 11, offset: 1 }} className={s.breadcrumbs}>
        {categories.map((category: string, index) => {
          const isLastCategory = index === categories.length - 1;

          if (isLastCategory) return <span>&nbsp;{category}</span>;
          return <span>&nbsp;{category} &gt;</span>
        })}
    </Col>
    </Row>
    </Container>
  );
}

export default BreadCrumb;
