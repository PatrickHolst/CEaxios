import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to={"/home"} alt="Home">
          <h2>Parental Guide</h2>
        </Navbar.Brand>
        <hr />
        <Nav>
          <Navbar.Brand
            as={Link}
            to={"/add"}
            className="link"
            activeClassName="active"
          >
            <h4>Add Parent</h4>
          </Navbar.Brand>
          <Navbar.Brand
            as={Link}
            to={"/"}
            className="link"
            activeClassName="active"
            exact
          >
            <h4>Parents List</h4>
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
