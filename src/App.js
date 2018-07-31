import React, { Component } from 'react';
import currentLocationImg from './assets/current-location.png';
import './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {lat: 0, lng: 0},
    }
  }

  render() {

    // Styles for the initial map
    const style = {
      width: '90%',
      height: '85%',
      draggable: true,
      position: 'static',
      hide: [
        {
          featureType: 'poi.attraction',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'poi.business',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'poi.government',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'poi.medical',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'poi.place_of_worship',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'poi.sports_complex',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        }
      ]
    }

    return (
      <div>
        <header>
          <button>Search</button>
          <h1>International Caribbeans</h1>
          <button>Add</button>
        </header>

        <Map
          google={this.props.google}
          style={style}
          styles={style['hide']} // hides all the standard junk that comes ontop of the map (most POIs)
          initialCenter={{
            lat: 40.730049,
            lng: -73.996454
          }} // sets the middle of the map to WSQ Park
          center={(this.state.currentLocation.lat>0) ? this.state.currentLocation : null}
          zoom={17}
          mapTypeId={'roadmap'}
          disableDefaultUI={true}
          zoomControl={true}
          rotateControl={true}
         >

         <Marker
           title={'Your Current Location'}
           name={'Current Location'}
           position={this.state.currentLocation}
           clickable={false}
           icon={{ url: currentLocationImg }}
          />

         </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyB2Pcult6u3fdqLMBRvHJRTWkJlO08s3vY',
})(App)