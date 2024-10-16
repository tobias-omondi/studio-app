import React from 'react';
import emba1 from "../studioAsset/emba1.jpg";
import emba2 from "../studioAsset/emba2.jpg";
import emba3 from "../studioAsset/emba3.jpg";
import emba4 from "../studioAsset/emba4.jpg";
import './Home.css';
import { motion } from "framer-motion"; // Import motion from framer-motion
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay'; 
import 'react-awesome-slider/dist/styles.css'; // Basic styles
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'; // Correct path
import Aboutus from './Aboutus';
import Services from './Services';

// Create an array of image objects with captions and button information
const embaSliders = [
  { src: emba1, alt: "EMBA Image 1", caption: "Capture your best moments at Emba One Studio—where creativity meets professional photography in every shot!", buttonText: "GET IN TOUCH", showButton: true },
  { src: emba2, alt: "EMBA Image 2", caption: "Explore the creativity at Emba One Studio—view our gallery to see our stunning photography work!", buttonText: "View our Gallery", showButton: true },
  { src: emba3, alt: "EMBA Image 3", caption: "We offer 3D photo editing to add depth and dimension to your images. Transform your pictures into stunning art!", buttonText: "View Services", showButton: true },
  { src: emba4, alt: "EMBA Image 4", caption: "Get in touch with us for bookings, inquiries, or consultations. We're here to help capture your vision!", buttonText: "Contact Us", showButton: true }
];

// Wrap AwesomeSlider with Autoplay functionality
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  return (
    <>
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} 
      interval={13000}
      animation="foldOutAnimation" 
    >
      {embaSliders.map((image, index) => (
        <div key={index} className="slider-item">
          <img src={image.src} alt={image.alt} />
          <div className="caption">
            <p>{image.caption}</p>
            {image.showButton && (
              <motion.button
                className="slider-button"
                initial={{ opacity: 0, scale: 0.8 }} // Initial state
                animate={{ opacity: 1, scale: 1 }} // Animate to this state
                transition={{ duration: 0.5 }} // Duration of the animation
                whileHover={{ scale: 1.05 }} // Scale up on hover
                whileTap={{ scale: 0.95 }} // Scale down on tap
              >
                {image.buttonText}
              </motion.button>
            )}
          </div>
        </div>
      ))}
    </AutoplaySlider>
    <Aboutus />
    <Services />
    </>
  );
}

export default Home;