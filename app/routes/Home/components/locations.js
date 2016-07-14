import React, { Component } from 'react';

class LocationList extends Component {
  render() {
    return(
        <ul>
          {this.props.locations.map((location) => {
            return <li>{location.name}</li>
          })}
        </ul>
      )
  }
}