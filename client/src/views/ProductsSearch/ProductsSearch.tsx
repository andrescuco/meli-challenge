import { useState, ChangeEvent } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import searchIcon from "../../../assets/search-icon.png";
import s from "./ProductsSearch.module.css";

function SearchBox() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = () => {
    navigate(`/items?search=${searchQuery}`);
  };

  return (
    <>
      <Container fluid className={s.container}>
        <Row>
          <Col
            md={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
            className={`${s.searchBox} g-0`}
          >
            <Link to="/">
              <img src={logo} alt="meli logo" className={s.logo} />
            </Link>
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>
              <img src={searchIcon} alt="magnifying glass icon" />
            </button>
          </Col>
        </Row>
      </Container>

      <Outlet />
    </>
  );
}

export default SearchBox;
