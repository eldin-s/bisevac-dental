import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoD from '../assets/logo-bisevac-dental-dark.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

import './Navbar.css';

export const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);
  const [toggleSecondSubMenu, setToggleSecondSubMenu] = useState(false);

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
                <li className="nav-second-lvl">
                  <Link to="/estetska-stomatologija">
                    Estetska Stomatologija
                  </Link>
                  <ul className="dropdown-second-lvl">
                    <li className="nav-third-lvl">
                      <Link to="/">Ortodoncija</Link>
                    </li>
                    <li className="nav-third-lvl">
                      <Link to="/">Beljenje zuba</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-second-lvl">
                  <Link to="/paradontologija"> Parodontologija</Link>
                </li>
                <li className="nav-second-lvl">
                  <Link to="oralna-hirurgija">Oralna Hirurgija</Link>
                </li>
                <li className="nav-second-lvl">
                  <Link to="decija-stomatologija">Dečija Stomatologija</Link>
                </li>
                <li className="nav-second-lvl"> Opšta Stomatologija</li>
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
                  <li className="nav-second-lvl_smallscreen">
                    <Link to="/estetska-stomatologija">
                      Estetska Stomatologija
                    </Link>

                    <FiChevronDown
                      className={
                        !toggleSecondSubMenu
                          ? 'arrow-down-second-submenu'
                          : 'arrow-down-second-submenu hide'
                      }
                      onClick={() => {
                        setToggleSecondSubMenu(true);
                      }}
                    />
                    <FiChevronUp
                      className={
                        toggleSecondSubMenu
                          ? 'arrow-down-second-submenu'
                          : 'arrow-down-second-submenu hide'
                      }
                      onClick={() => {
                        setToggleSecondSubMenu(false);
                      }}
                    />

                    {toggleSecondSubMenu && (
                      <ul className="dropdown-second-lvl_smallscreen">
                        <li className="nav-third-lvl_smallscreen">
                          <Link to="/">Ortodoncija</Link>
                        </li>
                        <li className="nav-third-lvl_smallscreen">
                          <Link to="/">Beljenje zuba</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="nav-second-lvl_smallscreen">
                    <Link to="/paradontologija"> Parodontologija</Link>
                  </li>
                  <li className="nav-second-lvl_smallscreen">
                    <Link to="oralna-hirurgija">Oralna Hirurgija</Link>
                  </li>
                  <li className="nav-second-lvl_smallscreen">
                    <Link to="decija-stomatologija">Dečija Stomatologija</Link>
                  </li>
                  <li className="nav-second-lvl_smallscreen">
                    <Link to="/">Opšta Stomatologija</Link>
                  </li>
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
