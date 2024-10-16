import React from 'react';
import test1 from '../studioAsset/test1.jpeg';
import test2 from '../studioAsset/services12.jpeg';
import test3 from '../studioAsset/text7.jpg';
import test4 from '../studioAsset/test4.jpeg';
import test5 from '../studioAsset/test5.jpeg';
import test6 from '../studioAsset/test5.jpg';
import Testimonials from './Testimonials';

// CSS import
import "./Imagesec.css";

const imageGallery = [
  { src: test1, width: '300px', height: '200px' },
  { src: test2, width: '400px', height: '300px' },
  { src: test3, width: '350px', height: '250px' },
  { src: test4, width: '450px', height: '350px' },
  { src: test5, width: '300px', height: '300px' },
  { src: test6, width: '400px', height: '250px' }
];


const Imagesec = () => {
  return (
    <>
    <div className='add_margin'>
      <div className='section_img'>
        {imageGallery.map((image, index) => (
          <img 
            key={index} 
            src={image.src} 
            className='section_img_gallery'
            alt={`gallery-img-${index}`} 
          />
        ))}
      </div>
    </div>
    <Testimonials />
    </>
  );
}

export default Imagesec;
