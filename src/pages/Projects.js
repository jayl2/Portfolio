import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1> My Projects</h1>
      <Container className='w3-animate-opacity'>
        <Row>
          <Col className='project-container' > 
          <h3>Carson's Farm Adventure</h3>
          <img className='project-image' src='https://i.imgur.com/1PpJgTf.png'></img>
          <h4>Javascript</h4>
          <p> Carson's Farm  is a children's interactive game using pure Vanilla Javascript.</p>
          <Button variant='primary'>View Page</Button>
         
          </Col>
       
          <Col className='project-container' >
          <h3>Gobble Restaurant Reviews</h3>
          <img className='project-image' src='https://i.imgur.com/YMY6L3d.png'/>
          <h4> MERN Stack</h4>
          <Button variant='primary'>View Page</Button>
          <p> Gobble was my first Full Stack project. The app enables users to Create, Read, Update
            and Delete restaurants as well as reviews.
          </p>
          </Col>
        </Row>
        <Row>
          <Col className='project-container' >
          <h3>Quizards Quiz Cards</h3>
          <img className = 'project-image' src='https://i.imgur.com/D7ytHbA.png'/>
          <h4>PERN Stack</h4>
          <Button variant='primary'>View Page</Button>
          </Col>
          <Col className='project-container' >
          <h3>PhotoShopR</h3>
          <img className='project-image' src='https://i.imgur.com/m1zBc1W.png'/>
          <h4>MERN Stack w/ Redux & JWT</h4>
          <Button variant='primary'>View Page</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
