import React from 'react'
import test1 from '../studioAsset/test1.jpeg'
import test2 from '../studioAsset/social2.jpeg'
import test3 from '../studioAsset/social3.jpeg'
import test4 from '../studioAsset/test4.jpeg'
import test5 from '../studioAsset/test5.jpeg'
import test6 from '../studioAsset/test6.jpeg'
import Testimonials from './Testimonials'

const imageGallery = [
    { src: test1 },
    { src: test2 },
    { src: test3 },
    { src: test4 },
    { src: test5 },
    { src: test6 }
]

const Imagesec = () => {
  return (
    <>
    <div className='section_img'>
      {imageGallery.map((image, index) => (
        <img key={index} src={image.src} alt={`gallery-img-${index}`} />
      ))}
    </div>
    <Testimonials />
    </>
  )
}

export default Imagesec
