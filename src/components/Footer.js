import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="footer-copywright">
          <h3>
            <b style={{ color: "brown" }}>{t("footer.designedBy")} </b>
            <b style={{ color: "maroon", font: "small-caption" }}>{year} </b>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
