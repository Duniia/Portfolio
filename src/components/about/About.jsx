import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Lidt omkring</h5>
      <h2>Mig</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Erfaring</h5>
              <small>Lidt</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projekter</h5>
              <small>11</small>
            </article>
          </div>

          <p>
          Min passion er at skabe noget, jeg finde glæde i at se processens udvikling fra start til slut. Mine nærmeste beskriver mig som en meget aktiv, handywoman, ydmyg og selvstændig. Deruover nævner de at jeg er smmilende, ansvarsbevidst, positiv, engageret og stabil. 
          Min personlighedstype er INFJA, så jeg er en selsikekr individualist og hviler i mig selv. 
          Den der inspirere mig i mit liv, er en jeg deler samme personlighedstype med, Martin Luther King, fordi han var en fremragende offentlig taler der havde en admiralsag og drøm. 
          </p>

          <a href="#contact" className='btn btn-primary'>Kontakt mig</a>
        </div>
      </div>
    </section>
    )
}

export default About