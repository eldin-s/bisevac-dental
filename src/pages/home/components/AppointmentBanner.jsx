import React from 'react';
import './AppointmentBanner.css';
import appointment from '../../../assets/icons/appointment_tooth_icon.png';

export const AppointmentBanner = () => {
  return (
    <div
      className="appointment-banner"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/assets/bg-03-min.jpg'
        })`,
      }}
    >
      <div className="appointment-banner-inner">
        <div className="appointment-content">
          <img src={appointment} alt="Dental appointment" />
          <h3>Obavite besplatan pregled</h3>
        </div>

        <button type="button">Kontakt</button>
      </div>
    </div>
  );
};
