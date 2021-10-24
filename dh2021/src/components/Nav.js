import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Noctua</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navContainer mr-auto">
              <Nav.Link className= "mr-sm-2 navText" style={{color: "black", fontSize: "1.5rem", fontWeight: "bold"}} href="/goals">Goals</Nav.Link>
              <Nav.Link href="/stickerboard">Sticker Board</Nav.Link>
              <Nav.Link href="/calendar">Calendar</Nav.Link>
              <Nav.Link href="/learn">Let's Learn!</Nav.Link>
              <Nav.Link href="/findfriend">Find a Friend</Nav.Link>
              <Nav.Link href="/break">Take a Break</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
