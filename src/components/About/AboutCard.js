import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.greeting")}
            <span className="purple">{t("aboutCard.name")}</span>
            {t("aboutCard.from")}
            <span className="purple">{t("aboutCard.country")}</span>.
            <br />
            {t("aboutCard.professions")}
            <br />
            <br />
          </p>

          <p style={{ color: "brown", marginTop: "50px" }}>
            {t("aboutCard.quote")}
          </p>
          <footer className="blockquote-footer">
            {t("aboutCard.quoteAuthor")}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
