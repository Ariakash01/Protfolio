import React from 'react'
import './footer.css'
import {LiaInstagram} from 'react-icons/lia'
import {LiaFacebook} from 'react-icons/lia'
import {CiTwitter} from 'react-icons/ci'
const Footer = () => {
  return (
<footer id="footer">
  <a href="#" className='ftLogo'>PROFILE</a>
  <ul className="perLinks">
    <li><a href="#">home</a></li>
    <li><a href="#about">about</a></li>
    <li><a href="#experience">experience</a></li>
    <li><a href="#protfolio">protfolios</a></li>
    <li><a href="#testimonials">testimonial</a></li>
    <li><a href="#contact">contact</a></li>
  </ul>
  <div className="ftSocials">
  <li><a href="https://www.facebook.com/"><LiaFacebook/></a></li>
  <li><a href="https://www.instagram.com/i_am_akash._._/"><LiaInstagram/></a></li>
  <li><a href="https://www.twitter.com/"><CiTwitter/></a></li>
  </div>
  <div className="cpy">
    <small>&copy; S.ARIAKASH websites.Allrights reserved.</small>
  </div>
</footer>
  )
}

export default Footer