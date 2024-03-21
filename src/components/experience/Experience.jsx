import React from 'react'
import { BsPatchCheck} from 'react-icons/bs'
import './experience.css'
const Experience = () => {
  return (
    <section id="experience">
      <h5>what Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp_container">
        <div className="frontend">
          <h3>FULLSTACK</h3>
            <div className="expContent">
              <article className="exDetail">
                < BsPatchCheck className='checkIcon' />
                <dir>
                <h4>HTML</h4>
                <small className='textLight'>Beginner</small>
                </dir>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
                <div>
                <h4>CSS</h4>
                <small className='textLight'>Beginner</small>
                </div>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon' />
                <div>
                <h4>JAVASCRIPT</h4>
                <small className='textLight'>Beginner</small>
                </div>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
               <div>
               <h4>REACT</h4>
                <small className='textLight'>Beginner</small>
               </div>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
                <div>
                <h4>REACT</h4>
                <small className='textLight'>Beginner</small>
                </div>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
                <div>
                <h4>MONGODP</h4>
                <small className='textLight'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
        <div className="backend">
          <h3>KNOWLEDGE</h3>
        <div className="expContent">
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
               <div>
               <h4>C </h4>
                <small className='textLight'>Intermidiate</small>
               </div>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
                <div>
                <h4>JAVA</h4>
                <small className='textLight'>Beginner</small>
                </div>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
               <div>
               <h4>PYTHON</h4>
                <small className='textLight'>Beginner</small>
               </div>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
                <div><h4>MY SQL</h4>
                <small className='textLight'>Beginner</small>
                </div>
              </article>
              <article className="exDetail">
                < BsPatchCheck className='checkIcon'/>
                <div>
                <h4>NODE JS</h4>
                <small className='textLight'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience