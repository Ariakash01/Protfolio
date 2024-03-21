import React from 'react'
import './testimonial.css'
import avatar1 from '../../assets/avatar1.jpg' 

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
   <section id="testimonial">
    <h5>Review from client</h5>
    <h2>Testimonials</h2>
    <Swiper className="container testContainer" 
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1.5}
     pagination={{ clickable: true }}>
      <SwiperSlide className="test">
        <div className="testImg">
          <img src={avatar1} alt="avatar" />
        </div>
        <h5 className='avtName'>Name1</h5>
          <small className='avtRev'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ullam odio velit iure excepturi nisi assumenda numquam quod temporibus nihil.
           Neque pariatur quos mollitia, veniam excepturi 
           eos libero architecto laudantium eum.</small>
      </SwiperSlide>
      <SwiperSlide className="test">
        <div className="testImg">
          <img src={avatar1} alt="avatar" />
        </div>
        <h5 className='avtName'>Name1</h5>
          <small className='avtRev'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ullam odio velit iure excepturi nisi assumenda numquam quod temporibus nihil.
           Neque pariatur quos mollitia, veniam excepturi 
           eos libero architecto laudantium eum.</small>
      </SwiperSlide>
      <SwiperSlide className="test">
        <div className="testImg">
          <img src={avatar1} alt="avatar" />
        </div>
        <h5 className='avtName'>Name1</h5>
          <small className='avtRev'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ullam odio velit iure excepturi nisi assumenda numquam quod temporibus nihil.
           Neque pariatur quos mollitia, veniam excepturi 
           eos libero architecto laudantium eum.</small>
      </SwiperSlide>
      <SwiperSlide className="test">
        <div className="testImg">
          <img src={avatar1} alt="avatar" />
        </div>
        <h5 className='avtName'>Name1</h5>
          <small className='avtRev'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ullam odio velit iure excepturi nisi assumenda numquam quod temporibus nihil.
           Neque pariatur quos mollitia, veniam excepturi 
           eos libero architecto laudantium eum.</small>
      </SwiperSlide>
    </Swiper>
   </section>
  )
}

export default Testimonial