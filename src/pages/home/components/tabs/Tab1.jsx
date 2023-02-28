import React from 'react';
import bg1 from '../../../../assets/bg1.jpg';
import './Tabs.css';

export const Tab1 = () => {
  return (
    <div className="tab-content-inner fadeInAnim">
      <div className="tab-content-image">
        <img src={bg1} alt="bisevac-dental-bg1" />
      </div>
      <div className="tab-content-description">
        <h2>Zdravstveno stanje zubi</h2>
        <p>
          Stomatološki pregled je, uz redovito održavanje oralne higijene,
          osnova dentalnog zdravlja – zdravlja zubi, zubnog mesa (desni), usne
          šupljine i čeljusti. Zdravi zubi pružaju lijep osmijeh, ugodan dah i
          samopouzdanje
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
