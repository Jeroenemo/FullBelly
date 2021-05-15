import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '617px',
  height: '600px',
  borderRadius: '1%',
  marginTop: '-6.5%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: 'AIzaSyACuXIcFZ6_5jS_4iGreRIN3GQEIPKlP8E'
})(MapContainer);