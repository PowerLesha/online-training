import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quote from "../../Assets/make.png";
import quote2 from "../../Assets/your.png";
import quote3 from "../../Assets/choice.png";
import { useTranslation } from "react-i18next";
import { useProjectContext } from "../ProjectContext";

function Projects() {
  const { t } = useTranslation();
  const { setProject } = useProjectContext();

  const handleSetSelectedProject = (cardName) => {
    setProject(cardName);
  };

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
              link="/contact-me"
              linkButton={t("projectCards.contactMe")}
              data={t("services.onlineTraining")}
              onButtonClick={handleSetSelectedProject}
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
              link="/contact-me"
              linkButton={t("projectCards.contactMe")}
              data={t("services.consultation")}
              onButtonClick={handleSetSelectedProject}
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
              link="/programms"
              linkButton={t("projectCards.choosePlan")}
              data={t("services.trainingPlan")}
              onButtonClick={handleSetSelectedProject}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
