import { useState, ChangeEvent } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
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
  <>
    <div className="search-container">
      <input type="text" placeholder="Nunca dejes de buscar" onChange={handleChange} />
      <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
      <Outlet />
      </>
  );
}

export default SearchBox;
