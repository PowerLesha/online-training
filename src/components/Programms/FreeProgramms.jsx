import React from "react";
import { Button, Carousel, Row } from "react-bootstrap";
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
            <h3 style={{ marginBottom: "40px", marginTop: "-50px" }}>
              {t("freePrograms.powerliftingProgram")}
            </h3>
            <Button style={{ marginBottom: "80px", marginTop: "-10px" }}>
              {t("freePrograms.getProgram")}
            </Button>
            <p>{t("freePrograms.programDescription")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the second slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "40px", marginTop: "-50px" }}>
              {t("freePrograms.powerliftingProgram")}
            </h3>
            <Button style={{ marginBottom: "80px", marginTop: "-10px" }}>
              {t("freePrograms.getProgram")}
            </Button>
            <p>{t("freePrograms.programDescription2")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={style.carouselItem}>
          {/* Content for the third slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "40px", marginTop: "-50px" }}>
              {t("freePrograms.powerliftingProgram")}
            </h3>
            <Button style={{ marginBottom: "80px", marginTop: "-10px" }}>
              {t("freePrograms.getProgram")}
            </Button>
            <p>{t("freePrograms.programDescription3")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
      <Carousel interval={null} className={style.carousel}>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the first slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "40px", marginTop: "-50px" }}>
              {t("freePrograms.benchPressProgram")}
            </h3>
            <Button style={{ marginBottom: "80px", marginTop: "-10px" }}>
              {t("freePrograms.getProgram")}
            </Button>
            <p>{t("freePrograms.programDescription4")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the second slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "40px", marginTop: "-50px" }}>
              {t("freePrograms.benchPressProgram")}
            </h3>
            <Button style={{ marginBottom: "80px", marginTop: "-10px" }}>
              {t("freePrograms.getProgram")}
            </Button>
            <p>{t("freePrograms.programDescription5")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={style.carouselItem}>
          {/* Content for the third slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 style={{ marginBottom: "40px", marginTop: "-50px" }}>
              {t("freePrograms.benchPressProgram")}
            </h3>
            <Button style={{ marginBottom: "80px", marginTop: "-10px" }}>
              {t("freePrograms.getProgram")}
            </Button>
            <p>{t("freePrograms.programDescription6")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
    </Row>
  );
}

export default FreePrograms;
