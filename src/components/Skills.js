import React from "react";
import "../styles/skills.css";

const skillsData = [
  "javascript",
  "react",
  "html5",
  "css3",
  "figma",
  "nodejs",
  "git",
  "postgresql",
  "docker",
  "amazonwebservices",
  "wordpress",
];

const mappedSkillsData = skillsData.map((skill, index) => ({
  id: index + 1,
  src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`,
  alt: skill,
}));

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-container-images">
        {mappedSkillsData.map((skill) => (
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
  );
}

export default Skills;
