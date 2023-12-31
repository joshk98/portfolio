import React, { useState } from "react";
import "../styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const projectsData = [
  {
    title: "Gourmet Guide",
    link: "https://github.com/joshk98/gourmet-guide",
    description:
      "Gourmet Guide is my final project with Command Shift aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
  },
  {
    title: "Breakout Game",
    link: "https://github.com/joshk98/game-breakout",
    description:
      "Breakout is a game made with Phaser.js aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
  },
];

const mappedProjectsData = projectsData.map((project, index) => ({
  ...project,
  id: index + 1,
}));

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = mappedProjectsData
    .filter(({ title }) => {
      const titleMatch = title.toLowerCase().includes(searchTerm.toLowerCase());
      return titleMatch;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="projects-container">
      <div className="projects-container-search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="projects-container-cards-group">
        {filteredProjects.map((project) => (
          <div key={project.id} className="projects-container-card">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.title}
            >
              {project.title}
            </a>
            <div className="projects-container-card-description">
              {project.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
