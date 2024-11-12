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

      <div className='copywrite-container'>
        <p>&copy; <i>{currentYear} EMBA ONE STUDIO.</i> All rights reserved.</p>
      </div>
    </div>

    <div className='social-link-footer'>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/gallery'>GALLERY</a>
        </li>
        <li>
          <a href='/podcast'>PODCAST</a>
        </li>
        <li>
          <a href='/videos'>VIDEOS</a>
        </li>
        <li>
          <a href='/contact'>CONTACT</a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Footer
