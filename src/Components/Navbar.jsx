import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo.png';
import './Navbar.css';

const TopNavbar = () => {
  const menuData = [
    { path: '#home', name: 'Home' },
    { path: '#projects', name: 'Projects' },
    { path: '#skills', name: 'Skills' },
    { path: '#experience', name: 'Experience' },
    { path: '#contact', name: 'Contact' },
  ];

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <Nav.Link
                href={item.path}
                key={item.name}
                className="list-item"
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
