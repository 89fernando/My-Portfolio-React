import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/89fernando/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/89fernando" target="blank"><FaGithub/></a>
        <a href="https://medium.com/@89fernando" target="blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials;