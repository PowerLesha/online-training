// Programms.jsx

import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import style from "./Programms.module.css";

function Programms() {
  return (
    <Container fluid className="MyBlog">
      <Particle />
      <Row
        md={3}
        style={{
          justifyContent: "center",

          marginTop: "200px",
        }}
      >
        <Carousel interval={null} className={style.carousel}>
          <Carousel.Item className={style.carouselItem}>
            {/* Content for the first slide */}

            <Carousel.Caption className={style.carouselCaption}>
              <h3 style={{ marginBottom: "260px" }}>First slide label</h3>
              <p>Nulla vitae elit, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.carouselItem}>
            {/* Content for the first slide */}

            <Carousel.Caption className={style.carouselCaption}>
              <h3 style={{ marginBottom: "260px" }}>First slide label</h3>
              <p>Nulla vitae elit, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className={style.carouselItem}>
            {/* Content for the second slide */}

            <Carousel.Caption className={style.carouselCaption}>
              <h3 style={{ marginBottom: "260px" }}>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Add more Carousel.Items for additional slides */}
        </Carousel>
        <Carousel interval={null} className={style.carousel}>
          <Carousel.Item className={style.carouselItem}>
            {/* Content for the first slide */}

            <Carousel.Caption className={style.carouselCaption}>
              <h3 style={{ marginBottom: "260px" }}>First slide label</h3>
              <p>Nulla vitae elit, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.carouselItem}>
            {/* Content for the first slide */}

            <Carousel.Caption className={style.carouselCaption}>
              <h3 style={{ marginBottom: "260px" }}>First slide label</h3>
              <p>Nulla vitae elit, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className={style.carouselItem}>
            {/* Content for the second slide */}

            <Carousel.Caption className={style.carouselCaption}>
              <h3 style={{ marginBottom: "260px" }}>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Add more Carousel.Items for additional slides */}
        </Carousel>
      </Row>
    </Container>
  );
}

export default Programms;
