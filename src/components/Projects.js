import React from "react";

import "../styles/projects.css";

const projectsData = [
  {
    id: 1,
    title: "Gourmet Guide",
    link: "https://github.com/joshk98/gourmet-guide",
    type: "App",
    src: "",
    alt: "",
    description: "",
  },
  {
    id: 2,
    title: "Breakout Game",
    link: "",
    type: "Game",
    src: "",
    alt: "",
    description: "",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <ul key={project.id} className="projects-container-card">
          <li className="projects-container-card-title">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </li>
          <li className="projects-container-card-type">{project.type}</li>
          <li className="projects-container-card-image">
            <img src={project.src} alt={project.alt} />
          </li>
          <li className="projects-container-card-description">
            {project.description}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Projects;
