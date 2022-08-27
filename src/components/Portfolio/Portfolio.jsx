import React from "react";
import "./Portfolio.css";
import Nizam from "../../assets/Nizam.png";
import Sunik from "../../assets/Sunik.png";
import History from "../../assets/History.png";
import Linktre from "../../assets/Linktre.png";
import Mini from "../../assets/Portfolio Mini.png";
import Ninja from "../../assets/Ninja.png";

const data = [
  {
    id: 1,
    image: Nizam,
    title: "Nizam Cellular leuwiliang",
    github: "https://github.com/Rizki2012/Nizam-Cellular",
    demo: "https://nizamcellular.vercel.app/",
  },
  {
    id: 2,
    image: Sunik,
    title: "Sunik & Johan Cellular",
    github: "https://github.com/Rizki2012/Sunik-Johan",
    demo: "https://sunik.vercel.app/",
  },
  {
    id: 3,
    image: History,
    title: "My History Scholl",
    github: "https://github.com/Rizki2012/Project-3",
    demo: "https://myhistory.vercel.app/",
  },
  {
    id: 4,
    image: Linktre,
    title: "Link Tre",
    github: "https://github.com/Rizki2012/Link-Tre",
    demo: "https://linktree-tan.vercel.app/",
  },
  {
    id: 5,
    image: Mini,
    title: "Portfolio Mini",
    github: "https://github.com/Rizki2012/Portfolio-Mini",
    demo: "https://myportfolio-three-sigma.vercel.app/",
  },
  {
    id: 6,
    image: Ninja,
    title: "Menghilang Adalah Jalan Ninja Ku",
    github: "https://www.youtube.com/channel/UCFEAnTnxIaIIWqnERPJygjA",
    demo: "https://www.youtube.com/channel/UCFEAnTnxIaIIWqnERPJygjA",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="teks__dec" data-aos="zoom-in">
        Project Yang Saya Buat
      </h5>
      <h2 className="teks__thumb" data-aos="zoom-in">
        <span> Portfolio Saya</span>
      </h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item" data-aos="zoom-in">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
