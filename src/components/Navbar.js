import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import onlinetraining from "../Assets/Online training for you (1).png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineFileText,
  AiOutlineFolderOpen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function NavBar({ changeLanguage }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="https://powerlesha.github.io/online-training/#/"
          className="d-flex"
        >
          <img src={onlinetraining} className="do-flex" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.services")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/programms"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFolderOpen style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.programs")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/MyBlog"
                onClick={() => updateExpanded(false)}
                style={{ marginRight: "25px" }}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> {t("navbar.blog")}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div>
            <MdOutlineLanguage
              style={{
                marginBottom: "2px",
                color: "white",
                fontSize: "30px",
                marginRight: "4px",
              }}
            />
            <label htmlFor="languageSelect"></label>
            <select
              id="languageSelect"
              onChange={handleLanguageChange}
              value={i18n.language}
              style={{
                backgroundColor: "rgb(105, 13, 13)",
                color: "white",
              }}
            >
              <option value="en" className="languageSelect">
                English
              </option>
              <option value="ukr" className="languageSelect">
                Українська
              </option>
            </select>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
