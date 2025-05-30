import React from 'react'
import { FaTiktok , FaInstagram} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImYoutube } from "react-icons/im";
import "./Footer.css"
import logofooter from '../studioAsset/logo.png'

const Footer = () => {

  const currentYear = new Date ().getFullYear()
  return (
    <>
    <div className='footer-container'>
      <div className='logo-footer'>
        <img src={logofooter} alt='logo' />

        <div className='logo-heading'>
          <h2>Emba One Studio</h2>
        </div>

      </div>
      <div className='footer-icons'>
          <ul>
            <li>
              <a href='https://x.com/'> <FaSquareXTwitter /></a>
            </li>
            <li>
              <a href='https://www.instagram.com/'> <FaInstagram /></a>
            </li>
            <li>
              <a href='https://www.tiktok.com/'> <FaTiktok /></a>
            </li>
            <li>
              <a href='https://www.youtube.com/'> <ImYoutube /></a>
            </li>
          </ul>
        </div>
        
      <div className='social-links'>
        <h2>OUR WEB LINKS</h2>
        <ul>
          <li>
            <a href='#'>About us</a>
          </li>
          <li>
            <a href='/gallery'>Gallery</a>
          </li>
          <li>
            <a href='/videos'>Videos</a>
          </li>
        </ul>
        <p>Got questions, ideas, or just want to say hello?  Stay in touch and let’s keep this conversation going!</p>
      </div>
    </div>
    <p style={{color:'#8b8b8b', textAlign:'center', fontFamily:'"Afacad Flux", sans-serif', backgroundColor:'#000',textDecoration:'overline'}}>© {currentYear} Emba One Studio. All rights reserved.</p>
    </>
  )
}

export default Footer
