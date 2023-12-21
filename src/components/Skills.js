import React from "react";
import "../styles/skills.css";

const skillsData = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "javascript",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "react",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "html",
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "css",
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "postgresql",
  },
  {
    id: 6,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "docker",
  },
  {
    id: 7,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    alt: "aws",
  },
  {
    id: 8,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "git",
  },
  {
    id: 9,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "github",
  },
  {
    id: 10,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    alt: "jira",
  },
];

function Skills() {
  return (
    <div className="skills-container">
      {skillsData.map((skill) => (
        <div key={skill.id} className="skills-container-image">
          <img src={skill.src} alt={skill.alt} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
