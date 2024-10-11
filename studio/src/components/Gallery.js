import React from 'react';
import gallery1 from "../studioAsset/gallery4.jpg";
import gallery2 from "../studioAsset/gallery2.jpg";
import gallery3 from "../studioAsset/gallery3.jpeg";
import gallery4 from "../studioAsset/gallery1.jpg";
import './Home.css';
import { motion } from "framer-motion"; 
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay'; 
import 'react-awesome-slider/dist/styles.css'; // Basic styles
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'; // Correct path


// Create an array of image objects with captions and button information
const embaSliders = [
  { src: gallery1, alt: "EMBA Image 2", caption: "Explore the creativity at Emba One Studio—view our gallery to see our stunning photography work!", buttonText: "View our Gallery", showButton: true },
  { src: gallery2, alt: "EMBA Image 3", caption: "We offer 3D photo editing to add depth and dimension to your images. Transform your pictures into stunning art!", buttonText: "View Services", showButton: true },
  { src: gallery3, alt: "EMBA Image 3", caption: "We offer 3D photo editing to add depth and dimension to your images. Transform your pictures into stunning art!", buttonText: "View Services", showButton: true },
  { src: gallery4, alt: "EMBA Image 3", caption: "We offer 3D photo editing to add depth and dimension to your images. Transform your pictures into stunning art!", buttonText: "View Services", showButton: true }
];

// Wrap AwesomeSlider with Autoplay functionality
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Gallery = () => {
  return (
    <>
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} 
      interval={10000}
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
    </>
  );
}

export default Gallery;