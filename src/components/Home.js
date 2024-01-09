import React from "react";
import HomeSVG from "../assets/image.svg";
import "../css/home.css";

function Home() {
  return (
    <div className="home" id="Home">
      <div className="left-side">
        <h5 className="nunito-sans-normal" style={{ color: "#ffffff" }}>
          Hey, I am Dharam...
        </h5>
        <h1 className="nunito-sans-bold-italic typing-text">
          *Let's built something
          <strong style={{ color: "#fff" }}> Great</strong> together...
        </h1>
        <h4 className="nunito-sans-normal quate">
          I am seeking a role in a company where I can contribute my Ideas,
          Technical skills, and Programming Knowledge. So that I can get
          mentored towards a successful career.
        </h4>
      </div>
      <div className="right-side">
        <img src={HomeSVG} height="300px" alt="Loading..." />
      </div>
    </div>
  );
}

export default Home;
