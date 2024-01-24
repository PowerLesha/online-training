import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm/ContactForm";

function ContactMe() {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className="MyBlog">
        <Particle />

        <Row>
          {/* <b
              style={{
                fontSize: "1.3em",
                paddingBottom: "20px",
              }}
            >
              {t("myBlog.noArticles")}
            </b> */}
          <ContactForm />
        </Row>
      </Container>
    </>
  );
}

export default ContactMe;
