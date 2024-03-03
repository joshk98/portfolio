import React from "react";
import "../styles/skills.css";

const frontSkills = ["html5", "css3", "javascript", "react", "figma"];

const backSkills = ["nodejs", "sequelize", "postgresql", "docker"];

const otherSkills = ["bash", "git", "github", "wordpress"];

const generateImageSkills = (data) => {
  return data.map((skill, index) => ({
    id: index + 1,
    src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`,
    alt: skill,
  }));
};

const skillsMap = {
  front: generateImageSkills(frontSkills),
  back: generateImageSkills(backSkills),
  other: generateImageSkills(otherSkills),
};

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills">
        <div className="skills-type">
          <h2>Front-End</h2>
          <div className="skills-images">
            {skillsMap.front.map((skill) => (
              <div key={skill.id}>
                <img src={skill.src} alt={skill.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="skills-type">
          <h2>Back-End</h2>
          <div className="skills-images">
            {skillsMap.back.map((skill) => (
              <div key={skill.id}>
                <img src={skill.src} alt={skill.alt} />
              </div>
            ))}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              alt="amazonwebservices"
            />
          </div>
        </div>
        <div className="skills-type">
          <h2>Other</h2>
          <div className="skills-images">
            {skillsMap.other.map((skill) => (
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
