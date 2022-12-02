import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Row />{" "}
        <p className="font">
          I have been working as a trainer for more than 10 years.{" "}
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Row />{" "}
        <p className="font">
          Prepared lots of National and International medalists
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Row />{" "}
        <p className="font">Helped lots of people recovered after injures.</p>
      </Col>
      <Col xs={1} md={8} className="tech-icons">
        <Row />{" "}
        <p className="font">
          Helped people with different goals like losing weight, increasing
          mobility, increasing muscle mass, etc.
        </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
