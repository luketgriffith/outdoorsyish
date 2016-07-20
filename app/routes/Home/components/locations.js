import React, { Component } from 'react';
import { Link } from 'react-router';

class LocationList extends Component {
  render() {
    return(
        <div>
          List of locations for the user
          <ul>
            {this.props.locations.map((location) => {
              return <li key={location._id}><Link to={"locations/" + location._id}>{location.location}</Link></li>
            })}
          </ul>
        </div>
      )
  }
}

export default LocationList;
