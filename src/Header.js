import React from 'react';

import './Header.css';

const Header = () =>
  <header className="Header">
    <h1 className="Header-title">Les perruches</h1>
    <nav className="Header-nav">
      <a href="#gallery">Photos</a>
      <a href="#calendar">Réserver</a>
    </nav>
  </header>;

export default Header;
