import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoggedIn extends Component {

  componentDidMount() {
    let { dispatch } = this.props;

    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        return;
      }
      dispatch({
        type: 'SET_USER',
        profile: profile
      });

    }.bind(this));
  }

  render() {
    return(
      <div>
        <div>Welcome, {this.props.user.email}. Topbar with some navigation up here or something.</div>
        {this.props.children}
      </div>
      )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.AuthReducer.userData,
    locations: state.HomeReducer.locations

  }
}

export default connect(mapStateToProps)(LoggedIn);
