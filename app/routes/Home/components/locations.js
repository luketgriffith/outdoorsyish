import React, { Component } from 'react';

class LocationList extends Component {
  render() {
    return(
        <ul>
          {this.props.locations.map((location) => {
            return <li key={location._id}>{location.location}</li>
          })}
        </ul>
      )
  }
}

export default LocationList;