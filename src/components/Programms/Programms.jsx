import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import style from "./Programms.module.css";
import FreeProgramms from "./FreeProgramms";

function Programms() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <Container fluid className="MyBlog">
      <Particle />
      <Row
        md={1}
        style={{
          justifyContent: "center",
          marginTop: "200px",
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
              <span className={style.span}>Free programms</span>
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
              <span className={style.span}>Powerlifting programms</span>
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
              <span className={style.span}>Powerbuilding programms</span>
            </div>
          </div>
        </div>
      </Row>
      {selectedOption === "option1" && <FreeProgramms />}
    </Container>
  );
}

export default Programms;
