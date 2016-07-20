import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import MainView from './mainView';
import config from '../../config/config';
import Profile from './Profile/index';
import LoggedIn from './LoggedIn/index';

export default class Topbar extends Component{
  componentWillMount() {
      this.lock = new Auth0Lock(config.clientId, config.domain);
      this.setState({idToken: this.getIdToken()})
  }

  getIdToken() {
    // First, check if there is already a JWT in local storage
    var idToken = localStorage.getItem('id_token');
    var authHash = this.lock.parseHash(window.location.hash);
    // If there is no JWT in local storage and there is one in the URL hash,
    // save it in local storage
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('id_token', authHash.id_token);
      }
      if (authHash.error) {
        // Handle any error conditions
        console.log("Error signing in", authHash);
      }
    }
    return idToken;
  }

  render() {

    if (this.state.idToken) {
      // return (<Profile lock={this.lock} idToken={this.state.idToken} />
      return (
        <div>
          <LoggedIn lock={this.lock} idToken={this.state.idToken} />
          {this.props.children}
      </div>)    


    } else {
      return (<MainView lock={this.lock} />);
    }
  }
}
