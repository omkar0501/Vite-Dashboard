import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Portfolio.css'
import { Link } from 'react-router-dom';

function NavbarPortfolio() {
  return (
    <div>
        
        <Navbar expand="lg" className='nav-bgc' sticky="top">
      <Container>
        <Navbar.Brand href="#home">
        <img src="sanket.jpeg" className='sanket-icon' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="nav-i" >HOME</Nav.Link>
            <Nav.Link className="nav-i"  >ABOUT</Nav.Link>
            <Nav.Link  className="nav-i" >SKILLS</Nav.Link>
              <Nav.Link  className="nav-i" >PROJECTS</Nav.Link>
              <Nav.Link  className="nav-i" >CONTACT </Nav.Link>
          </Nav>      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  

    </div>
  )
}

export default NavbarPortfolio