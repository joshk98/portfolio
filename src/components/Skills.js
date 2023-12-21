import React from "react";

import "../styles/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-container-image">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="javascript"
        />
      </div>
      <div className="skills-container-image">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
        />
      </div>
      <div className="skills-container-image">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="html"
        />
      </div>
      <div className="skills-container-image">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="css"
        />
      </div>
      <div className="skills-container-image">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="git"
        />
      </div>
    </div>
  );
}

export default Skills;
