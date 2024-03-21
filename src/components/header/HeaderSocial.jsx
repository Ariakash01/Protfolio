import React from 'react'
import{CiLinkedin} from 'react-icons/ci'
import{BiLogoInstagram} from 'react-icons/bi'
import{DiGithubBadge} from 'react-icons/di'
const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.instagram.com/i_am_akash._._/" target='__blank'><BiLogoInstagram/></a>
        <a href="https://www.linkedin.com/in/ariakash-s-338b901b4/" target='__blank' ><CiLinkedin/></a>
        <a href="https://www.githup.com/Ariakash01" target='__blank'><DiGithubBadge/></a>
    </div>
  )
}

export default HeaderSocial