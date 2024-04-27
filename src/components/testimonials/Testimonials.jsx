import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/AVTR1.jpg";
import AVTR2 from "../../assets/AVTR2.jpg";
import AVTR3 from "../../assets/AVTR3.png";
import AVTR4 from "../../assets/AVTR4.png";
import AVTR5 from "../../assets/AVTR5.png";
import AVTR6 from "../../assets/AVTR6.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Denise Giacomolli - Bazk",
    review:
      "Fernando has a keen eye for visual details and user experience, creating intuitive and visually appealing interfaces that enhance the user experience. Your ability to translate complex requirements into elegant and simple solutions is a real differentiator",
  },

  {
    avatar: AVTR2,
    name: "Marina Blum - Bazk",
    review:
      "The frontend that a designer needs: agile, proactive and committed to deliveries and continuous process improvement. It is the person who takes a critical and attentive approach to maintaining visual consistency, application performance and design assumptions.",
  },

  {
    avatar: AVTR3,
    name: "Flávia Tissot - OSPA",
    review:
      "He is a great professional and a great person to work with. Competent, focused and proactive in propositions.",
  },
  {
    avatar: AVTR4,
    name: "Bruno Rudiger - IGOAL",
    review:
      "With his mind always attentive to details, he always has excellent suggestions and ideas to share with the team.",
  },
  {
    avatar: AVTR5,
    name: "Rodrigo Vieira - Grupo RBS",
    review:
      "A dedicated colleague, always attentive and open to new knowledge, never stop, searching of something more. Excellent professional, very communicative.",
  },
  {
    avatar: AVTR6,
    name: "Lucas Hashiguchi - URBE.ME",
    review: "Great professional, creative, dedicated and collaborative.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{ marginTop: "10px" }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="colleague__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="colleague__name">{name}</h5>
              <small className="colleague__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
