import React from "react";
import "../css/contact.css";
import GoogleLogo from "../assets/Google-logo.svg";
import Phone from "../assets/phone-logo.svg";
import LinkedInLogo from "../assets/LinkedIn-logo.svg";
import GitHubLogo from "../assets/github-logo.svg";

function Contact() {
  return (
    <div className="contact" id="Contact">
      <h2 className="nunito-sans-bold title">Contact Me</h2>
      <div className="contect-container">
        <div className="contact-left-side">
          <a
            href="mailto:dharamsavsani444@gmail.com"
            className="contact-list-item"
          >
            <img
              src={GoogleLogo}
              alt="Loading..."
              height="20"
              style={{ marginRight: "20px" }}
            />
            dharamsavsani444@gmail.com
          </a>

          <a href="tel:+916355502482" className="contact-list-item">
            <img
              src={Phone}
              alt="Loading..."
              height="20"
              style={{ marginRight: "20px" }}
            />
            +91 6355502482
          </a>
        </div>
        <div className="contact-right-side">
          <a
            href="https://www.linkedin.com/in/dharam-savsani-aa76a1260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="contact-list-item"
          >
            <img
              src={LinkedInLogo}
              alt="Loading..."
              height="20"
              style={{ marginRight: "20px" }}
            />
            Dharam Savsani
          </a>

          <a
            href="https://github.com/DharamSavsani"
            className="contact-list-item"
          >
            <img
              src={GitHubLogo}
              alt="Loading..."
              height="20"
              style={{ marginRight: "20px" }}
            />
            Dharam Savsani
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
