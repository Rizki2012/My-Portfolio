import React from "react";
import "./About.css";
import ME from "../../assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { RiProjectorFill } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5 className="teks__dec" data-aos="zoom-in">
        Tentang Saya
      </h5>
      <h2 className="teks__thumb" data-aos="zoom-in">
        <span>Tentang Saya</span>
      </h2>

      <div className="container about__container">
        <div className="about__me" data-aos="zoom-in">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        {/* About Content */}
        <div className="about__content" data-aos="zoom-in">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Pengalaman</h5>
              <small>Lulusan SMK Pandu</small>
            </article>

            <article className="about__card">
              <RiProjectorFill className="about__icon" />
              <h5>Project</h5>
              <small>15 Project Template</small>
            </article>

            <article className="about__card">
              <IoCheckmarkDoneCircle className="about__icon" />
              <h5>Project Done</h5>
              <small>5 Project Selesai</small>
            </article>
          </div>

          {/* P */}

          <p>
            Haloo Saya Adalah Rizki Ramadhan Lulusan SMK Pandu Bogor 2021
            Kejuruan TKJ [ Teknik Informatika Dan Jaringan ] 👨🏻‍💻
          </p>

          <a href="#contact" className="btn btn-primary">
            Mari berbicara
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
