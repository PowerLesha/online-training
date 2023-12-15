import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import face from "../../Assets/face.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation } from "react-i18next";

function Home({ changeLanguage }) {
  const { t, i18n } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("hi")}
                <span className="wave" role="img" aria-labelledby="wave">
                  💪
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Titov Oleksii</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={face}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <button type="button" onClick={() => changeLanguage("ukr")}>
        {" "}
        Change language to ukr
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        {" "}
        Change language to en
      </button>
      <Home2 />
    </section>
  );
}

export default Home;
