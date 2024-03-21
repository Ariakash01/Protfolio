import React from 'react'
import Resume from '../../assets/RESUME.pdf'
const Cta = () => {
  return (
    <div className="cta">
        <a href={Resume} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Talk us</a>
    </div>
  )
}

export default Cta