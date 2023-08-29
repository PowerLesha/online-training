import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quote from "../../Assets/make.png";
import quote2 from "../../Assets/your.png";
import quote3 from "../../Assets/choice.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Available packages: </strong>
        </h1>
        <p style={{ color: "white" }}>Chose the best package for you.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4}>
            <ProjectCard
              imgPath={quote}
              isInsta={true}
              title={
                <p style={{ padding: "0.45em" }} className="card">
                  "Online training in powerlifting/bench-press. Monthly costs
                  100$."
                </p>
              }
              description="I send you a training plan and a diet every week. You should make a video your main sets and give me feedback. You can keep in touch with me every day around the clock."
              emailLink="mailto:leshapowerlifter@gmail.com"
              instaLink="https://www.instagram.com/powerlifter_titov/"
            />
          </Col>

          <Col md={4}>
            <ProjectCard
              imgPath={quote2}
              isInsta={true}
              title={
                <p style={{ padding: "0.45em" }} className="card">
                  "1 hour online consultation, or 1 online training. The price
                  is 20$"
                </p>
              }
              description={
                <p style={{ paddingTop: "22px" }}>
                  "You can ask me all what you want in terms of powerlifting,
                  diet, recovery and that kind of things."
                </p>
              }
              emailLink="mailto:leshapowerlifter@gmail.com"
              instaLink="https://www.instagram.com/powerlifter_titov/"
            />
          </Col>
          <Col md={4}>
            <ProjectCard
              imgPath={quote3}
              isInsta={true}
              title={
                <p style={{ padding: "0.45em" }} className="card">
                  "Training plan for 1 month. It costs 50$."
                </p>
              }
              description={
                <p style={{ paddingTop: "22px" }}>
                  "I send you monthly training plan as an excel document."
                </p>
              }
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
