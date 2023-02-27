import React from 'react';
import bg2 from '../../assets/bg2.jpg';
import './Tabs.css';

export const Tab2 = () => {
  return (
    <div className="tab-content-inner fadeInAnim">
      <div className="tab-content-image">
        <img src={bg2} alt="bisevac-dental-bg2" />
      </div>
      <div className="tab-content-description">
        <h2>Pregled pacijenta</h2>
        <p>
          Stomatološki pregled predstavlja pregled od izuzetnog značaja u cilju
          procene zdravstvenog stanja usta i zuba, kao i prevencije oboljenja
          zuba, desni i usne šuplijne. Prvi stomatološki pregled poželjno je
          obaviti kod deteta sa pet godina, nakon čega se vrše redovni kontrolni
          pregledi.
        </p>

        <ul>
          <li>
            <span>✔</span> Medicina rutinske i medicinske nege.
          </li>
          <li>
            <span>✔</span> Učinite svoj osmeh lepim.
          </li>
          <li>
            <span>✔</span> Izgradnja zdravog medicinskog okruženja.
          </li>
        </ul>
      </div>
    </div>
  );
};
