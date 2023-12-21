import React from "react";

import "../../styles/projecttemplate.css";

function ProjectTemplate() {
  return (
    <div className="projectcard-container">
      <ul className="projectcard-container-list">
        <li className="projectcard-container-list-title">Title</li>
        <li className="projectcard-container-list-type">Type</li>
        <li className="projectcard-container-list-image">Image</li>
        <li className="projectcard-container-list-description">Description</li>
        <li className="projectcard-container-list-link">Link</li>
      </ul>
    </div>
  );
}

export default ProjectTemplate;
