import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/">
          <span>Google Books</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/search">
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/saved">
          Saved
        </Link>
      </li>
    </ul>
  );
}

export default Nav;