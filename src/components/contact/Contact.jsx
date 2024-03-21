import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ed3ome7', 'template_po20cgo', form.current, 'BjSTKOtXUbAYJ_ntU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container conContainer">
        <div className="conOptions">
          <article className="conOption">
            <FiMail className='conIcon'/>
            <h4>Email</h4>
            <h5>ariakash067@gmail.com</h5>
            <a href="mailto:ariakash067@gmail.com"  target='__blank'>SEND MSG</a>
          </article>
          <article className="conOption">
            <AiOutlineInstagram className='conIcon'/>
            <h4>Instagram</h4>
            <h5>@i_am_akash._._</h5>
            <a href="https://www.instagram.com/i_am_akash._._/" target='__blank'>INSTAGRAM</a>
          </article>
          <article className="conOption">
            <FaWhatsapp className='conIcon'/>
            <h4>Whatsapp</h4>
            <h5>9344369681</h5>
            <a href="https://wa.me/919344369681 " target='__blank' >WHATSAPP</a>
          </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='your name..' required/>
            <input type="email" name="email" placeholder='your email..' required/>
            <textarea name="message" rows="7" placeholder='your message' required></textarea>
            <button type='submit'  className='submit btn btn-primary'>send msg</button>
          </form>
        
      </div>
    </section>
  )
}

export default Contact