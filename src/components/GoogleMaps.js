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
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };
  
  

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = () => {
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
        className ="map-styles"
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

        {donations.map((donation, index) => (
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            donation={donation.donationName}
            donor={donation.donor}
            quantity={donation.quantity}
            date={donation.date}
            startTime={donation.startTime}
            endTime={donation.endTime}
            address={donation.address}
            city={donation.city}
            state={donation.state}
            zip={donation.zip}
            description={donation.description}
            position={{lat: donation.lat, lng: donation.lng}}
          />

        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4><u>{this.state.selectedPlace.donation}</u></h4>
            <p>
              <strong>Who:</strong> {this.state.selectedPlace.donor}
            </p>
            <p>
              <strong>What:</strong> {this.state.selectedPlace.donation} X {this.state.selectedPlace.quantity}
            </p>
            <p>
            <strong>When:</strong> {this.state.selectedPlace.date} at {this.state.selectedPlace.startTime} until {this.state.selectedPlace.endTime}
            </p>
            <p>
            <strong>Location:</strong> {this.state.selectedPlace.address} {this.state.selectedPlace.city} {this.state.selectedPlace.state}, {this.state.selectedPlace.zip}
            </p>
            <p>
            <strong>Description:</strong> {this.state.selectedPlace.description}
            </p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({

})(MapContainer);