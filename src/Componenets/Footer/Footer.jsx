import React from 'react'
import "./Footer.css"
import Logo from '../../Assets/Logo.png';
import { SiLinkedin, SiGithub, SiMedium} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href='' className='footer__logo'>
      <img src={Logo} alt="Logo" className="logo-img" />
      </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/roopamtyagi'><SiLinkedin size={25}/></a>
        <a href='https://github.com/TyRoopam9599'><SiGithub size={25}/></a>
        <a href='https://medium.com/@roopamtyagi72' target='blank'><SiMedium size={25}/></a>
      </div>

    </footer>
  )
}

export default Footer