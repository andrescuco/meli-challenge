import { useState, ChangeEvent } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import './SearchBox.css'

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
    <div>
      <input type="text" onChange={handleChange} />
      <input type="button" value="Submit" onClick={handleSubmit} />
      <Outlet />
    </div>
  );
}

export default SearchBox;
