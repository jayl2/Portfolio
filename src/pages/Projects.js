import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      Projects
      <Container>
        <Row>
          <h1> Carson's Farm Adventure</h1>
        </Row>
        <Row>
          <h1>Gobble Resstaurant Reviews</h1>
        </Row>
        <Row>
          <h1>Quizards Quiz Cards</h1>
        </Row>
        <Row>
          <h1>PhotoShopR</h1>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
