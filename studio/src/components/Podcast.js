import React from 'react';
import podcast2 from "../studioAsset/podcast1.jpg";
import podcast3 from "../studioAsset/podcast2.jpg";
import './Home.css';
import { motion } from "framer-motion"; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Videos from './Videos';
import './Gallery.css'



const embaSliders = [
  { src: podcast2, alt: "EMBA Image 2", caption: "Explore the creativity at Emba One Studio—view our gallery to see our stunning photography work!", buttonText: "View our Gallery", showButton: false },
  { src: podcast3, alt: "EMBA Image 3", caption: "We offer 3D photo editing to add depth and dimension to your images. Transform your pictures into stunning art!", buttonText: "View Services", showButton: false }
];


const Podcast = () => {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      spaceBetween = {0}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop
    >
      {embaSliders.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="slider-item">
            <img src={image.src} alt={image.alt} />
            <div className="caption_gallery">
              <p>{image.caption}</p>
              {image.showButton && (
                <motion.button
                  className="slider-button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {image.buttonText}
                </motion.button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <Videos/>
    </>
  );
}

export default Podcast;
