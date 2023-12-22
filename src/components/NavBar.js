import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar-container">
      <ul className="navbar-container-list">
        <li>
          <NavLink to="/">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
