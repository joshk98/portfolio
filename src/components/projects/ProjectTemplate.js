import React from "react";

import "../../styles/projectcard.css";

function ProjectTemplate() {
  return (
    <div className="projectcard-container">
      <ul className="projectcard-container-list">
        <li className="projectcard-container-list-item">Title</li>
        <li className="projectcard-container-list-item">Type</li>
        <li className="projectcard-container-list-item">Image</li>
        <li className="projectcard-container-list-item">Description</li>
      </ul>
    </div>
  );
}

export default ProjectTemplate;
