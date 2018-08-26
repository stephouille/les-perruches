import React from 'react';

import Title from './Title';

import './Prices.css';

const Prices = () =>
  <div
    className="App-Prices"
    id="prices"
  >
    <Title>Nos tarifs</Title>
    <div className="App-Prices__subtitle">
      Le Gîte
    </div>
    <table className="App-Prices__table">
      <thead>
        <tr className="App-Prices__table-titles--small">
          <th></th>
          <th>7J</th>
          <th>2J</th>
          <th>3J</th>
          <th>4J</th>
        </tr>
        <tr className="App-Prices__table-titles">
          <th></th>
          <th>Semaine</th>
          <th>2 jours</th>
          <th>3 jours</th>
          <th>4 jours</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Haute Saison<span>Juillet - Août</span></td>
          <td>740</td>
          <td>550</td>
          <td>620</td>
          <td>650</td>
        </tr>
        <tr>
          <td>Moyenne Saison et Vacances scolaires<span>Mai, Juin, Septembre</span></td>
          <td>610</td>
          <td>450</td>
          <td>480</td>
          <td>520</td>
        </tr>
        <tr>
          <td>Basse saison</td>
          <td>530</td>
          <td>420</td>
          <td>440</td>
          <td>460</td>
        </tr>
      </tbody>
    </table>
    <div className="App-Prices__subtitle">
      La Salle de réception
    </div>
    <div>A partir de 350€ selon les périodes</div>
  </div>;

export default Prices;
