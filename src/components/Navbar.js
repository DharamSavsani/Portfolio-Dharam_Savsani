import React from "react";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nunito-sans-bold name">Dharam Savsani</div>
      <div className="nav-links">
        <a href="#Home" className="nunito-sans-normal nav-link">
          Home
        </a>
        <a href="#Projects" className="nunito-sans-normal nav-link">
          Projects
        </a>
        <a href="#Skills" className="nunito-sans-normal nav-link">
          Skills
        </a>
        <a href="#Education" className="nunito-sans-normal nav-link">
          Education
        </a>
      </div>
      <a href="#Contact" className="contect-button contect-link">
        <p className="nunito-sans-normal contect-link">Contact Me</p>
      </a>
    </div>
  );
}

export default Navbar;
