import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Rizki from "../../assets/Rizki.png";
import HeaderSocials from "./HeaderSocials";
import { BsCloudSun } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5 data-aos="zoom-in">Halo, saya 😜</h5>
        <h1 data-aos="zoom-in">Rizki Ramadhan</h1>
        <h5 data-aos="zoom-in">Gamers Dan Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* Image */}
        <div className="me" data-aos="zoom-in">
          <img src={Rizki} alt="Me" />
        </div>

        <a href="#about" className="scroll__down">
          Tentang Saya
        </a>

        {/* Light Mode */}
        <div className="light__mode">
          <span onClick={toggleTheme}>
            {theme === "light-theme" ? (
              <span>
                <BsFillCloudMoonFill />
              </span>
            ) : (
              <span>
                <BsCloudSun />
              </span>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
