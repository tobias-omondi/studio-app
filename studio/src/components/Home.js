import React from 'react';
import emba1 from "../studioAsset/emba1.jpeg";
import emba2 from "../studioAsset/emba2.jpg";
import emba3 from "../studioAsset/emba3.jpg";
import emba4 from "../studioAsset/emba4.jpg";

// Create an array of image objects
const embaSliders = [
  { src: emba1, alt: "EMBA Image 1" },
  { src: emba2, alt: "EMBA Image 2" },
  { src: emba3, alt: "EMBA Image 3" },
  { src: emba4, alt: "EMBA Image 4" }
];

const Home = () => {
  return (
    <div>
      <div className="slider">
        {embaSliders.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
        ))}
      </div>
    </div>
  );
}

export default Home;