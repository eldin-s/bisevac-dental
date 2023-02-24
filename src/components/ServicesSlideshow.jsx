import React from 'react';
import './ServicesSlideshow.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import services from './services';

export const ServicesSlideshow = () => {
  const slideshowServices = services;

  return (
    <div className="homepage-services-container">
      <div className="homepage-services-heading">
        <p>
          Svi naši tretmani i usluge se pružaju u udobnoj klinici nalik banji,
          dizajniranoj u skladu sa standardima visokog kvaliteta.
        </p>
      </div>

      <div className="homepage-services-slideshow-container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          speed={1000}
          pagination={{ clickable: true }}
        >
          {slideshowServices.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-element-card">
                <div className="element-card-img-container">
                  <div className="element-card-img">
                    <img src={service.imageUrl} alt={service.heading} />
                  </div>
                  <div className="element-card-icon">
                    <img src={service.iconUrl} alt={service.heading} />
                  </div>
                </div>
                <div className="element-card-heading">{service.heading}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
