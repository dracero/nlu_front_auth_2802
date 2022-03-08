import { useState, useEffect} from "react";
import Cookies from 'js-cookie';
import { Link, useLocation } from "react-router-dom";

const Logout = () => {
  const location = useLocation().pathname;
  const [sid, setSid] = useState(false)
  useEffect(() => {
    Cookies.get('session') ? setSid(true) : setSid(false);
  }, []); 

  return(
    location === "/" ? 
    <a
      className="App-link"
      href="http://localhost:8080/logout"
      rel="noopener noreferrer">
      Logout
    </a> : null
  )
};

export default Logout;