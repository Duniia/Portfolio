import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ag16e9', 'template_elguswt', form.current, 'baPRWiTVFNYxz9sUy')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Skriv en besked</h5>
      <h2>Kontakt mig</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>dunia@live.dk</h5>
            <a href="mailto:dunia@live.dk" target="_blank">Send en besked</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Dunia Ahmed</h5>
            <a href="https://m.me/DbintAhmad/" target="_blank">Send en besked</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Mobil</h5>
            <a href="https://wa.me/+4571310961" target="_blank">Send en besked</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='subject' placeholder='Emne' required />
          <input type="text" name='name' placeholder='Dit Fuldenavn' required />
          <input type="email" name='email' placeholder='Din Email' required />
          <textarea name="message" rows="7" placeholder='Din Besked' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Besked</button>
        </form>

      </div>
    </section>
  )
}

export default Contact