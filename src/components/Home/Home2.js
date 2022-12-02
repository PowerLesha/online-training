import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homeLogo.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import s from "../../App.css";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> LET ME INTRODUCE MYSELF </span>
            </h1>
            <p className="home-about-body">
              I have been doing powerlifting more than 10 years already.
              <br />
              <br />I work as a professional trainer as well. And I can help you
              increase your results either in powerlifting or bench press. Also
              I can help you achieve your fitness goals.
              <br />
              <br />
              So, if you want to be at higher level than you are, you should
              work with me.
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={s.myAvtar}>
            <Tilt>
              <img
                width={800}
                height={800}
                src={homeLogo}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON:</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <p>Youtube</p>
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
                <p>Instagramm</p>
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
