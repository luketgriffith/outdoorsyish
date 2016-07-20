import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LocationList extends Component {
  render() {
    return(
        <ul>
          {this.props.locations.map((location) => {
            return <li key={location._id}><Link to={"locations/" + location._id}>{location.location}</Link></li>
          })}
        </ul>
      )
  }
}


function mapStateToProps(state) {
  return {
  }
}


export default connect(mapStateToProps)(LocationList);
