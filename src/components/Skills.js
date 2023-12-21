import React from "react";
import "../styles/skills.css";

const skillsData = [
  "javascript",
  "react",
  "html5",
  "css3",
  "postgresql",
  "docker",
  "amazonwebservices",
  "git",
  "github",
  "jira",
];

const mappedSkillsData = skillsData.map((skill, index) => ({
  id: index + 1,
  src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`,
  alt: skill,
}));

function Skills() {
  return (
    <div className="skills-container">
      {mappedSkillsData.map((skill) => (
        <div key={skill.id} className="skills-container-image">
          <img src={skill.src} alt={skill.alt} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
