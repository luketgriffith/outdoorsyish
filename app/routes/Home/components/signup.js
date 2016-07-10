import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return(
        <div>
          <h5>Sign Up</h5>
          <form onSubmit={this.props.signUp}>
            <input type="text" onChange={this.props.emailInput} placeholder="Email"/>
            <input type="password" onChange={this.props.passwordInput} placeholder="Password"/>
            <button type="submit">Join</button>
          </form>
        </div>
      )
  }
}

export default SignUp;