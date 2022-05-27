import { useEffect } from 'react'
import axios from "axios";
// import { useNavigate, Outlet } from "react-router-dom";
// import './BreadCrumb.css'

function BreadCrumb() {
  const getData = async () => {
    const { data } = await axios.get('/api/v1/emojis');
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    BreadCrumb
    </div>
  );
}

export default BreadCrumb;
