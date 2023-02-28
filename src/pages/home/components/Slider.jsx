import React, { useState } from 'react';

export const Slider = () => {
  const slides = [
    {
      id: 1,
      subheading: 'Online Rešenje',
      heading: 'Posvećeni pouzdanoj stomatološkoj nezi',
      text: 'Brinemo o rastućim potrebama naše zajednice',
      button: 'Kontakt',
      info: 'Dobijte besplatan pregled',
    },

    {
      id: 2,
      subheading: 'PROFESIONALNO OSOBLJE',
      heading: `Vaš osmeh je \n Naš priorotet`,
      text: 'Personalizovane i visoko-kvalitetne usluge',
      button: 'Kontakt',
      info: '',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const setSlideTo1 = () => {
    setCurrentIndex(1);
  };

  const setSlideTo2 = () => {
    setCurrentIndex(2);
  };

  return (
    <div className="header-hero-slider">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={
            currentIndex === idx + 1
              ? `header-hero-slide${currentIndex}`
              : 'hide'
          }
        >
          <i>
            <img
              src={
                process.env.PUBLIC_URL + `/assets/bisevac-slider${idx + 1}.jpg`
              }
              className="slider-img animateOpacity"
              alt="Bisevac-Dental-Studio"
            />
          </i>

          <div className="slider-information-left"></div>
          <div className="slider-information-right">
            <h5 className="slide-subheading animateToRight0s">
              {slides[currentIndex - 1].subheading}
            </h5>

            <h1
              className={
                currentIndex === 2
                  ? 'slide-heading animateToRight05s light'
                  : 'slide-heading animateToRight05s'
              }
            >
              {slides[currentIndex - 1].heading}
            </h1>
            <p
              className={
                currentIndex === 2
                  ? 'slide-text animateToRight15s light'
                  : 'slide-text animateToRight15s'
              }
            >
              {slides[currentIndex - 1].text}
            </p>
            <div className="slide-info animateToRight2s">
              <button className="btn btn-kontakt">
                {slides[currentIndex - 1].button}
              </button>
              <p className="slide-info-text">{slides[currentIndex - 1].info}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        <div
          className={
            currentIndex === 1 ? 'slider-dot dot-active' : 'slider-dot'
          }
          onClick={setSlideTo1}
        ></div>
        <div
          className={
            currentIndex === 2 ? 'slider-dot dot-active' : 'slider-dot'
          }
          onClick={setSlideTo2}
        ></div>
      </div>
    </div>
  );
};
