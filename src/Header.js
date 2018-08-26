import React from 'react';

import './Header.css';

const Header = () =>
  <header className="Header">
    <h1 className="Header-title">Les perruches</h1>
    <nav className="Header-nav">
      <a href="#gallery">Photos</a>
      <a href="#calendar">Disponibilités</a>
      <a href="#prices">Tarifs</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>;

export default Header;
