import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7nedq7l",
      "template_vder0ir",
      form.current,
      "bG3XrDBHGpx_Myeke"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className="teks__dec" data-aos="zoom-in">
        Hubungi Kami
      </h5>
      <h2 className="teks__thumb" data-aos="zoom-in">
        <span>Kontak Saya</span>
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="zoom-in">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="name">Rizki Ramadhan</h5>
            <a href="mailto:rr8027896@gmail.com" target={"blank"}>
              Hubungi Melalui Email
            </a>
          </article>

          <article className="contact__option" data-aos="zoom-in">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5 className="name">Rizki Ramadhan</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100007663247764"
              target={"blank"}
            >
              Hubungi Melalui Messenger
            </a>
          </article>

          <article className="contact__option" data-aos="zoom-in">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5 className="name">+62 831-0913-0784</h5>
            <a href="https://wa.me/6283109130784" target={"blank"}>
              Hubungi Melalui WhatsApp
            </a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail} data-aos="zoom-in">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap Kamu"
            required
          />
          <input type="Email" name="Email" placeholder="Email Kamu" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Pesan Kamu"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
