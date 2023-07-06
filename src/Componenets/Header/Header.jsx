import React from 'react'
import "./Header.css"
import CTA from './CTA'
import Profile from "../../Assets/ProfileImage.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {

  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Roopam Tyagi</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <div className='profile'>
          <div className='profile-img'>
            <img src={Profile} alt='ProfileImage' />
          </div>
        </div>
        <HeaderSocials />
        <a href='#contact' className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header