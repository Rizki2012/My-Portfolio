import React from "react";
import "./Testimonials.css";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";
import Img4 from "../../assets/4.png";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Img1,
    name: "Johan",
    review: "Design Keren ",
  },
  {
    avatar: Img2,
    name: "Nizam Cellular",
    review: "Bekerja Dengan Cepat.",
  },
  {
    avatar: Img3,
    name: "Andi",
    review: "Merespon Dengan Cepat",
  },
  {
    avatar: Img4,
    name: "Ari",
    review: "Semoga Ga NT",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 className="teks__dec" data-aos="zoom-in">
        Ulasan Dari Klien
      </h5>
      <h2 className="teks__thumb" data-aos="zoom-in">
        <span>Ulasana Klien</span>
      </h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        data-aos="zoom-in"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
