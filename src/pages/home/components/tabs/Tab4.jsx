import React from 'react';
import bg4 from '../../../../assets/bg4.jpg';
import './Tabs.css';

export const Tab4 = () => {
  return (
    <div className="tab-content-inner fadeInAnim">
      <div className="tab-content-image">
        <img src={bg4} alt="bisevac-dental-b4" />
      </div>
      <div className="tab-content-description">
        <h2>Strah od stomatologa</h2>
        <p>
          Dentalna anksioznost je česta pojava u opštoj populaciji. To nije
          dijagnostičko stanje, niti izaziva bilo kakve veće smetnje u
          svakodnevnom životu. Umjesto toga, može prouzrokovati da osoba doživi
          fizičke ili psihološke simptome koje se mogu povezati sa posjetom
          stomatologu, što može dovesti do izbegavanje zubara.
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
