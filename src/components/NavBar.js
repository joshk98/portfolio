import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "../styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink to="/">About Me</NavLink>

      <NavLink to="/projects">Projects</NavLink>
      <a href="/#contactme-section">
        <FontAwesomeIcon icon={faPaperPlane} alt="contactme" />
      </a>
    </nav>
  );
}

export default NavBar;
