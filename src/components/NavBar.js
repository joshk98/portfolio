import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar-container">
      <ul className="navbar-container-list">
        <li className="navbar-container-list-aboutme">
          <NavLink to="/">About Me</NavLink>
        </li>
        <li className="navbar-container-list-projects">
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
