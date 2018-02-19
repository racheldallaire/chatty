import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
// Set initial state so the user is initially anonymous
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'},
      messages: [
        {currentUser: 'Bob', content: 'Has anyone seen my marbles?', key: 1},
        {currentUser: 'Anonymous', content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.', key: 2}
      ]
    };
  }

  // Called after the component was rendered and it was attached to the
  // DOM. This is a good place to make AJAX requests or setTimeout.
  componentDidMount() {

  }

  // Called any time the props or state changes. The JSX elements
  // returned in this method will be rendered to the DOM.
  render() {
    return (
      <div>
      <NavBar />
      <MessageList messages = {this.state.messages} />
      <ChatBar defaultValue={this.state.currentUser.name} />
      </div>
    );
  }
}
export default App;
