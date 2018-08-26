import React, {Component} from 'react';

import Title from '../Title';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="contact" className="Footer">
        <Title>Nous trouver</Title>
        <iframe
          className="Footer-iframe"
          width="400"
          height="225"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDsBJrJHqUy5omYuBlRWjxNDdWpB_8pnBY &amp;q=Les+Perruches,Digny&amp;zoom=11">
        </iframe>
        <Title>Nous contacter</Title>
        <div className="Footer-infos">
          <strong>Joël Brière et Christiane Pernin</strong>
          <div>Les perruches</div>
          <div>28250 Digny</div>
          <br />
          <div>+33 (0)6 26 29 72 97</div>
          <a href="mailto:joel.briere5@orange.fr">joel.briere5@orange.fr</a>
        </div>
        <div className="Footer-copyright">
          Les perruches 2018 - Site web réalisé par
          <a href="http://stephaniebriere.com/" target="_blank"> Stéphanie Brière</a>
        </div>
      </div>
    );
  }
}

export default Footer;
