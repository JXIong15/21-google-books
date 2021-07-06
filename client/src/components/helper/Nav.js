import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav navbar">
      <li className="nav-item">
        <Link to="/">
          Google Books
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