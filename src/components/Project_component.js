import React from "react";
import "../css/project.css";
import ViewCode from "../assets/view_code.svg";

function ProjectComponent(props) {
  return (
    <div className="project-card">
      <h3 className="nunito-sans-bold project-title">{props.project_name}</h3>
      <div className="code-link">
        <a
          href={props.code_link}
          className="link nunito-sans-normal"
          target="_blank"
        >
          View Code
          <img
            src={ViewCode}
            height="17px"
            alt=""
            style={{ marginLeft: "3px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectComponent;
