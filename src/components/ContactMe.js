import React from "react";
import "../styles/contactme.css";

function ContactMe() {
  return (
    <div className="contactme-container">
      Let us stay in touch!
      <div className="contactme-container-links">
        <a
          href="https://linkedin.com/in/joshua-kuhn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/joshk98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="github"
          />
        </a>
        <a href="mailto:joshkkuhn@gmail.com">
          <img
            src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg"
            alt="email"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
