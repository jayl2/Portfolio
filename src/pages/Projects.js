import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1> My Projects</h1>
      <Container className='w3-animate-opacity'>
        <Row>
          <Col > 
          <h1>Carson's Farm Adventure</h1>
          <img className='project-image' src='https://i.imgur.com/1PpJgTf.png'></img>
          <h4>Javascript</h4>
          <p> Carson's Farm  is a children's interactive game using pure Vanilla Javascript.</p>
         
          </Col>
       
          <Col>
          <h1>Gobble Restaurant Reviews</h1>
          <img className='project-image' src='https://i.imgur.com/YMY6L3d.png'/>
          <h4> MERN Stack</h4>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1>Quizards Quiz Cards</h1>
          <img className = 'project-image' src='https://i.imgur.com/D7ytHbA.png'/>
          <h4>PERN Stack</h4>
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
