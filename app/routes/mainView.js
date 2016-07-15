import React, { Component } from 'react';
import config from '../../config/config';

export default class MainView extends Component{
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.props.lock.show();
  }

  render() {
    return(
        <div>
          Main View
          <button onClick={this.signIn}>Sign In</button>
        </div>
      )
  }
}