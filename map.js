/*
// get the new coordinates every 2 seconds (or whatever)
// Can make it look like the car is moving: http://jsfiddle.net/HYuRR/2/
// Need to tweak that obviously so it just updates the lat lng, we don't need
// to update marker object
// Use a time based animation approach here to see how many frames needed to animate
// to the next coordinate
setInterval(()=>{
    let lat = parseFloat(this.state.coords.lat) + 0.1;
    let lng = parseFloat(this.state.coords.lng) + 0.1;
    console.log('updating lat and lng to: ',lat,lng);
    this.setState({
        coords: {
            lat: lat,
            lng: lng
        }
    });
},2000);
*/

import React from 'react';
import GoogleMap from 'google-map-react';
import CarMarker from './marker';

import * as mapThemes from './mapColourThemes';

const Map = React.createClass({

    getDefaultProps() {
        return {
            center: { lat: 40, lng: 40 },
            zoom: 5,
            lat: 40.000,
            lng: 40.000
        };
    },

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps === 'undefined') {
            return;
        }
        this.setState({
            center: {
                lat: nextProps.center.lat,
                lng: nextProps.center.lng
            },
            zoom: nextProps.zoom,
            lat: nextProps.lat,
            lng: nextProps.lng
        });
    },

    getInitialState() {
        return {
            center: this.props.center,
            zoom: this.props.zoom,
            lat: this.props.lat,
            lng: this.props.lng
        };
    },

    createMapOptions(maps) {
        return {
            panControl: true,
            mapTypeControl: false,
            scrollwheel: true,
            styles: mapThemes[this.props.theme] || []
        };
    },

    render() {
        return (
            <GoogleMap
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                options={this.createMapOptions}>
                <CarMarker lat={this.state.lat} lng={this.state.lng} />
            </GoogleMap>
        );
    }
});

export default Map;
