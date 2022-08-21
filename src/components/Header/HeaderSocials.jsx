import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials" data-aos="zoom-in">
      <a
        href="https://www.facebook.com/profile.php?id=100007663247764"
        target={"blank"}
      >
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/rizzz.20/" target={"blank"}>
        <BsInstagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UCFEAnTnxIaIIWqnERPJygjA"
        target={"blank"}
      >
        <AiOutlineYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
