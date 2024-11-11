import React from 'react';
import './Home.css';
import Aboutus from './Aboutus';
import { motion } from 'framer-motion';

const Home = () => {
  // Define caption details directly since no image is needed
  const caption = "Capture your best moments at Emba One Studio—where creativity meets professional photography in every shot!";
  const buttonText = "GET IN TOUCH";
  
  return (
    <>
      <div className="home-container">
        <div>
          <video className="background-video" autoPlay loop muted>
            <source src="https://res.cloudinary.com/djyfoquip/video/upload/v1731322339/2512876-hd_1920_1080_30fps_doohvr.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="caption">
          <p className="caption-text">{caption}</p>
          <motion.button className="caption-button"
               whileHover={{ backgroundColor: "gray", scale: 0.9 }}
               whileTap={{ scale: 0.9 }}
               transition={{ duration: 0.5 }}>
            {buttonText}
            </motion.button>
        </div>
      </div>
      <Aboutus />
    </>
  );
}

export default Home;
