import React from 'react';
import './ServiceSingle.css';
import { useParams } from 'react-router-dom';
import services from '../home/components/services';

export const ServiceSingle = () => {
  const params = useParams();

  const [currentService] = services.filter(
    (service) => service.id === params.id
  );
  console.log(currentService);

  return (
    <div className="services-page">
      <h1 className="page-heading-main">{currentService.heading}</h1>

      <div className="service-single-container">
        <div className="service-single-img">
          <img src={currentService.imageUrl} alt={currentService.heading} />
        </div>

        <div className="service-single-description">
          {currentService.description.split('\n\n').map((paragraph) => (
            <p>
              {paragraph
                .split('\n')
                .reduce((total, line) => [total, <br />, line])}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
