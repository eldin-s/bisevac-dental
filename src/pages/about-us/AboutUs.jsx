import React from 'react';
import './AboutUs.css';

import { useSpring, animated } from 'react-spring';
import ProgressBar from 'react-animated-progress-bar';

import AboutUsImg from '../../assets/O-nama.jpg';
import analiya from '../../assets/analiya.jpg';
import dent1 from '../../assets/dent-1.jpg';
import fear from '../../assets/fear.jpg';
import img12 from '../../assets/img-12.jpg';

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export const AboutUs = () => {
  return (
    <div className="about_us-page">
      <h1 className="page-heading-main">O Nama</h1>

      <div className="about_us-container">
        <div className="about_us-studio-description">
          <p>
            Ukoliko planirate da radite složenije procedure kada je oralno
            zdravlje u pitanju, ako razmišljate o implantatima, krunicama ili
            pak estetskoj stomatologiji, jedini pravi izbor jeste stomatološka
            poliklinika. U našoj poliklinici, pacijent će dobiti savete u vezi
            sa najboljim opcijama za njegov problem, biće mu stručno izloženi
            svi eventualni rizici i predložena najefikasnija rešenja, objašnjena
            procedura, tok perioda oporavka i potrebe za kontrolama.
          </p>
          <div className="about_us-studio-bars">
            <h5>Dentalna prevencija</h5>
            <ProgressBar
              width="100%"
              height="11px"
              rect
              fontColor="#130947"
              percentage="90"
              rectPadding="1px"
              rectBorderRadius="1px"
              trackPathColor="#ccc"
              bgColor="#333333"
              trackBorderColor="transparent"
            />
            <ProgressBar
              width="100%"
              height="11px"
              rect
              fontColor="#130947"
              percentage="80"
              rectPadding="1px"
              rectBorderRadius="1px"
              trackPathColor="#ccc"
              bgColor="#333333"
              trackBorderColor="transparent"
            />
          </div>
        </div>

        <div className="about_us-studio-img">
          <img src={AboutUsImg} alt="Bisevac Dental Studio" />
        </div>
      </div>

      <div
        className="about_us-banner-section"
        style={{ backgroundImage: `url(/assets/bg-03-min.jpg)` }}
      >
        <div className="about_us-banner-container">
          <div className="banner-element">
            <h2 className="banner-element-heading">
              <Number n={40} /> +
            </h2>
            <p className="banner-element-description">Veliki Stomatolozi</p>
          </div>
          <div className="banner-element">
            <h2 className="banner-element-heading">
              <Number n={800} /> +
            </h2>
            <p className="banner-element-description">Stomatološke usluge</p>
          </div>
          <div className="banner-element">
            <h2 className="banner-element-heading">
              <Number n={8} /> +
            </h2>
            <p className="banner-element-description">Nacionalne Nagrade</p>
          </div>
          <div className="banner-element">
            <h2 className="banner-element-heading">
              <Number n={14} /> +
            </h2>
            <p className="banner-element-description">Godine iskustva</p>
          </div>
        </div>
      </div>

      <div className="about_us-steps-container">
        <div className="about_us-steps-heading">
          Naš tim će sproveti određene korake precizno i efikasno kako bi
          ustanovili vaše stomatološke probleme. Preuzimamo odgovornost od
          početka do kraja vašeg lečenja.
        </div>

        <div
          className="about_us-steps-elements"
          style={{ backgroundImage: `url(/assets/step-counter-bg.png)` }}
        >
          <div className="about_us-steps-element">
            <div className="about_us-steps-element-img">
              <div className="steps-number-1">
                <p>01</p>
              </div>
              <img src={img12} alt="Bisevac Dental Studio" />
            </div>
            <div className="about_us-steps-element-description">
              Sprovešćemo detaljan zdravstveni pregled
            </div>
          </div>
          <div className="about_us-steps-element">
            <div className="about_us-steps-element-img">
              <div className="steps-number-1">02</div>
              <img src={analiya} alt="Bisevac Dental Studio" />
            </div>
            <div className="about_us-steps-element-description">
              Sprovešćemo detaljan zdravstveni pregled
            </div>
          </div>
          <div className="about_us-steps-element">
            <div className="about_us-steps-element-img">
              <div className="steps-number-1">03</div>
              <img src={dent1} alt="Bisevac Dental Studio" />
            </div>
            <div className="about_us-steps-element-description">
              Sprovešćemo detaljan zdravstveni pregled
            </div>
          </div>
          <div className="about_us-steps-element">
            <div className="about_us-steps-element-img">
              <div className="steps-number-1">04</div>
              <img src={fear} alt="Bisevac Dental Studio" />
            </div>
            <div className="about_us-steps-element-description">
              Sprovešćemo detaljan zdravstveni pregled
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
