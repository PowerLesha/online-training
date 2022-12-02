import React from "react";
import { Col, Row } from "react-bootstrap";
import achievements from "../../Assets/achievements.jpg";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Row />
        <p className="font">Multiple National champion.</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Row />{" "}
        <p className="font">
          National record holder in squat, deadlift and total.
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Row /> <p className="font">IPF World club cup champion. (Iran)</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Row /> <p className="font">IPF World, European medalist.</p>
      </Col>
    </Row>
  );
}

export default Techstack;
