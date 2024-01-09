import React from "react";
import "../css/skills.css";
import FlutterLogo from "../assets/flutter-plain.svg";
import ReactNativeLogo from "../assets/react-native-logo.svg";
import AndroidLogo from "../assets/android-logo.svg";
import ExpressLogo from "../assets/express-logo.svg";
import ReactLogo from "../assets/react-logo.svg";
import CLogo from "../assets/c-logo.svg";
import JavaLogo from "../assets/java-logo.svg";
import JavaScriptLogo from "../assets/javascript-logo.svg";
import MongoDBLogo from "../assets/mongodb-logo.svg";
import PhpLogo from "../assets/php-logo.svg";

function Skills() {
  return (
    <div className="skills" id="Skills">
      <h2 className="nunito-sans-bold title" >
        My Skills
      </h2>
      <div className="skill-cards">
        <SkillCard logo={FlutterLogo} skill="Flutter" />
        <SkillCard logo={ReactNativeLogo} skill="React Native" />
        <SkillCard logo={AndroidLogo} skill="Android" />
        <SkillCard logo={ExpressLogo} skill="Express" />
        <SkillCard logo={ReactLogo} skill="ReactJS" />
        <SkillCard logo={PhpLogo} skill="PHP" />
        <SkillCard logo={JavaScriptLogo} skill="JavaScript" />
        <SkillCard logo={CLogo} skill="C++" />
        <SkillCard logo={JavaLogo} skill="JAVA" />
        <SkillCard logo={MongoDBLogo} skill="MongoDBMS" />
      </div>
    </div>
  );
}

function SkillCard(props) {
  return (
    <div className="skill">
      <img
        className="skill-logo"
        height="30"
        src={props.logo}
        alt="Loading..."
      />
      <h5 className="skill-name nunito-sans-bold">{props.skill}</h5>
    </div>
  );
}

export default Skills;
