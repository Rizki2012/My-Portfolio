import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.cjs";

Aos.init({
  once: false,
  mirror: false,
  reset: false,
  duration: 700,
});

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
