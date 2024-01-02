import React, { useState } from "react";
import "../styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLink } from "@fortawesome/free-solid-svg-icons";

const projectsData = [
  {
    title: "Gourmet Guide",
    link: "https://github.com/joshk98/gourmet-guide",
    description:
      "Gourmet Guide was my final group project with Command Shift. This app allows users to create and save their own recipes to a user account. I primarily took on the front-end and project management responsibilities for this project. Some of the technologies used were Javascript, CSS, HTML, React, Axios, Node, and Firebase. Asana was used for project management. Please follow the link path in the README.md to see a visual demonstration of the project's functionalities.",
  },
  {
    title: "Breakout Game",
    link: "https://github.com/joshk98/game-breakout",
    description:
      "Breakout is a game made with the Phaser.js framework. This was my first attempt using Phaser.js. I made this game by following a free tutorial available on MDN.",
  },
  {
    title: "Surreal Estate",
    link: "https://github.com/joshk98/surreal-estate",
    description:
      "The Surreal Estate App, crafted with React, offers a smooth real estate exploration using SPA architecture, client-side routing, and controlled inputs. It employs HTTP requests for dynamic data fetching and ensures secure user authentication through OAuth integration, providing a modern platform for efficient browsing of real estate listings.",
  },
  {
    title: "Weather App",
    link: "https://github.com/joshk98/weather-app",
    description:
      "The Weather App is a React-based application providing user-friendly weather forecasts. With a focus on React, JSX, and component-based architecture, it uses stateful/stateless components, React Hooks, and React Testing Library for efficient development. Users easily search for cities, access current weather, and explore forecasts, with seamless request/response handling for a smooth weather browsing experience.",
  },
  {
    title: "Book Library API",
    link: "https://github.com/joshk98/book-library",
    description:
      "The Book Library API is a comprehensive system for user account creation, book listing, and loan requests. Built with Express, node-postgres, Sequelize, and tested with Mocha/Chai, it emphasizes interpreting user stories and advanced Sequelize schema validation. Follow the installation steps, including Docker for testing, to manage reader records with CRUD operations through API endpoints.",
  },
  {
    title: "Cruise Ships GUI",
    link: "https://github.com/joshk98/cruise-ships-gui",
    description:
      "The Cruise Ships GUI, a JavaScript project, enhances the Cruise Ships simulation with an interactive graphical interface. Focused on domain modeling, object-oriented programming, and principles like Single Responsibility and dependency inversion, it lets users easily manage ship itineraries, visualize movements, and experience an animated journey while receiving informative messages about departures and arrivals.",
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
              {project.title} <FontAwesomeIcon icon={faLink} />
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
