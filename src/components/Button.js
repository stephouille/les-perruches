import React, {Component} from 'react';

import './Button.css';

class Button extends Component {
  render() {
    return (
      <a
        className="Button"
        href={this.props.link}
        target="_blank"
      >
        {this.props.children}
      </a>
    );
  }
}

export default Button;
