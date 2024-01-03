import React from "react";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

import profilePic from "../images/img-self.jpg";

import "../styles/aboutme.css";

function AboutMe() {
  return (
    <div>
      <div className="aboutme-container">
        <img src={profilePic} alt="profilepic" />
        <div className="aboutme-container-description">
          <h1>Hello!</h1>
          <p>
            My name is <strong>Joshua Kuhn.</strong>
          </p>
          <p>
            I&#39;m a project manager currently based in Belfast, UK. I have a
            passion for <strong>project management</strong> and software
            development. I created this website to demonstrate my skills in{" "}
            <strong>software development</strong> and to share projects I&#39;m
            working on.
          </p>
        </div>
      </div>
      <Skills />
      <ContactMe />
    </div>
  );
}

export default AboutMe;

/* <div className="aboutme-qualifications">
            <p>Some more of my qualifications include:</p>
            <ul>
              <li>
                Masters degree in Business Administration & Project Management
              </li>
              <li>Completed coursework in Software Development</li>
              <li>Professional Scrum Master certification</li>
            </ul>
          </div> */
