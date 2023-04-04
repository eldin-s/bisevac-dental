import React from 'react';
// import servicesCategory from './servicesCategory';
import services from '../home/components/services';
import { Link, useParams } from 'react-router-dom';

export const ServiceCategory = () => {
  const params = useParams();

  const categoryName = params.id.replace('-', ' ').toUpperCase();

  return (
    <div className="services-page">
      <h1 className="page-heading-main">{categoryName}</h1>

      <div className="services-category-section">
        <div className="services-categories-container">
          {services
            .filter((service) => service.category === params.id)
            .map((service) => (
              <div className="service-element-card" key={service.id}>
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
