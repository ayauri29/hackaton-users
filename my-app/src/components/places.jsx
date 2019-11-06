import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { Belcenter } from '../components/belcenter';

export class MapContainer extends Component {
    render() {
        return (
            <div>
                <h2>Encuentranos en:</h2>
                <Belcenter></Belcenter>
                {/* <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>Hola</h1>
                        </div>
                    </InfoWindow>
                </Map> */}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBJBhUsmAHtksHmHyIRYdEhtEM-5B0O9w4")
})(MapContainer)