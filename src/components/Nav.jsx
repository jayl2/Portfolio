import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link className="nav-links" to="/">
        {" "}
        Main
      </Link>
      <Link className="nav-links" to="/about">
        {" "}
        About Me{" "}
      </Link>
      <Link className="nav-links" to="/projects">
        Projects{" "}
      </Link>
      <Link className="nav-links" to="/resume">
        {" "}
        Resume
      </Link>
    </div>
  );
};

export default Nav;
