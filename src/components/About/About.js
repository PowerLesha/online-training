import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";
import ach1 from "../../Assets/achivements/ach8.jpg";
import ach2 from "../../Assets/achivements/ach1.jpg";
import ach3 from "../../Assets/achivements/ach4.jpg";
import ach4 from "../../Assets/achivements/ach6.jpg";
import ch1 from "../../Assets/achivements/coachach4.jpg";
import ch2 from "../../Assets/achivements/coachach3.jpg";
import ch3 from "../../Assets/achivements/coachach2.jpg";
import ch4 from "../../Assets/achivements/coachach1.jpg";
function About() {
  const { t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            textAlign: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading">
              <strong className="purple">
                {t("about.sportsAchievements")}
              </strong>
            </h1>
            <Carousel interval={null} className="about-carousel">
              <Carousel.Item className="my-ach">
                {/* Content for the first slide */}
                <img src={ach1} alt="powerlifter" />
                <Carousel.Caption className="ach-desc">
                  {t("achievements.achievement1")}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="my-ach">
                <img src={ach2} alt="ipf" />
                <Carousel.Caption className="ach-desc">
                  {t("achievements.achievement2")}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="my-ach">
                <img src={ach3} alt="strength" />
                <Carousel.Caption className="ach-desc">
                  {t("achievements.achievement3")}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="my-ach">
                <img src={ach4} alt="champion" />
                <Carousel.Caption className=""></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Techstack />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading">
              <strong className="purple">{t("about.coachAchievements")}</strong>
            </h1>
            <Carousel interval={null} className="about-carousel">
              <Carousel.Item className="my-ach">
                {/* Content for the first slide */}
                <img src={ch4} alt="trainer" />
                <Carousel.Caption className="ach-desc">
                  {t("coachAchievements.achievement1")}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="my-ach">
                <img src={ch1} alt="coach" />
                <Carousel.Caption className="ach-desc">
                  {t("coachAchievements.achievement2")}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="my-ach">
                <img src={ch3} alt="online-training" />
                <Carousel.Caption className="ach-desc">
                  {t("coachAchievements.achievement3")}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="my-ach">
                <img src={ch2} alt="powerlifting" />
                <Carousel.Caption className="ach-desc">
                  {" "}
                  {t("coachAchievements.achievement4")}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
