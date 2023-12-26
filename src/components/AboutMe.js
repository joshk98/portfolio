import React from "react";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

import "../styles/aboutme.css";

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-container-description">
        Hello! I am Josh, a project manager based in Belfast, UK. I have a
        passion for web development and project management. I created this
        website to demonstrate my skills in web development and to share
        projects I am working on.
      </div>
      <Skills />
      <ContactMe />
    </div>
  );
}

export default AboutMe;
