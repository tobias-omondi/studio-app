import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Importing the default styles
import Social from './Social';
import testmony1 from "../studioAsset/testimony1.jpg";
import testmony2 from "../studioAsset/testmony2.jpg";
import testmony3 from "../studioAsset/testmony.jpg";
import testmony4 from "../studioAsset/testmony3.jpg";
import "./Testmony.css"

// Array of testimonials with images and captions
const thoughts = [
  { src: testmony1, alt: "Person 1", name: "Henry Oloa", captions: "I love the services on Emba1 studio" },
  { src: testmony2, alt: "Person 2", name: "Judy Lola", captions: "Great experience with Emba1 studio" },
  { src: testmony3, alt: "Person 3", name: "Papa Johnson", captions: "Highly recommend Emba1 studio" },
  { src: testmony4, alt: "Person 4", name: "Charity Love", captions: "Fantastic service and quality!" },
];

const Testimonials = () => {
  return (
    <>
      <div>
        <h2 style={{ color: 'black', textAlign: 'center', marginTop:'6rem' }}>Testimonials</h2>
        <AwesomeSlider className='testimonies_slides'>
          {thoughts.map((thought, index) => (
            <div key={index} className='testmony_sliders'>
              <img src={thought.src} alt={thought.alt} style={{ width: '100%', height: 'auto' }} />
              <h2>{thought.name}</h2>
              <p style={{ color: 'black', textAlign: 'center', marginTop: '10px' }}>{thought.captions}</p>
            </div>
          ))}
        </AwesomeSlider>
      </div>
      <Social />
    </>
  );
}

export default Testimonials;
