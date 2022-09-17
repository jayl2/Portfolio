import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      Projects
      <Container>
        <Row>
          <Col md={6}> Carson's Farm Adventure</Col>
       
          <Col md={6}>Gobble Resstaurant Reviews</Col>
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
