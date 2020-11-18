import React from 'react';

// import { Nav, NavContainer } from './styles';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavbarComponent() {
  return (
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/">Action</NavDropdown.Item>
        <NavDropdown.Item href="/">Another action</NavDropdown.Item>
        <NavDropdown.Item href="/">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>    
  </Navbar>
</>

  );
}

export default NavbarComponent;