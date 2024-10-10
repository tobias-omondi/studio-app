import React from 'react';
import './Services.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Services1 from "../studioAsset/services10.jpeg";
import Services2 from "../studioAsset/services16.jpg";
import Services3 from "../studioAsset/services15.jpeg";
import Services4 from "../studioAsset/services15.jpg";
import Services5 from "../studioAsset/services14.jpg";
import Services6 from "../studioAsset/services6.jpeg";
import Services7 from "../studioAsset/services8.jpeg";

// Array of service images and descriptions
const imageServices = [
    { src: Services1, description: "Description for Service 1" },
    { src: Services2, description: "Description for Service 2" },
    { src: Services3, description: "Description for Service 3" },
    { src: Services4, description: "Description for Service 4" },
    { src: Services5, description: "Description for Service 5" },
    { src: Services6, description: "Description for Service 6" },
    { src: Services7, description: "Description for Service 7" },
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
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        pagination={{ clickable: true }} // Pagination bullets
        navigation={true} // Navigation arrows enabled
        breakpoints={{
          640: { slidesPerView: 1 }, // Show 1 slide on mobile screens
          768: { slidesPerView: 2 }, // Show 2 slides on tablet screens
          1024: { slidesPerView: 3 }, // Show 3 slides on desktop screens
        }}
      >
        {imageServices.map((service, index) => (
          <SwiperSlide key={index} className='services_slide'>
            {/* Container to wrap the image and the overlay text */}
            <div className='image_container'>
              <img src={service.src} alt={`Service ${index + 1}`} className='image_slider' />
              <div className='caption_description'>
                <p>{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Services;
