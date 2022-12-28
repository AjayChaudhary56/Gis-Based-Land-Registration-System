import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-logo">
      <Link to="/ ">Land Registry </Link>
      </div>
      <div className="navbar-items">
        <ul>
          <li>
            <Link to="/user ">User </Link>
          </li>
          <li>
            <Link to="/landInspector"> Land Inspector</Link>
          </li>
          <li>
            <Link to="/landOwner">Land Owner </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
