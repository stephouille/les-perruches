import React, {Component} from 'react';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)

import Title from './Title';
import Button from './Button';

import './Calendar.css';

require('moment/locale/fr');
moment.locale('fr');

const stateDefinitions = {
  disabled: {
    selectable: false,
    color: '#e6e6e6'
  },
  available: {
    selectable: false,
    color: '#67a067',
    label: 'Libre, jour d\'arrivée possible',
  },
  unavailable: {
    selectable: false,
    color: '#de6060',
    label: 'Jour réservé',
  },
};

// data
const dateRanges = [
  {
    state: 'disabled',
    range: moment.range(
      moment().subtract(3, 'years'),
      moment(),
    ),
  },
  {
    state: 'unavailable',
    range: moment.range(
      moment('20180915'),
      moment('20180917'),
    )
  },
  {
    state: 'unavailable',
    range: moment.range(
      moment('20181005'),
      moment('20181008'),
    )
  },
  {
    state: 'unavailable',
    range: moment.range(
      moment('20181019'),
      moment('20181022'),
    )
  },
  {
    state: 'unavailable',
    range: moment.range(
      moment('20181230'),
      moment('20190101'),
    )
  },
];


class Calendar extends Component {
  state = {
    dates: null
  }

  handleSelect = dates => {
    this.setState({dates})
  }

  render() {
    return (
      <div
        className="App-Calendar"
        id="calendar"
      >
        <Title>Disponibilités</Title>
        <DateRangePicker
          numberOfCalendars={2}
          firstOfWeek={1}
          onSelect={this.handleSelect}
          value={this.state.dates}
          stateDefinitions={stateDefinitions}
          dateStates={dateRanges}
          defaultState="available"
          showLegend={true}
          locale="fr"
        />

        <div className="App-Calendar__infos">Vous pouvez réserver sur le site ADRT</div>
        <Button link="https://www.reservation-tourisme28.com/fr/location/locations-gites-digny-gite-des-perruches-h28g007996">Réserver</Button>

        <div className="App-Calendar__infos">Ou nous contacter par <a href="mailto:joel.briere5@orange.fr">mail</a> ou au téléphone au <strong>+33 (0)6 26 29 72 97</strong></div>
      </div>
    )
  }
}

export default Calendar;
