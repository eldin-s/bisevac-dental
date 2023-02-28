import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoD from '../assets/logo-bisevac-dental-dark.png';
import { RxHamburgerMenu } from 'react-icons/rx';

import './Navbar.css';

export const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);

  const navFix = () => {
    if (window.scrollY >= 1) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navFix);
  });

  return (
    <div className={navFixed ? 'navigation sticky' : 'navigation'}>
      <div className="navigation-inner">
        <div className="navigation-logo">
          <img src={logoD} alt="Bisevac Dental Studio" />
        </div>
        <div className="navigation-elements">
          <ul className="nav">
            <li className="nav-first-lvl">
              <Link to="/">Početna</Link>
            </li>
            <li className="nav-first-lvl">
              <Link to="/services">Usluge</Link>

              <ul className="dropdown">
                <li className="nav-second-lvl">
                  Estetska Stomatologija
                  <ul className="dropdown-second-lvl">
                    <li className="nav-third-lvl">
                      <Link to="/">Ortodoncija</Link>
                    </li>
                    <li className="nav-third-lvl">
                      <Link to="/">Beljenje zuba</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-second-lvl">Parodontologija</li>
                <li className="nav-second-lvl">Oralna Hirurgija</li>
                <li className="nav-second-lvl">Dečija Stomatologija</li>
                <li className="nav-second-lvl">Opšta Stomatologija</li>
              </ul>
            </li>
            <li className="nav-first-lvl">
              <Link to="/o-nama">O nama</Link>
            </li>
            <li className="nav-first-lvl">
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
          <button type="button" className="nav-btn">
            Termin
          </button>
        </div>
      </div>
    </div>
  );
};
