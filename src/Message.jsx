import React, {Component} from 'react';

export default class Message extends Component {
render() {
  return (
    <div>
      <div className="message">
      <span className="message-username">{this.props.currentUser}</span>
      <span className="message-content">{this.props.content}</span>
      </div>
    </div>
    );
  }
}