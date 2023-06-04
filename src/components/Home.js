import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

export default class Home extends Component {
  render() {
    return (
      <Container className="home">
        <h1 className="large-heading">
          Calculate. Compare. <br /> Plan
        </h1>
        <Button as={Link} to={"/add"}>
          Get started
        </Button>
      </Container>
    );
  }
}
