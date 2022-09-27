import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>DUNIA</a>
      <ul className='permalinks'>
        <li><a href="#">Hjem</a></li>
        <li><a href="#about">Om</a></li>
        <li><a href="#experience">Erfaring</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testiomonials</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer_socials">
        <a href="www.linkedin.com/in/dunia-ahmed-ali-721a48226"><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; DUNIA 2022. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer