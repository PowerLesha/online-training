import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import style from "./Programms.module.css";
import FreePrograms from "./FreeProgramms";
import PowerliftingProgramms from "./PowerliftingProgramms";
import PowerbuidingProgramms from "./PowerbuildingProgramms";
import { useTranslation } from "react-i18next";
import { useProjectContext } from "../ProjectContext";

function Programs() {
  const { selectedProject, setProject, selectedProgram, setProgram } =
    useProjectContext();
  const [selectedOption, setSelectedOption] = useState("option1");
  const { t } = useTranslation();
  const handleSetSelectedProject = (program) => {
    setProgram(program);
    setProject(t("services.trainingPlan"));
  };
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <>
      <Container fluid className="MyBlog">
        <Particle />
        <Row
          md={1}
          style={{
            justifyContent: "center",
            marginTop: "160px",
          }}
        >
          <div className={style.wrapper}>
            <div className={style.option}>
              <input
                value="option1"
                name="btn"
                type="radio"
                className={style.input}
                checked={selectedOption === "option1"}
                onChange={() => handleOptionChange("option1")}
              />
              <div className={style.btn}>
                <span className={style.span}>{t("programs.freePrograms")}</span>
              </div>
            </div>
            <div className={style.option}>
              <input
                value="option2"
                name="btn"
                type="radio"
                className={style.input}
                checked={selectedOption === "option2"}
                onChange={() => handleOptionChange("option2")}
              />
              <div className={style.btn}>
                <span className={style.span}>
                  {t("programs.powerliftingPrograms")}
                </span>
              </div>{" "}
            </div>
            <div className={style.option}>
              <input
                value="option3"
                name="btn"
                type="radio"
                className={style.input}
                checked={selectedOption === "option3"}
                onChange={() => handleOptionChange("option3")}
              />
              <div className={style.btn}>
                <span className={style.span}>
                  {t("programs.powerbuildingPrograms")}
                </span>
              </div>
            </div>
          </div>
        </Row>
        {selectedOption === "option1" && (
          <FreePrograms onButtonClick={handleSetSelectedProject} />
        )}
        {selectedOption === "option2" && (
          <PowerliftingProgramms onButtonClick={handleSetSelectedProject} />
        )}
        {selectedOption === "option3" && (
          <PowerbuidingProgramms onButtonClick={handleSetSelectedProject} />
        )}

        <div className={style.donation}>
          <h2>
            {t("programs.supportText")} <br /> &#8659;
          </h2>

          <a href={"https://www.buymeacoffee.com/leshapowerw"}>
            <button
              title="click here"
              className={style.donation_button}
            ></button>
          </a>
        </div>
      </Container>
    </>
  );
}

export default Programs;
