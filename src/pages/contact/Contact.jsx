import React, { useState } from 'react';
import './Contact.css';
import { CiLocationOn } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://formsubmit.co/ajax/932d5d263803e94697d4e251434241d3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        Ime: name,
        Email: email,
        Telefon: number,
        Poruka: message,
        Link: link,
      }),
    });

    navigate('/email-uspesan');
  };

  return (
    <div className="contact-page">
      <h1 className="page-heading-main">Kontakt</h1>

      <div className="contact-page-container">
        <div className="contact-info-column">
          <div className="info-column-inner">
            <div className="info-column-inner-icon">
              <CiLocationOn />
            </div>
            <div className="info-column-inner-details">
              <p>Biševac - 36300</p>
              <p>Deda Šehovica 46/7</p>
            </div>
          </div>

          <div className="info-column-inner">
            <div className="info-column-inner-icon">
              <CiPhone />
            </div>
            <div className="info-column-inner-details">
              <p>Telefon</p>
              <p>+381 63 77 111 11</p>
            </div>
          </div>

          <div className="info-column-inner">
            <div className="info-column-inner-icon">
              <CiMail />
            </div>
            <div className="info-column-inner-details">
              <p>Email</p>
              <p>info@bisevacdental.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form-column" onSubmit={handleSubmit}>
          <form className="contact-form">
            {/* Honeypot */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-fields">
              <input
                type="text"
                id="fullName"
                name="ime"
                placeholder="Vaše Ime*"
                required
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                id="phoneNumber"
                name="number"
                placeholder="Broj&nbsp;telefona"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-fields">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail*"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                id="link"
                name="link"
                placeholder="Link&nbsp;sajt"
                required
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="form-bottom-fields">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Vaša poruka"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <input type="submit" value="Pošalji" />
            </div>
          </form>
        </div>
      </div>

      <div className="contact-map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5822.399745734723!2d20.513505!3d43.142332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475628149427adc3%3A0xba26acc389ea0e77!2sDeda%20%C5%A0ehovi%C4%87a%2C%20Novi%20Pazar%2C%20Serbia!5e0!3m2!1sen!2sus!4v1680634576297!5m2!1sen!2sus"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contact-map"
          title="googleMap"
        ></iframe>
      </div>
    </div>
  );
};
