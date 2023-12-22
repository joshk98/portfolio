import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
        <li>
          <a href="/#contactme-section">
            <FontAwesomeIcon icon={faPaperPlane} alt="contactme" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
