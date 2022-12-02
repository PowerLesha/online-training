import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>
            <b style={{ color: "brown" }}>
              Designed and Developed by Titov Oleksii{" "}
            </b>

            <b style={{ color: "maroon", font: "small-caption" }}>{year} </b>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
