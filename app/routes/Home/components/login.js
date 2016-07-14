import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
        <div>
          <h5>Log In</h5>
          <form onSubmit={this.props.login}>
            <input type="text" onChange={this.props.loginEmail} placeholder="Email"/>
            <input type="password" onChange={this.props.loginPw} placeholder="Password"/>
            <button type="submit">Log In</button>
          </form>
        </div>
      )
  }
}

export default Login;