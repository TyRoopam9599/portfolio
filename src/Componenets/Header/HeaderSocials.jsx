import React from 'react'
import {SiLinkedin, SiGithub, SiLeetcode, SiHackerrank} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/roopamtyagi' target='blank'><SiLinkedin size={25}/></a>
        <a href='https://github.com/TyRoopam9599' target='blank'><SiGithub size={25}/></a>
        <a href='https://leetcode.com/roopam_9599' target='blank'><SiLeetcode size={25}/></a>
        <a href='https://hackerrank.com/roopamtyagi72' target='blank'><SiHackerrank size={25}/></a>
        {/* <a href='https://geeksforgeeks.org/profile/roopamtyagi72' target='blank'><SiGeeksforgeeks/></a> */}
    </div>
  )
}

export default HeaderSocials