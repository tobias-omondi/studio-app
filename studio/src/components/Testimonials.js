import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Social from './Social';
import testmony1 from "../studioAsset/testimony1.jpg";
import testmony2 from "../studioAsset/testmony2.jpg";
import testmony3 from "../studioAsset/testmony.jpg";
import testmony4 from "../studioAsset/testmony3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Testmony.css";
import { Pagination, Navigation } from 'swiper/modules';

const thoughts = [
  { src: testmony1, alt: "Person 1", name: "Henry Oloa", captions: "''Emba1 studio has transformed my perspective on quality and service. They offer a highly personalized experience that ensures every detail is attended to. The team is extremely professional, and I’ve felt valued at every interaction.''" },
  { src: testmony2, alt: "Person 2", name: "Judy Lola", captions: "''The level of creativity and dedication at Emba1 studio is unmatched. Their unique approach to customer service makes each experience feel special, leaving a lasting impression on clients like myself.''" },
  { src: testmony3, alt: "Person 3", name: "Papa Johnson", captions: "''Emba1 studio truly exceeded my expectations! From start to finish, they delivered professionalism and quality. I highly recommend Emba1 for anyone looking for a reliable and innovative partner.''" },
  { src: testmony4, alt: "Person 4", name: "Charity Love", captions: "''Fantastic service and quality! Emba1 studio combines artistry with technical expertise, producing results that are not only visually stunning but also exceed industry standards.''" },
];

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-heading">
        <h3 style={{ textAlign: 'center' }}>What people say about us</h3>
      </div>
      <div className="testimonials-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          className="myswiper"
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {thoughts.map((thought, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-slide">
                <img src={thought.src} alt={thought.alt} className="testimonial-image" />
                <h3>{thought.name}</h3>
                <p>{thought.captions}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Social />
    </>
  );
};

export default Testimonials;
