import React from "react";
import { Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <header className="first-div">
        <div className="my-name w3-animate-right">
          {" "}
          <span>&#10100;</span> Jay Leung <span>&#10101;</span>
        </div>
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
        <Row>
          <h2>Skill Set</h2>
          <h4>
            HTML5 | CSS 3 | ES6 | ReactJS | NODE.JS | MongoDB | Git | Python |
            Django | Vue
          </h4>
        </Row>
        <Row>
          <Col>
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/3074/3074119.png"
              alt="React"
            ></img>

            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/29/29104.png"
              alt="HTML"
            />
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/1045/1045957.png"
              alt="CSS"
            />
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/721/721791.png"
              alt="Javascript"
            />
          </Col>
          <Col>
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              alt="Node"
            />
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/31/31714.png"
              alt="MongoDB"
            />
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"
              alt="Git"
            />
            <img
              className="icons"
              src="https://cdn-icons-png.flaticon.com/512/1822/1822920.png"
              alt="Python"
            />
          </Col>
          <Col>
            <img
              className="icons"
              src="https://seekicon.com/free-icon-download/django_2.svg"
              alt="Django"
            />
            <img
              className="icons"
              src="https://seekicon.com/free-icon-download/vue_1.svg"
              alt="Vue"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Main;
