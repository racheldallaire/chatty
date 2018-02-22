import React, {Component} from 'react';

export default class Message extends Component {
render() {
  const {content, currentUser, type}=this.props.message
    return (
      <div>
        {type === 'postMessage' && <div className="message">
        <span className="message-username">{currentUser}</span>
        <span className="message-content">{content}</span>
        </div>}
      {type === 'postNotification' && <div className="message system">{content}
      </div>}
      </div>
      );
    }
}