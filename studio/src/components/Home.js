import React from 'react';
import emba1 from "../studioAsset/emba1.jpg";
import emba2 from "../studioAsset/emba2.jpg";
import emba3 from "../studioAsset/emba3.jpg";
import emba4 from "../studioAsset/emba4.jpg";
import './Home.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay'; 
import 'react-awesome-slider/dist/styles.css'; // Basic styles
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'; // Correct path

// Create an array of image objects with captions and button information
const embaSliders = [
  { src: emba1, alt: "EMBA Image 1", caption: "Capture your best moments at Emba One Studio—where creativity meets professional photography in every shot!", buttonText: "GET IN TOUCH", showButton: true },
  { src: emba2, alt: "EMBA Image 2", caption: "This is EMBA Image 2", buttonText: "Discover", showButton: false },
  { src: emba3, alt: "EMBA Image 3", caption: "This is EMBA Image 3", buttonText: "View Details", showButton: false },
  { src: emba4, alt: "EMBA Image 4", caption: "This is EMBA Image 4", buttonText: "Explore", showButton: false }
];

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} 
      interval={7000}
      animation="foldOutAnimation" 
    >
      {embaSliders.map((image, index) => (
        <div key={index} className="slider-item">
          <img src={image.src} alt={image.alt} />
          <div className="caption">
            <p>{image.caption}</p>
            {image.showButton && (
              <button className="slider-button">{image.buttonText}</button>
            )}
          </div>
        </div>
      ))}
    </AutoplaySlider>
  );
}

export default Home;