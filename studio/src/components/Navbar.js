import React from 'react';
import {Link} from "react-router-dom";
import logo from "../studioAsset/logo.png"

const Navbar = () => {
  return (
    <div>
      <div className='Logo'>
        <img src={logo} alt='Logo' />
        <nav>
        <ul>
            <li><Link to='/' className='nav_link'>Home</Link></li>
            <li><Link to='/gallery' className='nav_link'>Gallery</Link></li>
            <li><Link to='/podcast' className='nav_link'>Podcast</Link></li>
            <li><Link to='/contact' className='nav_link'>Contact</Link></li>
        </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
