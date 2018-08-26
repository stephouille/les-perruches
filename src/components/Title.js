import React from 'react';

import './Title.css';

class Title extends React.Component {
  render() {
    return <h3 className="App-Title">{this.props.children}</h3>;
  }
}

export default Title;
