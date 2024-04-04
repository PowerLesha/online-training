import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";
import YouTube from "react-youtube";
function About() {
  const { t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t("about.intro")}
              <strong className="purple">{t("about.whoAmI")}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          > */}
            <YouTube className="video" videoId={"NifSHbREoWk"} />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">{t("about.sportsAchievements")}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t("about.coachAchievements")}</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
