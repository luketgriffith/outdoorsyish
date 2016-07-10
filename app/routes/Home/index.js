import React, { Component } from 'react';
import { connect } from 'react-redux';
//components
import SignUp from './components/signup';
import Login from './components/login';

class Home extends Component {
  constructor(props) {
    super(props);
    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.signUp = this.signUp.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.loginPw = this.loginPw.bind(this);
    this.login = this.login.bind(this);
  }

  emailInput(e){
    let email = e.target.value;
    let { dispatch } = this.props;
    dispatch({
      type: 'EMAIL_INPUT',
      payload: email
    });
  }

  passwordInput(e){
    let pw = e.target.value;
    let { dispatch } = this.props;
    dispatch({
      type: 'PW_INPUT',
      payload: pw
    });
  }

  signUp(e){
    e.preventDefault();
    let { dispatch, signup } = this.props;
    
    dispatch({
      type: 'SIGN_UP',
      payload: signup
    });
  }

  loginEmail(e) {
    let email = e.target.value;
    let { dispatch } = this.props;
    dispatch({
      type: 'LOGIN_EMAIL_INPUT',
      payload: email
    });
  }

  loginPw(e) {
    let pw = e.target.value;
    let { dispatch } = this.props;
    dispatch({
      type: 'LOGIN_PW_INPUT',
      payload: pw
    });
  }

  login(e) {
    e.preventDefault();
    let { dispatch, login } = this.props;
    
    dispatch({
      type: 'LOGIN',
      payload: login
    });
  }

  
  render() {
    return( 
      <div>Hello There Sir
        <SignUp 
          emailInput={this.emailInput}
          passwordInput={this.passwordInput}
          signUp={this.signUp}
        />

        <Login
          loginEmail={this.loginEmail}
          loginPw={this.loginPw}
          login={this.login}
        />

      </div>)
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    signup: state.HomeReducer.signup,
    login: state.HomeReducer.login
  }
}

export default connect(mapStateToProps)(Home);