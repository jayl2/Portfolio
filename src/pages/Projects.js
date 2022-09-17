import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      Projects
      <Container>
        <Row>
          <Col > 
          <h1>Carson's Farm Adventure</h1>
          <img className='farm' src='https://i.imgur.com/1PpJgTf.png'></img>
          <img className='farm'src='https://i.imgur.com/kjCJZUE.png'></img>
          </Col>
       
          <Col>
          <h1>Gobble Resstaurant Reviews</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1>Quizards Quiz Cards</h1>
          </Col>
          <Col>
          <h1>PhotoShopR</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
