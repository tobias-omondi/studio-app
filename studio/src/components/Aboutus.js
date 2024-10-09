import React from 'react'
import './Aboutus.css'
import aboutus1 from '../studioAsset/aboutus1.jpg'


const aboutParagraph = [
    {
        heading: "ABOUT US",
        caption1: "Emba One Studio is a professional photography space dedicated to bringing your vision to life. Our talented team specializes in capturing unique moments through creative and high-quality photography. From portraits and fashion to events and product shoots, we strive to create stunning visuals that tell your story.",
        caption2: "We combine state-of-the-art equipment with a passion for artistry, ensuring every image is crafted with precision and style. At Emba One Studio, we believe that each photoshoot should be an enjoyable and inspiring experience, which is why we work closely with our clients to deliver results that exceed expectations."
    }
]

const aboutImage = [
    {
        image: aboutus1 , alt: "photo",
        heading1: "What we Do!",
        caption3: "Our images capture the essence of creativity and artistry, showcasing unique moments and stunning visuals that tell your story. Each photograph is thoughtfully crafted, highlighting the beauty and emotion behind every scene. Whether it's a vibrant portrait, a captivating event, or an intricate product shot, our work reflects a deep commitment to quality and creativity. We believe that every image should resonate with the viewer, making it an unforgettable piece of art."
    }
]

const Aboutus = () => {
  return (
    <>
    <div className='about_section'>
        <h2>{aboutParagraph[0].heading}</h2>
        <p>{aboutParagraph[0].caption1}</p>
        <p>{aboutParagraph[0].caption2}</p>
    </div>
    <div className='main_section'>
    <div className='about_img'>
        <img src = {aboutImage [0].image} alt = {aboutImage.photo} />
    </div>
    <div className='last_caption'>
        <h2>{aboutImage[0].heading1}</h2>
        <p>{aboutImage[0].caption3}</p>
    </div>
    </div>
    </>
  )
}

export default Aboutus
