import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import './Banner.css';

export const Banner = () => {
  return (
    <div className="homepage-banner-container">
      <div className="homepage-banner-container-inner">
        <div className="banner-video">
          <div className="banner-video-button">
            <AiFillPlayCircle className="button-icon" />
          </div>
          <div className="banner-video-info">
            <p>Pogledajte naš snimak</p>
          </div>
        </div>

        <div className="banner-circles-container">
          <div className="banner-circle-element">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill"></div>
                </div>
                <div className="mask half">
                  <div className="fill"></div>
                </div>
                <div className="inside-circle"> 85% </div>
              </div>
            </div>
            <div className="circle-description">
              <p>Specijalisti</p>
            </div>
          </div>

          <div className="banner-circle-element">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full anim65">
                  <div className="fill anim65"></div>
                </div>
                <div className="mask half">
                  <div className="fill"></div>
                </div>
                <div className="inside-circle"> 65% </div>
              </div>
            </div>
            <div className="circle-description">
              <p>Kvalitetni radovi</p>
            </div>
          </div>

          <div className="banner-circle-element">
            <div className="circle-wrap">
              <div className="circle anim90">
                <div className="mask full anim90">
                  <div className="fill"></div>
                </div>
                <div className="mask half">
                  <div className="fill anim90"></div>
                </div>
                <div className="inside-circle"> 90% </div>
              </div>
            </div>
            <div className="circle-description">
              <p>Zadovoljni klijenti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
