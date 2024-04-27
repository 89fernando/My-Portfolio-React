import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line  */}
      <a href="#" className="footer__logo">
        Fernando Soares
      </a>

      <ul className="permalinks">
        {/* eslint-disable-next-line  */}
        <li>
          <a href="# ">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/89fernando/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/89fernando/">
          <FiInstagram />
        </a>
        <a href="https://github.com/89fernando">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Fernando Soares. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
