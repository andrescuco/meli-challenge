import { useState, ChangeEvent, useEffect, KeyboardEvent } from "react";
import { useNavigate, Outlet, Link, useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import searchIcon from "../../../assets/search-icon.png";
import s from "./ProductsSearch.module.css";

function SearchBox() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = () => {
    if (searchQuery.length) navigate(`/items?search=${searchQuery}`);
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    const searchQueryParams = searchParams.get("search");
    if (searchQueryParams) setSearchQuery(searchQueryParams);
  }, []);

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
              onKeyPress={handleEnterPress}
              onChange={handleChange}
              value={searchQuery}
            />
            <button onClick={handleSubmit} type="submit">
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
