import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsMessenger } from "react-icons/bs";
import s from "../../App.css";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  const handleButtonClick = () => {
    props.onButtonClick(props.data);
  };

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
        <Link to={props.link}>
          <Button
            onClick={handleButtonClick}
            className="buttoncard"
            variant="primary"
            target="_blank"
          >
            <BsMessenger /> &nbsp;
            {props.linkButton}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
