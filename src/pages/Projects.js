import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="projects-page">
      <h1> My Projects</h1>
      <Container className="w3-animate-opacity">
        <Row>
          <Col className="project-container">
            <h3>Carson's Farm Adventures</h3>
            <img
              className="project-image"
              src="https://i.imgur.com/1PpJgTf.png"
              alt="carson"
            ></img>
            <h4>Javascript</h4>
            <p>
              {" "}
              Carson's Farm is a children's interactive game built with HTML,
              CSS and Vanilla Javascript. It is a game to build children's
              understanding of the Alphabet.
            </p>
            <Button
              href="http://carson.surge.sh"
              target="_blank"
              variant="primary"
            >
              View Demo
            </Button>
          </Col>
          <Row>
            <Col className="project-container">
              <h3>Gobble Restaurant Reviews</h3>
              <img
                className="project-image"
                src="https://i.imgur.com/YMY6L3d.png"
                alt="gobble"
              />
              <h4> MERN Stack</h4>
              <Button
                href="https://secure-eyrie-75280.herokuapp.com/"
                target="_blank"
                variant="primary"
              >
                View Demo
              </Button>
              <p>
                {" "}
                Gobble was my first Full Stack project. The app enables users to
                Create, Read, Update and Delete restaurants as well as reviews.
              </p>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col className="project-container">
            <h3>Quizards Quiz Cards</h3>
            <img
              className="project-image"
              src="https://i.imgur.com/D7ytHbA.png"
              alt="quiz"
            />
            <h4>PERN Stack</h4>
            <p>
              Quizards is study tool where students are able to create flash
              cards to study. Users able to sign up and log in to create unique
              subjects and questions around the area of study.
            </p>
            <Button
              href="https://quizcardz.herokuapp.com/"
              target="_blank"
              variant="primary"
            >
              View Demo
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="project-container">
            <h3>PhotoShopR</h3>
            <img
              className="project-image"
              src="https://i.imgur.com/m1zBc1W.png"
              alt="photoshpr"
            />
            <h4>MERN Stack w/ Redux & JWT</h4>
            <p>
              An eCommerce website for users to shop for photograpgy items. This
              project was created with Postgres for the backend, React for the
              front end with Redux to manage state and JWT for authentication.
            </p>
            <Button variant="primary">View Demo</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
