import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../studioAsset/logo.png";
import { HiBars3CenterLeft ,HiXMark } from "react-icons/hi2";
import './Navbar.css';

const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'Gallery', url: '/gallery' },
  { title: 'Podcast', url: '/podcast' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='main_container'>
      <div className='Logo'>
        <img src={logo} alt='Logo' />
      </div>
      <nav className={`nav_menu ${isMenuOpen ? 'active' : ''}`}>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={link.url} className='nav_link' onClick={closeMenu}>{link.title}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <div className='contact_button'>
        <motion.button
          type='button'
          whileHover={{ backgroundColor: "gray", scale: 0.9 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <Link to='/contact' className='btn_link' onClick={closeMenu}>Contact Us</Link>
        </motion.button>
      </div>
      <div className='toggle_menu' onClick={toggleMenu}>
      {isMenuOpen ? <HiXMark /> : <HiBars3CenterLeft />}
      </div>
    </div>
  );
}

export default Navbar;