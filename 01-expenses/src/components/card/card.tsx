import React, { Component } from 'react';
import './card.scss'

export default class Card extends Component<{ className: string }> {
  classes = 'card ' + this.props.className;
  render() {
    return <div className={this.classes}>{this.props.children}</div>;
  }
}
