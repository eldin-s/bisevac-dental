import React from 'react';
import bg3 from '../../assets/bg3.jpg';
import './Tabs.css';

export const Tab3 = () => {
  return (
    <div className="tab-content-inner fadeInAnim">
      <div className="tab-content-image">
        <img src={bg3} alt="bisevac-dental-bg3" />
      </div>
      <div className="tab-content-description">
        <h2>Zubobolja</h2>
        <p>
          Zubobolja, dentalgija, odontalgija je bol koji potiče od zuba ili
          tkiva koji ga okružuju. Percepcija bola je relativno konstantna dok je
          reakcija na bol veoma individualna, različita od osobe do osobe. Bilo
          kako bilo, bol je simptom izvesnih dešavanja u organizmu i ne treba ga
          ignorisati.
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
