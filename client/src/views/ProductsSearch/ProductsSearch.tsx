import { useState, ChangeEvent } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
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
      <div className={s.grid}>
        <Link to="/">
          <img src={logo} alt="meli logo" />
        </Link>
        <div className={s.searchBox}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>
            <img src={searchIcon} alt="magnifying glass icon" />
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SearchBox;
