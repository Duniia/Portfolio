import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsDribbble} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/dunia-ahmed-ali-721a48226/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Duniia" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com/Duniia" target="_blank"><BsDribbble/></a> 

    </div>
  )
}

export default HeaderSocials