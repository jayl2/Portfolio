import React from "react";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <header className="first-div">
        <div className="my-name w3-animate-right">Jay Leung</div>
        <div>
          <p className="personal-brand w3-animate-left">
            <i>
              "I am a skilled software developer. Infused with a high level of
              attention to detail, identifying problems at ease with a strong
              ability to problem solve. I carry a diverse set of skills
              including leadership, coaching, engagement, strategic planning and
              strong ability to prioritize."
            </i>
          </p>
        </div>
      </header>
      <div className="second-div">
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/3074/3074119.png"
          alt="React"
        />
        <img
          className="icons"
          src="https://cdn-icons-png.flaticon.com/512/29/29104.png"
          alt="HTML"
        />
      </div>
    </div>
  );
};

export default Main;
