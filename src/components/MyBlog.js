import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import { useTranslation } from "react-i18next";

function MyBlog() {
  const { t } = useTranslation();

  return (
    <Container fluid className="MyBlog">
      <Particle />
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={8}
          style={{
            justifyContent: "center",
            paddingTop: "310px",
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
            {t("myBlog.noArticles")}
          </b>
        </Col>
      </Row>
    </Container>
  );
}

export default MyBlog;
