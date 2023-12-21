import React from "react";

import "../../styles/projecttemplate.css";

function ProjectTemplate() {
  return (
    <div className="template-container">
      <ul className="template-container-list">
        <li className="template-container-list-title">Title Link</li>
        <li className="template-container-list-type">Type</li>
        <li className="template-container-list-image">Image</li>
        <li className="template-container-list-description">Description</li>
        <li className="template-container-list-tech">Tech</li>
      </ul>
    </div>
  );
}

export default ProjectTemplate;
