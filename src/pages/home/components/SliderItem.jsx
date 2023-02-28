import React from 'react';

export const SliderItem = ({ services }) => {
  return (
    <>
      {services.map((service) => (
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
      ))}
    </>
  );
};

/* <div className="service-element-card">
      <div className="element-card-img-container">
        <div className="element-card-img">
          <img src={services[1].imageUrl} alt={services[1].heading} />
        </div>
        <div className="element-card-icon">
          <img src={services[1].iconUrl} alt={services[1].heading} />
        </div>
      </div>
      <div className="element-card-heading">{services[1].heading}</div>
    </div> */
