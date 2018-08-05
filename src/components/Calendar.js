import React, {Component} from 'react';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)

import './Calendar.css';

const stateDefinitions = {
  available: {
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
    state: 'unavailable',
    range: moment.range(
      moment().add(3, 'weeks'),
      moment().add(3, 'weeks').add(5, 'days')
    ),
  },
];


class Calendar extends Component {
  state = {
    dates: null
  }

  handleSelect = dates => {
    console.log(dates);
    this.setState({dates})
  }

  render() {
    return (
      <div className="App-Calendar">
        <DateRangePicker
          numberOfCalendars={2}
          firstOfWeek={1}
          onSelect={this.handleSelect}
          value={this.state.dates}
          stateDefinitions={stateDefinitions}
          dateStates={dateRanges}
          defaultState="available"
          showLegend={true}
        />
      </div>
    )
  }
}

export default Calendar;
