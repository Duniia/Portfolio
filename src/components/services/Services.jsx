import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Hvad jeg kan tilbyde</h5>
      <h2>Mine kompetencer</h2>

      <div className="container services_container">
        <article className="service">
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Jeg har den nyeste viden og friske øjne indenfor digitale brugeroplevelser og udvikling </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Skabe produkter der er inuitative</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Intresse for UX/Ui </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Erfaring fra fritids projekter</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Kan skabe noget fra skitse til færdigprojekt</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Forståelse for design og brugers behov.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

                <article className="service">
          <div className='service_head'>
            <h3>Web Udvikler</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Stor interesse og lyst til at udvikler mig som Frontend Udvikler</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lavet et freelance job for en mindre start-up firma på Shopify hvor de skulle have en Webshop.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Nemt ved at sætte mig ind i et nyt sprog</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Tidligere studeret til Software ingeniør på Aarhus Universitet</p>
            </li>
          </ul>
        </article>
                {/* END OF DEVELPOPER */}

                <article className="service">
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Erfaring indenfor at blogge</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Har erfaring med at lave Youtube-video, tiktok og instagram.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Jeg har tidligere designet en Ramadan Journal, med 60 siders content der blev udsolgt på kort tid.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content */}

      </div>
    </section>
  )
}

export default Services