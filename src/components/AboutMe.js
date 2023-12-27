import React from "react";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

import "../styles/aboutme.css";

function AboutMe() {
  return (
    <div>
      <div className="aboutme-container">
        <img
          src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
          alt="profilepic"
        />
        <div className="aboutme-container-description">
          <h1>Hello!</h1>
          <p>
            My name is <strong>Josh Kuhn.</strong> I am a project manager based
            in Belfast, UK. I have a passion for web development and project
            management. I created this website to demonstrate my skills in web
            development and to share projects I am working on.
          </p>
          <p>Some more of my qualifications include:</p>
          <ul>
            <li>
              Masters degree in Business Administration & Project Management
            </li>
            <li>Completed coursework in Software Engineering</li>
            <li>Professional Scrum Master certification</li>
          </ul>
        </div>
      </div>
      <Skills />
      <ContactMe />
    </div>
  );
}

export default AboutMe;
