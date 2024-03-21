import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
const Nav = () => {
  const [active,setActive]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>{setActive('#')}} className={active==='#'? 'active':''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActive('#about')}} className={active==='#about'? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{setActive('#experience')}} className={active==='#experience'? 'active':''}><BiBookAlt/></a>
      <a href="#testimonial" onClick={()=>{setActive('#testimonial')}} className={active==='#testimonial'? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>{setActive('#contact')}} className={active==='#contact'? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav