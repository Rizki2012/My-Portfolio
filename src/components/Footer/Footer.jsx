import React from "react";
import "./Footer.css";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const quickLinks01 = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "about",
  },
  {
    path: "#experience",
    display: "Experience",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const quickLinks02 = [
  {
    display: "Senin Jam : 10:00 - 22:00",
  },
  {
    display: "Selasa Jam : 10:00 - 22:00",
  },
  {
    display: "Rabu Jam : 10:00 - 22:00",
  },
  {
    display: "Kamis Jam : 10:00 - 22:00",
  },
  {
    display: "Jumat Jam : 10:00 - 22:00",
  },
];

const quickLinks03 = [
  {
    path: "https://wa.me/6281286090709",
    display: "Whatsapp",
  },
  {
    path: "mailto:rr8027896@gmail.com",
    display: "Gmail",
  },
  {
    path: "https://www.instagram.com/rizzz.20/",
    display: "Instagram",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Rizki Ramadhan</h2>
            <p className="description">Social Media Saya</p>

            <div className="icon">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100007663247764"
                  target={"_blank"}
                >
                  <SiFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rizzz.20/" target={"_blank"}>
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCFEAnTnxIaIIWqnERPJygjA"
                  target={"_blank"}
                >
                  <AiFillYoutube />
                </a>
              </li>
            </div>

            <p className="small__text description">
              Terima kasih telah berkunjung ke website portfolio saya 😉
            </p>
          </div>

          {/* Links */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Tautan langsung 👻</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubungi Kami Ketika Jam */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Hubungi Kami Ketika Hari 👻</h3>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <li className="jam">{item.display}</li>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="footer__quick-links">
            <h3 className="quick__links-title">Info Kontak 👻</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a target={"_blank"} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright {year}, developed by <a href="#">Rizki Store</a>, All right
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
