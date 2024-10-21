import React from 'react'
import "./Socials.css"
import socialImagesone from "../studioAsset/social1.jpeg"
import socialImagestwo from "../studioAsset/socials4.jpeg"
import socialImagesthree from "../studioAsset/socials5.jpeg"
import socialImagesfour from "../studioAsset/social7.jpeg"
import { CiInstagram } from "react-icons/ci";
import Message from './Message'

const SocialImages = [
  { src: socialImagesone, alt: "photoshot 1" },
  { src: socialImagestwo, alt: "photoshot 2" },
  { src: socialImagesthree, alt: "photoshot 3" },
  { src: socialImagesfour, alt: "photoshot 4" },
];


const Social = () => {
  return (
    <div>
    <div className='social_heading'>
      <h2>FOLLOW ME ON  <br/><strong>INSTAGRAM</strong></h2>
      <p>We’re thrilled to have you here! 🎉 Follow us for the latest updates, exclusive content, and a behind-the-scenes look at everything we do. Get inspired, discover our products/services, and stay connected with our growing community. 🌟</p>

      <div className='social_images'>
          {SocialImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className='social_image' />
          ))}
      </div>
      <div className='instagram_social'>
      <a href='https://www.instagram.com/'>
        <h3> <CiInstagram />  FOllow us THrough</h3>
      </a>
      </div>
    </div>
    <Message/>
    </div>
  )
}

export default Social
