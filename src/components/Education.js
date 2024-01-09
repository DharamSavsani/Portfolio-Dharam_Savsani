import React from "react";
import "../css/education.css";
import TimmeStamp from "../assets/time-stamp.svg";
import TimmeStamp2 from "../assets/time-stamp2.svg";

function Education() {
  return (
    <div className="education" id="Education">
      <h2 className="nunito-sans-bold title">Education</h2>
      <div className="container">
        <div className="time-stamp">
          <b className="nunito-sans-bold time">Pursuing</b>
          <img src={TimmeStamp} height="70" alt="Loading..." />
          <p className="nunito-sans-normal college ">
            <b> Gandhinagar University -</b> B.Tech (Information Technology)
          </p>
        </div>
        <div className="time-stamp">
          <b className="nunito-sans-bold time">2020-2023</b>
          <img src={TimmeStamp} height="70" alt="Loading..." />
          <p className="nunito-sans-normal college">
            <b>Government Polytechnic Rajkot - </b>Diploma (Information
            Technology)
            <p>9.80/10 CGPA</p>
          </p>
        </div>
        <div className="time-stamp">
          <b className="nunito-sans-bold time">2019-2020</b>
          <img src={TimmeStamp2} className="last-time-stamp" height="8" alt="Loading..." />
          <p className="nunito-sans-normal college">
            <b>K.G. Dholakiya Rajkot -</b> SSC <p>86%</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
