import React from 'react';
import {Link} from "react-router-dom";
import logo from "../studioAsset/logo.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className = 'main_container'>
      <div className='Logo'>
        <img src={logo} alt='Logo' />
        <nav>
        <ul>
            <li><Link to='/' className='nav_link'>Home</Link></li>
            <li><Link to='/gallery' className='nav_link'>Gallery</Link></li>
            <li><Link to='/podcast' className='nav_link'>Podcast</Link></li>
        </ul>
        </nav>
        <button type = 'submit'><Link to = '/contact' className = 'btn_link'> Contact us </Link> </button>
      </div>
    </div>
  )
}

export default Navbar
