import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quote from "../../Assets/make.png";
import quote2 from "../../Assets/your.png";
import quote3 from "../../Assets/choice.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">{t("projects.availablePackages")} </strong>
        </h1>
        <p style={{ color: "white" }}>{t("projects.chooseBestPackage")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4}>
            <ProjectCard
              imgPath={quote}
              isInsta={true}
              title={
                <p style={{ padding: "1em" }} className="card">
                  {t("projects.onlineTraining")}
                </p>
              }
              description={t("projects.onlineTrainingDescription")}
              emailLink="mailto:leshapowerlifter@gmail.com"
              instaLink="https://www.instagram.com/powerlifter_titov/"
            />
          </Col>

          <Col md={4}>
            <ProjectCard
              imgPath={quote2}
              isInsta={true}
              title={
                <p style={{ padding: "1em" }} className="card">
                  {t("projects.onlineConsultation")}
                </p>
              }
              description={t("projects.onlineConsultationDescription")}
              emailLink="mailto:leshapowerlifter@gmail.com"
              instaLink="https://www.instagram.com/powerlifter_titov/"
            />
          </Col>
          <Col md={4}>
            <ProjectCard
              imgPath={quote3}
              isInsta={true}
              title={
                <p style={{ padding: "1.3em" }} className="card">
                  {t("projects.trainingPlan")}
                </p>
              }
              description={t("projects.trainingPlanDescription")}
              emailLink="mailto:leshapowerlifter@gmail.com"
              instaLink="https://www.instagram.com/powerlifter_titov/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
