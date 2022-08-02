import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return ( 
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward/>
              <h5>Experience</h5>
              <small> 1+ Years Working</small>
            </article>
            <article className='about__card'>
              <BsBook/>
              <h5>Studies</h5>
              <small> 1.500+ Studying Hours</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary/>
              <h5>Projects</h5>
              <small> 10+ Completed</small>
            </article>
          </div>
          <p>
            Full Stack Developer, fã de tecnologia e entusiasta de metodologias ágeis.
            As principais tecnologias que utilizo atualmente no Front-End são: #React.JS, #JavaScript, #ReactStrap, #HTML, #CSS, #Bootstrap e Material UI. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
