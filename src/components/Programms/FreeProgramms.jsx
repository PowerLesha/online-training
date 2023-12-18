import React from "react";
import { Carousel, Row } from "react-bootstrap";
import style from "./Programms.module.css";
import { useTranslation } from "react-i18next";

function FreePrograms() {
  const { t } = useTranslation();

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
            <h3 style={{ marginBottom: "90px" }}>
              {t("freePrograms.powerliftingProgram")}
            </h3>
            <h4 style={{ paddingBottom: "60px" }}>
              {t("freePrograms.sixWeeksProgram")}
            </h4>
            <p>{t("freePrograms.programDescription")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the second slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "240px" }}>
              {t("freePrograms.powerliftingProgram")}
            </h3>
            <p>{t("freePrograms.placeholderText")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={style.carouselItem}>
          {/* Content for the third slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "240px" }}>
              {t("freePrograms.powerliftingProgram")}
            </h3>
            <p>{t("freePrograms.placeholderText")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
      <Carousel interval={null} className={style.carousel}>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the first slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "240px" }}>
              {t("freePrograms.benchPressProgram")}
            </h3>
            <p>{t("freePrograms.placeholderText")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the second slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "240px" }}>
              {t("freePrograms.benchPressProgram")}
            </h3>
            <p>{t("freePrograms.placeholderText")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={style.carouselItem}>
          {/* Content for the third slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "240px" }}>
              {t("freePrograms.benchPressProgram")}
            </h3>
            <p>{t("freePrograms.placeholderText")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
    </Row>
  );
}

export default FreePrograms;
