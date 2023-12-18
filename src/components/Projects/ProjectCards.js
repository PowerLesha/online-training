import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import s from "../../App.css";

function ProjectCards(props) {
  const { t } = useTranslation();

  return (
    <Card className="project-card-view">
      <Card.Img
        className="powerlogos"
        variant="top"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title style={s.card}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button
          className="buttoncard"
          variant="primary"
          href={props.emailLink}
          target="_blank"
        >
          <BsMessenger /> &nbsp;
          {props.isInsta
            ? t("projectCards.writeEmail")
            : t("projectCards.writeInstagram")}
        </Button>
        <Button
          className="buttoncard"
          variant="primary"
          href={props.instaLink}
          target="_blank"
        >
          <BsMessenger /> &nbsp;
          {props.isInsta ? t("projectCards.writeInstagram") : ""}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            className="buttoncard"
            variant="primary"
            href={props.instaLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {t("projectCards.writeEmail")}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
