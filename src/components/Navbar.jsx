import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoD from '../assets/logo-bisevac-dental-dark.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

import services from '../pages/home/components/services';
import servicesCategory from '../pages/services/servicesCategory';

import './Navbar.css';

export const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);
  const [toggleSecondSubMenu, setToggleSecondSubMenu] = useState('');

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

  const setSubMenu = () => {
    setToggleSubMenu(true);
  };

  const unsetSubMenu = () => {
    setToggleSubMenu(false);
  };

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
                {servicesCategory.map((cat, idx) => (
                  <li className="nav-second-lvl" key={idx}>
                    <Link to={`services/` + cat.id}>{cat.heading}</Link>
                    <ul className="dropdown-second-lvl">
                      {services
                        .filter((service) => service.category === cat.id)
                        .map((service, idx) => (
                          <li className="nav-third-lvl" key={idx}>
                            <Link to={`${'services'}/${cat.id}/${service.id}`}>
                              {service.heading}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
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
        <RxHamburgerMenu
          className="open-menu-icon"
          onClick={() => setToggleMenu(true)}
        />

        <div
          className={
            toggleMenu
              ? 'navigation-elements_smallscreen bg-overlay active'
              : 'navigation-elements_smallscreen bg-overlay'
          }
        >
          <IoMdClose
            className="close-menu-icon"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="nav_smallscreen">
            <li className="nav-first-lvl_smallscreen">
              <Link to="/">Početna</Link>
            </li>
            <li className="nav-first-lvl_smallscreen">
              <Link to="/services">Usluge</Link>

              <FiChevronDown
                className={!toggleSubMenu ? 'arrow-down' : 'arrow-down hide'}
                onClick={setSubMenu}
              />
              <FiChevronUp
                className={toggleSubMenu ? 'arrow-down' : 'arrow-down hide'}
                onClick={unsetSubMenu}
              />

              {toggleSubMenu && (
                <ul className="dropdown_smallscreen">
                  {servicesCategory.map((cat, idx) => (
                    <li className="nav-second-lvl_smallscreen" key={idx}>
                      <div className="flex-container">
                        <Link to={`services/${cat.id}`}>{cat.heading}</Link>
                        <FiChevronDown
                          className={
                            toggleSecondSubMenu === ''
                              ? 'arrow-down-second-submenu '
                              : 'arrow-down-second-submenu hide'
                          }
                          onClick={() => {
                            setToggleSecondSubMenu(idx);
                          }}
                        />
                        <FiChevronUp
                          className={
                            toggleSecondSubMenu === idx
                              ? 'arrow-down-second-submenu'
                              : 'arrow-down-second-submenu hide'
                          }
                          onClick={() => {
                            setToggleSecondSubMenu('');
                          }}
                        />
                      </div>
                      {toggleSecondSubMenu === idx && (
                        <ul className="dropdown-second-lvl_smallscreen">
                          {services
                            .filter((service) => service.category === cat.id)
                            .map((service, idx) => (
                              <li
                                className="nav-third-lvl_smallscreen"
                                key={idx}
                              >
                                <Link
                                  to={`${'services'}/${cat.id}/${service.id}`}
                                >
                                  {service.heading}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="nav-first-lvl_smallscreen">
              <Link to="/o-nama">O nama</Link>
            </li>
            <li className="nav-first-lvl_smallscreen">
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
