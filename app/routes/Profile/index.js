import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return(
        <div>Welcome, {this.props.user.email}. Congrats on logging in.</div>
      )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.HomeReducer.user

  }
}

export default connect(mapStateToProps)(Profile);