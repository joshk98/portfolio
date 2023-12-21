import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <NavLink to="/">About Me</NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink to="/contactme">Contact Me</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
