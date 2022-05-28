import { Container, Row, Col } from "react-bootstrap";
import { ChevronRight } from 'react-bootstrap-icons';
import s from "./BreadCrumb.module.css";

type BreadCrumbProps = {
  categories: string[];
};

function BreadCrumb({ categories }: BreadCrumbProps) {
  return (
    <Container fluid>
      <Row>
        <Col xs={{ span: 11, offset: 1 }} className="g-0">
          <div className={s.breadcrumbs}>
            {categories.map((category: string, index) => {
              const isLastCategory = index === categories.length - 1;

              if (isLastCategory) return <span>&nbsp;<b>{category}</b></span>;
              return <span>&nbsp;{category} <ChevronRight /></span>
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BreadCrumb;
