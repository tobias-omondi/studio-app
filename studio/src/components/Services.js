import React from 'react';
import './Services.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import necessary modules
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Services1 from "../studioAsset/services7.jpeg";
import Services2 from "../studioAsset/services1.jpg";
import Services3 from "../studioAsset/services3.jpeg";
import Services4 from "../studioAsset/services4.jpeg";
import Services5 from "../studioAsset/services2.jpeg";
import Services6 from "../studioAsset/services6.jpeg";
import Services7 from "../studioAsset/services8.jpeg";
import Services8 from "../studioAsset/services9.jpeg";

// Array of service images and descriptions
const imageServices = [
    { src: Services1, description: "Description for Service 1" },
    { src: Services2, description: "Description for Service 2" },
    { src: Services3, description: "Description for Service 3" },
    { src: Services4, description: "Description for Service 4" },
    { src: Services5, description: "Description for Service 5" },
    { src: Services6, description: "Description for Service 6" },
    { src: Services7, description: "Description for Service 7" },
    { src: Services8, description: "Description for Service 8" },
];

const Services = () => {
  return (
    <div className='services_container'>
      <div className='services_heading'>
        <h2>Services</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Register modules
        spaceBetween={30} // Space between slides
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay settings
        pagination={{ clickable: true }} // Pagination bullets
        navigation={true} // Navigation arrows enabled
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 1, // Show 1 slide on mobile screens
          },
          768: {
            slidesPerView: 2, // Show 2 slides on tablet screens
          },
          1024: {
            slidesPerView: 3, // Show 3 slides on desktop screens
          }
        }}
      >
        {imageServices.map((service, index) => (
          <SwiperSlide key={index} className='services_slide'>
            <img src={service.src} alt={`Service ${index + 1}`} style={{ width: '100%'}} className='image_slider'/>
            <div className='caption'>
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Services;