import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { BsAward } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
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
            <article className="about__card">
              <BsAward />
              <h5>Experience</h5>
              <small> 3 + Years of Experience </small>
            </article>
            <article className="about__card">
              <BsBook />
              <h5>Studies</h5>
              <small> 1.500+ Studying Hours</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small> 30+ Completed</small>
            </article>
          </div>
          <p>
            I am a professional with a postgraduate degree in Business
            Administration, with emphasis on processes, improvements and
            management. I studied fullstack development and currently study
            systems analysis and development.
            <br />
            I've been a frontend developer for over 3 years. I am a big fan of
            technology and agile methodologies.
            <br />I believe that technology simplifies people's lives and
            connects them to many possibilities.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5551981626259"
            target="blank"
            className="btn btn-primary"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
