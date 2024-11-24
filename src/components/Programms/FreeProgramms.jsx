import React from "react";
import { Button, Carousel, Row } from "react-bootstrap";
import style from "./Programms.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useProjectContext } from "../ProjectContext";

function FreePrograms(props) {
  const { t } = useTranslation();
  const { selectedProject, setProject, selectedProgram, setProgram } =
    useProjectContext();
  const handleButtonClick = (selectedProgram) => {
    props.onButtonClick(selectedProgram);
  };

  return (
    <Row
      md={3}
      style={{
        justifyContent: "center",
      }}
    >
      <Carousel interval={null} className={style.carousel}>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the second slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 className={style.FreePrograms_h3}>
              {t("freePrograms.powerliftingProgram")}
            </h3>
            <Link to="/contact-me">
              <Button
                className={style.FreePrograms_button}
                onClick={() =>
                  handleButtonClick(t("freePrograms.powerliftingProgram"))
                }
              >
                {t("freePrograms.getProgram")}
              </Button>
            </Link>
            <p className={style.FreePrograms_p}>
              {t("freePrograms.programDescription")}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.carouselItem}>
          {/* Content for the second slide */}

          <Carousel.Caption className={style.carouselCaption}>
            <h3 className={style.FreePrograms_h3}>
              {t("freePrograms.benchPressProgram")}
            </h3>
            <Link to="/contact-me">
              <Button
                className={style.FreePrograms_button}
                onClick={() =>
                  handleButtonClick(t("freePrograms.benchPressProgram"))
                }
              >
                {t("freePrograms.getProgram")}
              </Button>
            </Link>
            <p className={style.FreePrograms_p}>
              {t("freePrograms.programDescription4")}
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
    </Row>
  );
}

export default FreePrograms;
