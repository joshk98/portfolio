import React, { useState } from "react";

import "../styles/projects.css";

const projectsData = [
  {
    title: "Gourmet Guide",
    link: "https://github.com/joshk98/gourmet-guide",
    type: "App",
    src: "",
    alt: "",
    description:
      "Gourmet Guide is my final project with Command Shift aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
  },
  {
    title: "Breakout Game",
    link: "https://github.com/joshk98/game-breakout",
    type: "Game",
    src: "",
    alt: "",
    description:
      "Breakout is a game made with Phaser.js aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
  },
];

const mappedProjectsData = projectsData.map((project, index) => ({
  ...project,
  id: index + 1,
}));

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const filteredProjects = mappedProjectsData
    .filter((project) => {
      const titleMatch = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const typeMatch =
        filterType === "" ||
        project.type.toLowerCase() === filterType.toLowerCase();

      return titleMatch && typeMatch;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="projects-container">
      <div className="projects-container-search">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="App">App</option>
          <option value="Game">Game</option>
          <option value="Website">Website</option>
        </select>
      </div>

      {filteredProjects.map((project) => (
        <ul key={project.id} className="projects-container-cards">
          <li className="projects-container-cards-title">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </li>
          <li className="projects-container-cards-type">{project.type}</li>
          <li>
            <img src={project.src} alt={project.alt} />
          </li>
          <li className="projects-container-cards-description">
            {project.description}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Projects;
