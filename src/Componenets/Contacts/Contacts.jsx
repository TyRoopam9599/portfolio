import React from 'react'
import "./Contacts.css";
import { MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

const Contacts = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>roopamtyagi72@gmail.com</h5>
            <a href="mailto:roopamtyagi72@gmail.com" target='blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>9310447517</h5>
            <a href="https://api.whatsapp.com/send?phone=+919310447517" target='blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FiPhoneCall className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>9310447517</h5>
            <a href="tel:9310447517">Ring my Phone</a>
          </article>
        </div>
        {/* <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contacts