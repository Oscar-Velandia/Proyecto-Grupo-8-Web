import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  Button,
  DropdownButton,
  Dropdown,
  Row,
  Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    cookies.remove('_s');
    window.location.reload();
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" id="navbar-in">
            {/* Logo
            <img
              id="navbar-img"
              src={
                'https://www.misiontic2022.gov.co/746/channels-642_misiontic_logo.png'
              }
            />
              */}
            EASY AGENDA+
            <span id="navbar-sub-brand"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>

            <DropdownButton title="Login">
               <Dropdown.Item href="/login">
                Iniciar sesion
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => this.logout()}>
                Cerrar sesión
              </Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
            <Button href="/calendario">
              Calendario
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
