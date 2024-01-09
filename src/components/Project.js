import React from "react";
import "../css/project.css";
import ProjectComponent from "./Project_component";

function Project() {
  return (
    <div className="project" id="Projects">
      <h2 className="nunito-sans-bold title">Projects Done by Me</h2>
      <div className="project-card-container">
        <ProjectComponent
          project_name="Home Automation System (Android, Fire-Base)"
          code_link="https://github.com/DharamSavsani/HomeAutomation-Android"
        />
        <ProjectComponent
          project_name="Home Automation System (Flutter, ExpressJS, MongoDBMS)"
          code_link="https://github.com/DharamSavsani/HomeAutomation-Flutter"
        />
        <ProjectComponent
          project_name="Home Automation System (React-Native Expo, Express, MongoDBMS)"
          code_link="https://github.com/DharamSavsani/HomeAutomation-Expo"
        />
        <ProjectComponent
          project_name="Home Automation System - Backend (Render As Express Server)"
          code_link="https://github.com/DharamSavsani/HomeAutomation-BackEnd"
        />
        <ProjectComponent
          project_name="News App (React)"
          code_link="https://github.com/DharamSavsani/Newsapp"
        />
        <ProjectComponent
          project_name="Legal Record System - *Under Development)"
          code_link="https://github.com/DharamSavsani/Legal-Record-System"
        />
      </div>
    </div>
  );
}

export default Project;
