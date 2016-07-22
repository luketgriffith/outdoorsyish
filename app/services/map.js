import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default class SimpleMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div className="map">
        <section style={{height: "100%"}}>
        <GoogleMapLoader
        containerElement={ <div style={{ height: "100%" }} /> }
        googleMapElement={
          <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={3}
          defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
          // onClick={props.onMapClick}
          />
          // {this.props.markers.map((marker, index) => {
          //   return (
          //     <Marker
          //     {...marker}
          //     onRightclick={() => this.props.onMarkerRightclick(index)} />
          //   );
          // })}
          // </GoogleMap>
        }
        />
        </section>
        </div>
      );

  }
}
