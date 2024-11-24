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
            <h3
              className={style.PowerPrograms_h3}
              style={{ marginBottom: "50px" }}
            >
              {t("powerbuildingPrograms.program1")}
            </h3>
            <Link to="/contact-me">
              <Button
                className={style.PowerPrograms_button}
                style={{ marginBottom: "0px", marginTop: "0px" }}
                onClick={() =>
                  handleButtonClick(t("powerbuildingPrograms.power"))
                }
              >
                {t("powerbuildingPrograms.getProgram")}
              </Button>
            </Link>
            <p
              className={style.FreePrograms_p}
              style={{ paddingBottom: "0px", paddingTop: "20px" }}
            >
              {t("powerbuildingPrograms.programDescription")}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
    </Row>
  );
}

export default FreePrograms;
