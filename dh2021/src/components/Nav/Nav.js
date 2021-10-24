import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css"
import Logo from "../../imgs/logo2.png"
// import Link from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container id="container-size">
          <Navbar.Brand href="/">
            <img src={Logo} alt="Noctua Logo: Noctua text with owl wings" width="180px"/>
            {/* Noctua */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navContainer mr-auto">
              {/* <Nav.Link className= "mr-sm-2 navText" style={{color: "black", fontSize: "1.5rem", fontWeight: "bold"}} href="/goals">Goals</Nav.Link> */}
              <Nav.Link href="/goals" className="nav-item">Goals</Nav.Link>
              <Nav.Link href="/stickerboard" className="nav-item">Sticker Board</Nav.Link>
              {/* <Nav.Link href="/calendar" class="nav-item">Calendar</Nav.Link> */}
              <Nav.Link href="/learn" className="nav-item">Let's Learn!</Nav.Link>
              {/* <Nav.Link href="/findfriend" class="nav-item">Find a Friend</Nav.Link> */}
              <Nav.Link href="/break" className="nav-item">Take a Break</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
