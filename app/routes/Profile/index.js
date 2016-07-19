import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from '../Home/components/locations';

class Profile extends Component {
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
      this.setState({profile: profile});

    }.bind(this));
  }

  render() {
    return(
      <div>
        <div>Welcome, {this.props.user.email}. Congrats on logging in.</div>
        <LocationList
          locations={this.props.locations}
        />
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

export default connect(mapStateToProps)(Profile);
