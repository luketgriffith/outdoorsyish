import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from '../LocationList/index';

class Profile extends Component {
  componentWillMount() {
    let { dispatch } = this.props;
    dispatch({
      type: 'GET_ALL_LOCATIONS'
    })
  }


  render() {
    return(
      <div>
        <div>This is a brief profile view- picture etc.</div>
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
    user: state.auth.userData,
    locations: state.home.locations

  }
}

export default connect(mapStateToProps)(Profile);
