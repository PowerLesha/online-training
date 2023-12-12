import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! My name is <span className="purple">Lesha </span>
            and I'm from <span className="purple"> Ukraine.</span>
            <br />I am both a professional trainer and a professional sportsman
            in powerlifting .
            <br />
            <br />
          </p>

          <p style={{ color: "brown", marginTop: "50px" }}>
            “You can become strong, and powerful, and beautiful.”{" "}
          </p>
          <footer className="blockquote-footer"> Author Unknown</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
