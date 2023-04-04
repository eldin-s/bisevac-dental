import React from 'react';
import './Footer.css';
import logoL from '../assets/logo-bisevac-dental-light.png';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { BsPhone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

export const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/assets/footerbg.jpg'
        })`,
      }}
    >
      <div className="pre-footer-container">
        <div className="pre-footer">
          <img src={logoL} alt="Bisevac dental studio" />
          <h3>Uvek dostupni klijentima</h3>
          <AiOutlineInstagram className="social-icon" />
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-container-about">
          <h4 className="footer-heading">O nama</h4>
          <p className="footer-about-description">Lider u lečenju zuba.</p>

          <div className="footer-container-contact">
            <div className="footer-contact-detail">
              <SlLocationPin className="contact-icon" />
              <p>Addresa: Deda Šehovica 46/7</p>
            </div>
            <div className="footer-contact-detail">
              <BsPhone className="contact-icon" />
              <p>Telefon: +381 63 77 111 11</p>
            </div>
            <div className="footer-contact-detail">
              <TfiEmail className="contact-icon" />
              <p>Addresa: Deda Šehovica 46/7</p>
            </div>
          </div>
        </div>
        <div className="footer-container-working-hours">
          <h4 className="footer-heading">Radno Vreme</h4>

          <div className="footer-container-hours-detail">
            <div className="footer-weekdays">
              <p>Pon-Pet</p>
              <p className="footer-hours">10:00 - 20:00</p>
            </div>
            <div className="footer-weekdays">
              <p>Subota</p>
              <p className="footer-hours">10:00 - 16:00</p>
            </div>
            <div className="footer-weekdays">
              <p>Nedelja</p>
              <p className="footer-hours">Zatvoreno</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright-section">
        <div className="footer-copyright-container">
          <div className="copyright-details">
            <p>Copyright © 2023 | Bisevac Dental Studio</p>
          </div>

          <div className="footer-copyright-menu">
            <ul className="footer-navigation">
              <li>
                <Link to="/">Početna</Link>
              </li>
              <li>
                <Link to="/">Usluge</Link>
              </li>
              <li>
                <Link to="/">O nama</Link>
              </li>
              <li>
                <Link to="/">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
