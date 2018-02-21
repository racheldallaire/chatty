import React, {Component} from 'react';

export default class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state= {input: '', currentUser: props.defaultValue};
  }

  render() {
    const changedText = (evt) => {
      this.setState({input: evt.target.value, currentUser: this.state.currentUser});
    };

    const changedUser = (evt) => {
      this.setState({inputValue: this.state.inputValue, currentUser: evt.target.value});
    };

    const sendMessage = (evt) => {
      if(evt.key === 'Enter') {
        this.props.brandNewMessage(this.state);
        this.setState({input: '', currentUser: this.state.currentUser});
      }
    };

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onChange={changedUser} value={this.state.currentUser} />
        <input className="chatbar-message" placeholder="Type something (then hit enter)" onChange={changedText} value={this.state.input} onKeyPress={sendMessage}/>
      </footer>
    )
  }
}