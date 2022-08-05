import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/AVTR1.png'
import AVTR2 from '../../assets/AVTR2.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Bruno Rudiger - IGOAL",
    review: "With his mind always attentive to details, he always has excellent suggestions and ideas to share with the team."
  },
  {
    avatar: AVTR2,
    name: "Rodrigo Vieira - Grupo RBS",
    review: "A dedicated colleague, always attentive and open to new knowledge, never stop, searching of something more. Excellent professional, very communicative."
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="colleague__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>  
                <h5 className='colleague__name'>{name}</h5>
                <small className='colleague__review'>
                  {review}
                </small>
            </SwiperSlide>
            )

          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;