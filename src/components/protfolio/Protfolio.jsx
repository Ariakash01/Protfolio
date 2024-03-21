import React from 'react'
import './protfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Protfolio = () => {
  return (
    <section id="protfolio">
      <h5>Recent work</h5>
      <h2>projects</h2>
      <div className="container protContainer">
        <article className="protItem">
          <div className="protImg">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>This is my Projects</h3>
          <a href="https://github.com/Ariakash01" className='btn btn-primary' target='__blank'>Get code</a>
        </article>
        <article className="protItem">
          <div className="protImg">
            <img src={IMG2} alt="img1" />
          </div>
          <h3>This is my Projects</h3>
          <a href="https://github.com/Ariakash01" className='btn btn-primary' target='__blank'>Get code</a>
        </article>
        <article className="protItem">
          <div className="protImg">
            <img src={IMG3} alt="img1" />
          </div>
          <h3>This is my Projects</h3>
          <a href="https://github.com/Ariakash01" className='btn btn-primary' target='__blank'>Get code</a>
        </article>
        <article className="protItem">
          <div className="protImg">
            <img src={IMG4} alt="img1" />
          </div>
          <h3>This is my Projects</h3>
          <a href="https://github.com/Ariakash01" className='btn btn-primary' target='__blank'>Get code</a>
        </article>
        <article className="protItem">
          <div className="protImg">
            <img src={IMG5} alt="img1" />
          </div>
          <h3>This is my Projects</h3>
          <a href="https://github.com/Ariakash01" className='btn btn-primary' target='__blank'>Get code</a>
        </article>
        <article className="protItem">
          <div className="protImg">
            <img src={IMG6} alt="img1" />
          </div>
          <h3>This is my Projects</h3>
          <a href="https://github.com/Ariakash01" className='btn btn-primary' target='__blank'>Get code</a>
        </article>
      </div>
    </section>
  )
}

export default Protfolio