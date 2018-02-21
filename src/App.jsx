import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

function generateRandomString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

class App extends Component {
// Set initial state so the user is initially anonymous
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws:localhost:3001');

    this.brandNewMessage = this.brandNewMessage.bind(this);
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: [
        {currentUser: 'Bob', content: 'Has anyone seen my marbles?', key: generateRandomString()},
        {currentUser: 'Anonymous', content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.', key: generateRandomString()}
      ]
    };
  }

  brandNewMessage(message) {
    const newMessage = {currentUser: message.currentUser, content: message.input, key: generateRandomString()};
    this.socket.send(JSON.stringify(newMessage));
    console.log(newMessage);
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages});
  }

  // Called after the component was rendered and it was attached to the DOM.
componentDidMount() {
  this.socket.onopen = (event) => {
    console.log('Connected to server');
   };
}

  // Called any time the props or state changes. The JSX elements returned in this method will be rendered to the DOM.
  render() {
    return (
      <div>
      <NavBar />
      <MessageList messages = {this.state.messages} />
      <ChatBar defaultValue={this.state.currentUser.name} brandNewMessage={this.brandNewMessage}/>
      </div>
    );
  }
}
export default App;
