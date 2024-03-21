import React from 'react'
import './header.css'
import header from '../../assets/dpp.jpg'
import Cta from './Cta'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>S.Ariakash</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <Cta />
          <HeaderSocial />
          <div className="me">
            <img src={header} alt="me" className='dp'/>
          </div>
          <a href="#contact" className='scroll__down'>Scroll down</a>

        </div>

      </header>
   
    </div>
  )
}

export default Header