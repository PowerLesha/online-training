import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={0} md={0} className="tech-icons">
        <Row />{" "}
        <p className="font">
          <li>I have been working as a trainer for more than 10 years.</li>
          <li> Prepared lots of National and International medalists.</li>
          <li>Helped lots of people recovered after injures.</li>
          <li>
            {" "}
            Helped people with different goals like losing weight, increasing
            mobility, increasing muscle mass, etc.{" "}
          </li>
        </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
