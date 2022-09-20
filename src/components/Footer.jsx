import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a href="https://github.com/jayl2" target="_blank">
          <img
            className="footer-icon"
            src="https://seekicon.com/free-icon-download/github_18.svg"
            alt="git"
          />
        </a>
        <a href="http://www.linkedin.com/in/jay-leung1" target="_blank">
          <img
            className="footer-icon"
            src="https://seekicon.com/free-icon-download/linkedin-circle_1.svg"
            alt="LinkedIn"
          />
        </a>
        <a href="mailto:jayleungg@gmail.com" target="_blank">
          <img
            className="footer-icon"
            src="https://seekicon.com/free-icon-download/mail-outline_1.svg"
            alt="git"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
