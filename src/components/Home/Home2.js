import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homeLogo.png";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> {t("home2.introduce")} </span>
            </h1>
            <p className="home-about-body">
              {t("home2.powerlifting")}
              <br />
              <br />
              {t("home2.trainer")}
              <br />
              <br />
              {t("home2.achievements")}
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={homeLogo} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("home2.findMeOn")}</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <p>YouTube</p>
                <a
                  href="https://www.youtube.com/watch?v=NifSHbREoWk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>

              <li className="social-icons">
                <p>Instagram</p>
                <a
                  href="https://www.instagram.com/powerlifter_titov/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
