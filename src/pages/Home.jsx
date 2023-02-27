import React from 'react';
import { Slider } from '../components/Slider';
import { FiPhoneCall } from 'react-icons/fi';
import { Ri24HoursLine } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';

import './home.css';
import { ServicesSlideshow } from '../components/ServicesSlideshow';
import { Banner } from '../components/Banner';
import { Tabs } from '../components/Tabs/Tabs';
import { TeamMember } from '../components/TeamMember';

export const Home = () => {
  return (
    <div className="homepage">
      <div className="bisevac-header">
        <Slider />
      </div>

      <div className="homepage-info-container">
        <div className="homepage-info-column">
          <div className="homepage-info-icon">
            <FiPhoneCall className="icon" />
          </div>
          <div className="homepage-info-text">
            <h4>+381 63 77 111 11</h4>
          </div>
        </div>

        <div className="homepage-info-column">
          <div className="homepage-info-icon">
            <Ri24HoursLine className="icon" />
          </div>
          <div className="homepage-info-text">
            <h4>
              Pon - Pet: 10:00 - 20:00, <br /> Sub: 10:00 - 16:00
            </h4>
          </div>
        </div>

        <div className="homepage-info-column">
          <div className="homepage-info-icon">
            <TiDocumentText className="icon" />
          </div>
          <div className="homepage-info-text">
            <h4>
              Zakazivanje termina preko <br /> telefona
            </h4>
          </div>
        </div>
      </div>

      <div className="homepage-about-container">
        <div className="homepage-about">
          <div className="homepage-about-info">
            <p className="homepage-about-info-heading">
              Klijentima nudimo planove zdravstvene zaštite po razumnim cenama,
              pakete osiguranja.
            </p>
            <p className="homepage-about-info-description">
              Biševac Dental Studio nudi više vrsta dentalnih usluga visokog
              standarda. Ukoliko planirate da radite složenije procedure kada je
              oralno zdravlje u pitanju, ako razmišljate o implantatima,
              krunicama ili pak estetskoj stomatologiji, jedini pravi izbor
              jeste stomatološka poliklinika. U našem studiu, pacijent će dobiti
              savete u vezi sa najboljim opcijama za njegov problem, biće mu
              stručno izloženi svi eventualni rizici i predložena najefikasnija
              rešenja, objašnjena procedura, tok perioda oporavka i potrebe za
              kontrolama.
            </p>
            <img
              src={process.env.PUBLIC_URL + `assets/potpis1.png`}
              alt="Potpis"
            />
          </div>
          <div className="homepage-about-images">
            <img
              src={process.env.PUBLIC_URL + `/assets/Semir-Bisevac.jpeg`}
              alt="Semir Bisevac"
              className="homepage-about-image-full"
            />
            <div className="homepage-about-image-icon">
              <Ri24HoursLine />
            </div>

            <div className="homepage-about-image-pattern">
              <img
                src={process.env.PUBLIC_URL + `/assets/lines-pattarn.png`}
                alt="background-pattern"
              />
            </div>
          </div>
        </div>
      </div>
      <ServicesSlideshow />
      <Banner />
      <Tabs />
      <TeamMember />
    </div>
  );
};
