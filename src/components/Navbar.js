import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import onlinetraining from "../Assets/Online training for you (1).png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineFolderOpen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next";

function NavBar({ changeLanguage }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        updateExpanded(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 20 && currentScrollY > prevScrollY) {
        // Scrolling down
        updateNavbar(true);
        updateExpanded(false); // Close the menu when scrolling down
      } else {
        // Scrolling up or not enough scroll
        updateNavbar(false);
      }

      // Update prevScrollY for the next comparison
      setPrevScrollY(currentScrollY);
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container ref={menuRef}>
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
                to="/contact-me"
                onClick={() => updateExpanded(false)}
                style={{ marginRight: "25px" }}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> {t("navbar.contact")}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav.Item>
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
                cursor: "pointer",
              }}
            >
              <option value="en" className="languageSelect">
                English
              </option>
              <option value="ukr" className="languageSelect">
                Українська
              </option>
              <option value="ru" className="languageSelect">
                Русский
              </option>
              <option value="bg" className="languageSelect">
                Български
              </option>
            </select>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
