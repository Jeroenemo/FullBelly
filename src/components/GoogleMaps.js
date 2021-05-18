import React, { Component} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '617px',
  height: '600px',
  borderRadius: '1%',
  marginTop: '-6.5%'
};

export class MapContainer extends Component {
  state = {
    selectedPlace: false,
    activeMarker: {},
    selectedPlace: {}  
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { donations } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={
          {
            lat: 47.6062,
            lng: -122.3321
          }
        }
      >
        {console.log(donations)}
        {donations.map((donation, index) => (
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            name={donation.donor}
            donation={donation.donationName}
            position={{lat: donation.lat, lng: donation.lng}}
          />

        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <h4>{this.state.selectedPlace.donation}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey:
})(MapContainer);