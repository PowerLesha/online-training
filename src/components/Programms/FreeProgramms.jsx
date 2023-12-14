import React from "react";
import { Carousel, Row } from "react-bootstrap";
import style from "./Programms.module.css";
function FreProgramms() {
  return (
    <Row
      md={3}
      style={{
        justifyContent: "center",
      }}
    >
      <Carousel interval={null} className={style.carousel}>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the first slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "100px" }}>
              Free powerlifting <br /> programm{" "}
            </h3>
            <h4 style={{ paddingBottom: "90px" }}>
              6 weeks powerlifting programm
            </h4>
            <p>
              This programm is good for as well for beginners as medium level
              athletes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the first slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "260px" }}>
              {" "}
              Free powerlifting <br /> programm{" "}
            </h3>
            <p>Nulla vitae elit, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={style.carouselItem}>
          {/* Content for the second slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "260px" }}>
              {" "}
              Free powerlifting <br /> programm{" "}
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
      <Carousel interval={null} className={style.carousel}>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the first slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "260px" }}>Free bench-press programm</h3>
            <p>Nulla vitae elit, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the first slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "260px" }}>Free bench-press programm</h3>
            <p>Nulla vitae elit, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={style.carouselItem}>
          {/* Content for the second slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "260px" }}>
              {" "}
              Free bench-press programm
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
    </Row>
  );
}

export default FreProgramms;
