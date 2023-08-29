import React from "react";
import { Col, Row } from "react-bootstrap";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={0} md={0} className="tech-icons">
        <Row />
        <p className="font">
          <li>Multiple National champion.</li>
          <li>National record holder in squat, deadlift and total.</li>
          <li>IPF World club cup champion (Iran) .</li>
          <li>IPF World, European medalist.</li>
        </p>
      </Col>
    </Row>
  );
}

export default Techstack;
