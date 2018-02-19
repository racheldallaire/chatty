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
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {currentUser: 'Michelle', content: 'Hello there!', key: 3};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages});
  }, 3000);
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
