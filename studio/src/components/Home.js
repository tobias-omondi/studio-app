import React from 'react';
import './Home.css';
import Aboutus from './Aboutus';
import { motion } from 'framer-motion';
import {useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();
  // Define caption details directly since no image is needed
  const caption = "Capture your best moments at Emba One Studio";
  const buttonText = "GET IN TOUCH";
  
  return (
    <>
      <div className="home-container">
        <div>
          <video className="background-video" autoPlay loop muted>
            <source src="https://res.cloudinary.com/djyfoquip/video/upload/v1731761624/cameravideo_wr2k2x.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="caption">
          <p className="caption-text">{caption}</p>
          <motion.button className="caption-button"
               whileHover={{ backgroundColor: "gray", scale: 0.9 }}
               whileTap={{ scale: 0.9 }}
               transition={{ duration: 0.5 }}
               onClick={() => navigate('/contact')}>
            {buttonText}
            </motion.button>
        </div>
      </div>
      <Aboutus />
    </>
  );
}

export default Home;
