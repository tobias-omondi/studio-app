import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import logo from "../studioAsset/logo.png";
import './Navbar.css';

const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'Gallery', url: '/gallery' },
  { title: 'Podcast', url: '/podcast' },
];

const Navbar = () => {
  return (
    <div className='main_container'>
      <div className='Logo'>
        <img src={logo} alt='Logo' />
      </div>
      <nav>
        <motion.ul
          initial={{ opacity: 0, y: -20 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1 }} // Scale on hover
              transition={{ type: "spring", stiffness: 300 }} // Spring effect on hover
            >
              <Link to={link.url} className='nav_link'>{link.title}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <div className='contact_button'>
        <motion.button 
          type='button'
          whileHover={{ backgroundColor: "gray", scale: 0.9 }} // Change background color and scale on hover
          whileTap={{ scale: 0.9 }} // Scale down on click
          transition={{ duration: 0.4 }} // Transition duration for hover and tap effects
        >
          <Link to='/contact' className='btn_link'>Contact Us</Link>
        </motion.button>
      </div>
    </div>
  );
}

export default Navbar;