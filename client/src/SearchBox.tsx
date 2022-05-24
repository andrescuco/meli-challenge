import { useState, ChangeEvent } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"
import searchIcon from "../assets/search-icon.png"
import './SearchBox.scss'

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
    <div className="grid">
      {/*<div className="search-box-container">*/}
        <img src={logo} alt="meli logo"/>
        <div className="search-box">
          <input type="text" placeholder="Nunca dejes de buscar" onChange={handleChange} />
          <button onClick={handleSubmit}>
            <img src={searchIcon} alt="magnifying glass icon"/>
          </button>
        </div>
      {/*</div>*/}
      <Outlet />
    </div>
  );
}

export default SearchBox;
