import React from "react";
import linkedinIcon from "../images/icon-linkedin.png";
import githubIcon from "../images/icon-github.png";
import emailIcon from "../images/icon-email.png";
import "../styles/contactme.css";

function ContactMe() {
  return (
    <div className="contactme-container" id="contactme-section">
      <h2>Let&#39;s keep in touch! :)</h2>
      <div className="contactme-container-links">
        <a
          href="https://linkedin.com/in/joshua-kuhn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin" />
        </a>
        <a
          href="https://github.com/joshk98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="github" />
        </a>
        <a href="mailto:joshkkuhn@gmail.com">
          <img src={emailIcon} alt="email" />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
