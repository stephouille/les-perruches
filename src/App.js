import React, { Component } from 'react';

import Header from './Header';
import Button from './Button';
import Gallery from './Gallery';
import Calendar from './components/Calendar';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <h2>Bienvenue au Gîte des perruches</h2>
          <Button link="https://www.reservation-tourisme28.com/fr/location/locations-gites-digny-gite-des-perruches-h28g007996">Réserver</Button>
        </div>
        <div className="App-content">
          <Calendar />
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
