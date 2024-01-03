import React from "react";
import "../styles/skills.css";

const frontData = ["html5", "css3", "javascript", "react", "figma"];

const backData = [
  "nodejs",
  "sequelize",
  "postgresql",
  "docker",
  "amazonwebservices",
];

const otherData = ["bash", "git", "github", "wordpress"];

const mappedFrontData = frontData.map((skill, index) => ({
  id: index + 1,
  src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`,
  alt: skill,
}));

const mappedBackData = backData.map((skill, index) => ({
  id: index + 1,
  src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`,
  alt: skill,
}));

const mappedOtherData = otherData.map((skill, index) => ({
  id: index + 1,
  src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`,
  alt: skill,
}));

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills">
        <div className="skills-type">
          <h3>Front-End</h3>
          <div className="skills-images">
            {mappedFrontData.map((skill) => (
              <div key={skill.id}>
                <img src={skill.src} alt={skill.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="skills-type">
          <h3>Back-End</h3>
          <div className="skills-images">
            {mappedBackData.map((skill) => (
              <div key={skill.id}>
                <img src={skill.src} alt={skill.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="skills-type">
          <h3>Other</h3>
          <div className="skills-images">
            {mappedOtherData.map((skill) => (
              <div key={skill.id}>
                <img src={skill.src} alt={skill.alt} />
              </div>
            ))}
            <img
              src="https://cdn.worldvectorlogo.com/logos/asana-logo.svg"
              alt="asana"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
