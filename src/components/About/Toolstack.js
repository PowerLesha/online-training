import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Toolstack() {
  const { t } = useTranslation();

  return (
    <Row className="achivments">
      <Col xs={0} md={0} className="tech-icons">
        <Row />{" "}
        <p className="font">
          <li>{t("toolstack.trainerExperience")}</li>
          <li>{t("toolstack.medalistsPreparation")}</li>
          <li>{t("toolstack.injuryRecovery")}</li>
          <li>{t("toolstack.diverseGoals")}</li>
        </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
