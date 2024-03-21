import React from 'react'
import './about.css'
import sidePhoto from '../../assets/side.jpg'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {MdRoundaboutRight} from 'react-icons/md'
import {GrProjects} from 'react-icons/gr'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>        
        <div className="container about_container">
          <div className="aboutMe">
            <div className="aboutImg">
              <img src={sidePhoto} alt="sidePhoto" />
            </div>
          </div>
          <div className="aboutContent">
            <div className="cards">
              <article className="card">
                <MdRoundaboutRight className='aboutIcon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              <article className="card">
                <AiOutlineUsergroupAdd className='aboutIcon'/>
                <h5>Clients</h5>
                <small>1+ clients</small>
              </article>
              <article className="card">
                <GrProjects className='aboutIcon'/>
                <h5>Projects</h5>
                <small>4+ completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, 
              laboriosam facere culpa eos ipsa mollitia commodi suscipit ratione
               molestias in harum tenetur vel voluptates debitis dolorum! Incidunt 
               hic vitae sit?
            </p>
            <a href="#contact" className='btn btn-primary'>let's talk</a>
          </div>
        </div>     
    </section>
  )
}

export default About