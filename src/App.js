import React, { Component } from 'react';

import Header from './Header';
import Title from './components/Title';
import Button from './components/Button';
import Gallery from './components/Gallery';
import Calendar from './components/Calendar';
import Prices from './components/Prices';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <div className="App-intro__mask"></div>
          <h2>Bienvenue au Gîte des perruches</h2>
          <Button link="https://www.reservation-tourisme28.com/fr/location/locations-gites-digny-gite-des-perruches-h28g007996">Réserver</Button>
        </div>
        <div className="App-content">
          <div className="App-description">
            <p>Les propriétaires vous accueillent dans leur gîte à proximité des collines du Perche.</p>
            <p>Située sur la commune de Digny, cette ancienne ferme a été entièrement rénovée en 2017.
              Ce gîte indépendant de <strong>250m2 non fumeur</strong> peut accueillir jusqu'à <strong>12 personnes</strong> avec la
              possibilité de louer une <strong>salle de 100m2</strong> pour vos évènements familiaux ou séminaires.
              La salle dispose de chaises et tables ainsi que d'un coin cuisine.</p>
          </div>
          <Gallery />
          <Calendar />
          <Prices />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
