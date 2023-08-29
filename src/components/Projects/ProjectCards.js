import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";

import s from "../../App.css";
function ProjectCards(props) {
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
            ? "Write me on my e-mail"
            : "Write me on my instagramm"}
        </Button>
        <Button
          className="buttoncard"
          variant="primary"
          href={props.instaLink}
          target="_blank"
        >
          <BsMessenger /> &nbsp;
          {props.isInsta ? "Write me on my Instagram" : ""}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            className="buttoncard"
            variant="primary"
            href={props.instaLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Write me on my Email"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
