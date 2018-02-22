import React, {Component} from 'react';

export default class Message extends Component {
render() {
  const {content, currentUser, key, type}=this.props.message
  if (type === 'postMessage') {
    return (
      <div>
        <div className="message">
        <span className="message-username">{currentUser}</span>
        <span className="message-content">{content}</span>
        </div>
      </div>
      );
    } else if (type === 'postNotification') {
        return (
        <div>
        <div className="message system">{content}
        </div>
        </div>
        )
    }
  }
}