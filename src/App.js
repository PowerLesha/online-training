import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { Route, Routes, HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBlog from "./components/MyBlog";
import Programms from "./components/Programms/Programms";
import { useTranslation } from "react-i18next";

function App() {
  const [load, upadateLoad] = useState(true);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    console.log("Language changed to", language);
  };

  // Inside the Home component
  console.log("Current language:", i18n.language);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar changeLanguage={changeLanguage} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home changeLanguage={changeLanguage} />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/MyBlog" element={<MyBlog />} />
          <Route path="/programms" element={<Programms />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
