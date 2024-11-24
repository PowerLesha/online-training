import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import deadlift from "../../Assets/deadlift.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("navbar.hi")}
                <span className="wave" role="img" aria-labelledby="wave">
                  💪
                </span>
              </h1>

              <h1 className="heading-name">
                {t("navbar.I")}
                <strong className="main-name"> {t("navbar.name")}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={deadlift} alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
