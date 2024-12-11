import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css'
import gallery1 from "../studioAsset/gallery4.jpg";
import gallery2 from "../studioAsset/gallery2.jpg";
import gallery3 from "../studioAsset/gallery3.jpeg";
import gallery4 from "../studioAsset/gallery1.jpg";
import { motion } from "framer-motion"; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import GalleryImages from './GalleryImages';

const embaSliders = [
  { src: gallery1, alt: "EMBA Image 2", caption: "Explore the creativity at Emba One Studio—view our gallery to see our stunning photography work!", buttonText: "View our Gallery", showButton: false },
  { src: gallery2, alt: "EMBA Image 3" },
  { src: gallery3, alt: "EMBA Image 3"},
];

const Gallery = () => {
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
    <GalleryImages />
    </>
  );
}

export default Gallery;
