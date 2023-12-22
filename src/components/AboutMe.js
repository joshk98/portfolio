import React from "react";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

import "../styles/aboutme.css";

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-container-description">
        Hello! I am Josh, a project manager based in Belfast, UK. I have a
        passion for web development and project management. Some of my
        qualifications include:
        <ul>
          <li>
            Masters degree in Business Administration & Project Management
          </li>
          <li>Completed coursework in Software Engineering</li>
          <li>Professional Scrum Master certification</li>
        </ul>
        I created this website to demonstrate my skills in web development and
        to share projects I am working on.
      </div>
      <Skills />
      <ContactMe />
    </div>
  );
}

export default AboutMe;
