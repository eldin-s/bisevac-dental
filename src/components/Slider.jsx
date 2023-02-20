import React, { useState } from 'react';

export const Slider = () => {
  const [slide, setSlide] = useState(true);

  const setSlideTo0 = () => {
    setSlide(true);
  };

  const setSlideTo1 = () => {
    setSlide(false);
  };

  return (
    <div className="header-hero-slider">
      {slide ? (
        <div className="header-hero-slide">
          <div className="slider-information-left"></div>

          <div className="slider-information-right">
            <h5
              className={`slide-subheading ${slide ? 'animateToRight0s' : ''}`}
            >
              Online Rešenje
            </h5>
            <h1 className={`slide-heading ${slide ? 'animateToRight05s' : ''}`}>
              Posvećeni pouzdanoj stomatološkoj nezi
            </h1>
            <p className={`slide-text ${slide ? 'animateToRight15s' : ''}`}>
              Brinemo o rastućim potrebama naše zajednice
            </p>

            <div className={`slide-info ${slide ? 'animateToRight2s' : ''}`}>
              <button className="btn btn-kontakt">Kontakt</button>
              <p className="slide-info-text">Dobijte besplatan pregled</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="header-hero-slide2">
          <div className="slider-information-left"></div>

          <div className="slider-information-right">
            <h5
              className={`slide-subheading slide2 ${
                slide ? '' : 'animateToRight0s'
              }`}
            >
              Profesionalno Osoblje
            </h5>
            <h1
              className={`slide-heading light ${
                !slide ? 'animateToRight05s' : ''
              }`}
            >
              Vaš osmeh je <br /> Naš priorotet
            </h1>
            <p
              className={`slide-text light ${
                !slide ? 'animateToRight15s' : ''
              }`}
            >
              Personalizovane i visoko-kvalitetne usluge
            </p>

            <div className={`slide-info ${slide ? '' : 'animateToRight2s'}`}>
              <button className="btn btn-kontakt">Kontakt</button>
            </div>
          </div>
        </div>
      )}

      <div className="slider-dots">
        <div className="slider-dot" onClick={setSlideTo0}></div>
        <div className="slider-dot" onClick={setSlideTo1}></div>
      </div>
    </div>
  );
};
