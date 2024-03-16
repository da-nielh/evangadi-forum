import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import classes from './header.module.css';

function Header() {
  return (
    <div className={classes.header__contaier}>
      <Navbar expand="lg" className={classes.container}>
        <Container>
          <Navbar.Brand className={classes.Logo__container}>
            <Nav.Link href='#'>
              <img src="https://www.evangadi.com/themes/humans/assets/hammerlook/img/misc/evangadi-logo-black.png" alt="evangadi logo" />
            </Nav.Link>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  className={classes.Link__container}>
            <Nav>
              <Nav.Link className='fw-bold' href='#'>Home</Nav.Link>
              <Nav.Link className='fw-bold' href='#'>How it Works</Nav.Link>
            </Nav>
            <Nav>
              <Button className='ms-3' variant="primary">SIGN IN</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
