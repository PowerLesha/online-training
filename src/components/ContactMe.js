import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "./Particle";

import ContactForm from "./ContactForm/ContactForm";

function ContactMe() {
  return (
    <>
      <Container fluid className="MyBlog">
        <Particle />
        <Row>
          <ContactForm />
        </Row>
      </Container>
    </>
  );
}

export default ContactMe;
