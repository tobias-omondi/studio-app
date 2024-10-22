import React from 'react'
import './Footer.css'
import logo from "../studioAsset/logo.png";
import { ImYoutube } from "react-icons/im";
import { FaTiktok , FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {

  const currentYear = new Date ().getFullYear();
  return (
    < div className='Footer-container'>
    <div className='Footer-menu'>
      <h2 style={{color:'black'}}>EMBA ONE STUDIO </h2>
      <p>Connecting creativity with innovation to bring your ideas to life.</p>
      <div className='Footer-Logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='socialmedia-logo'>
        <ul>
          <li>
            <a><ImYoutube /></a>
          </li>
          <li>
            <a><FaInstagram /></a>
          </li>
          <li>
            <a><FaTwitter /></a>
          </li>
          <li>
            <a><FaTiktok /></a>
          </li>
        </ul>
      </div>
      <div>
        <p>&copy; {currentYear} EMBA ONE STUDIO. All rights reserved.</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
