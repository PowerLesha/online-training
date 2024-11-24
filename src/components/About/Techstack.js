import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Techstack() {
  const { t } = useTranslation();

  return (
    <Row className="achivments">
      <Col xs={0} md={0} className="tech-icons">
        <Row />
        <p className="font">
          <li>{t("techstack.champion")}</li>
          <li>{t("techstack.recordHolder")}</li>
          <li>{t("techstack.clubCupChampion")}</li>
          <li>{t("techstack.worldEuropeanMedalist")}</li>
        </p>
      </Col>
    </Row>
  );
}

export default Techstack;
