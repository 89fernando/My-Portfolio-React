import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
              <small> 1+ Years of Experience </small>
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
            I am a postgraduated professional in Business Administration, with an emphasis on processes, improvements and management.
            I am currently studying technologies aimed at web development.
            I am a technology fan and agile methodologies enthusiastic.
            I believe that technology simplifies people's lives and connects them to many possibilities. 
          </p>
          <a href="https://api.whatsapp.com/send?phone=5551981626259" target="blank" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
