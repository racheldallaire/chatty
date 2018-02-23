import React, {Component} from 'react';

export default class NavBar extends Component {
  render () {
    return (
     <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty </a>
      <img className="navbar-logo" src='../icon.png' />
      <span className="navbar-users">{this.props.usersOnline} user(s) online</span>
     </nav>
    )
  }
}