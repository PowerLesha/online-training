import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

function MyBlog() {
  return (
    <Container fluid className="MyBlog">
      <Particle />
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={8}
          style={{
            justifyContent: "center",
            paddingTop: "250px",
            paddingBottom: "200px",
            color: "white",
            fontSize: "18px",
          }}
        >
          <b
            style={{
              fontSize: "1.3em",
              paddingBottom: "20px",
            }}
          >
            Unfortunately there aren't any articles at the moment. But i promise
            you, I will write something as soon as possible!
          </b>
        </Col>
      </Row>
    </Container>
  );
}

export default MyBlog;
