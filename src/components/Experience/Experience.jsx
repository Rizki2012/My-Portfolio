import React from "react";
import "./Experience.css";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="teks__dec" data-aos="zoom-in">
        Keterampilan Yang Saya Pelajari
      </h5>
      <h2 className="teks__thumb" data-aos="zoom-in">
        <span>Pengalaman saya</span>
      </h2>

      <div className="container experience__container">
        {/* Frontend */}
        <div className="experience__frontend" data-aos="zoom-in">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {/* HTML */}
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Selesai</small>
              </div>
            </article>
            {/* CSS */}
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Selesai</small>
              </div>
            </article>
            {/* SASS */}
            <article className="experience__details">
              <SiSass className="experience__details-icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Selesai</small>
              </div>
            </article>
            {/* Java Script */}
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Sedang Mempelajari</small>
              </div>
            </article>
            {/* Bootstrap */}
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <dir>
                <h4>Bootstrap</h4>
                <small className="text-light">Selesai</small>
              </dir>
            </article>
            {/* Tailwind */}
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Sedang Mempelajari</small>
              </div>
            </article>
            {/* React */}
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Sedang Mempelajari</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend */}
        <div className="experience__backend" data-aos="zoom-in">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {/* MongoDB */}
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Sedang Mempelajari</small>
              </div>
            </article>
            {/* PHP */}
            <article className="experience__details">
              <FaPhp className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Sedang Mempelajari</small>
              </div>
            </article>
            {/* MySql */}
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <dir>
                <h4>MySQL</h4>
                <small className="text-light">Sedang Mempelajari</small>
              </dir>
            </article>
            {/* Python */}
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Sedang Mempelajari</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
