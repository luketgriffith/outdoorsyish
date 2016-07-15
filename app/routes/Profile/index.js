import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from '../Home/components/locations';

class Profile extends Component {
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
    user: state.HomeReducer.user,
    locations: state.HomeReducer.locations

  }
}

export default connect(mapStateToProps)(Profile);