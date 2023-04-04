import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import servicesCategory from './servicesCategory';

export const Services = () => {
  return (
    <div className="services-page">
      <h1 className="page-heading-main">Usluge</h1>

      <div className="services-category-section">
        <div className="services-categories-container">
          {servicesCategory.map((service) => (
            <div className="service-element-card effect2" key={service.id}>
              <Link to={service.id}>
                <div className="element-card-img-container">
                  <div className="element-card-img">
                    <div
                      className="element-card-img-single"
                      style={{ backgroundImage: `url(${service.imageUrl})` }}
                    ></div>
                  </div>
                  <div className="element-card-icon">
                    <img src={service.iconUrl} alt={service.heading} />
                  </div>
                </div>
                <div className="element-card--category-heading">
                  {service.heading}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
