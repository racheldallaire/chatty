import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Message />
      <ChatBar />
      </div>
    );
  }
}
export default App;
