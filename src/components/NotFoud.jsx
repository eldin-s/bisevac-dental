import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoud = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-container-inner">
        <h1>Oops! Stranica nije pronađena</h1>
        <p className="not-found-descritpion">
          Proverite vezu ili se vratite na <Link to="/">Početnu</Link>
        </p>
      </div>
    </div>
  );
};
