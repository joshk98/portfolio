import React from "react";

import "../styles/projects.css";

const projectsData = [
  {
    id: 1,
    title: "Gourmet Guide",
    type: "App",
    src: "",
    alt: "",
    description: "",
  },
  {
    id: 2,
    title: "Breakout Game",
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
        <ul key={project.id} className="projects-container-list">
          <li className="projects-container-list-title">{project.title}</li>
          <li className="projects-container-list-type">{project.type}</li>
          <li className="projects-container-list-image">
            <img src={project.src} alt={project.alt} />
          </li>
          <li className="projects-container-list-description">
            {project.description}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Projects;
