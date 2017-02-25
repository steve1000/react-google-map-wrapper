import React from 'react';
import GoogleMap from 'google-map-react';
import CarMarker from './marker';

import * as mapThemes from './mapColourThemes';

const Map = React.createClass({

    getDefaultProps() {
        return {
            center: { lat: 40, lng: 40 },
            zoom: 8,
            lat: 40.000,
            lng: 40.000,
            map: null,
            maps: null
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

    componentDidMount() {
        // Sample data retrieval

        setInterval(() => {
            let lat = parseFloat(this.state.lat) + 0.1;
            let lng = parseFloat(this.state.lng) + 0.1;
            this.setState({
                lat: lat,
                lng: lng
            });
        }, 2000);
    },

    componentWillUpdate() {
        if (!this.state.map) {
            return;
        }
        if (!this.isMarkerInBounds()) {
            this.setState((prevState) => {
                return {
                    center: {
                        lat: prevState.lat,
                        lng: prevState.lng
                    }
                };
            });
        }
    },

    createMapOptions(maps) {
        return {
            panControl: true,
            mapTypeControl: false,
            scrollwheel: true,
            styles: mapThemes[this.props.theme] || []
        };
    },

    isMarkerInBounds() {
        let markerPosition = new this.state.maps.LatLng({
            lat: this.state.lat,
            lng: this.state.lng
        });
        return this.state.map.getBounds().contains(markerPosition);
    },

    googleMapsApiLoaded({map, maps}) {
        this.setState({ map, maps });
    },

    render() {
        return (
            <GoogleMap
                onGoogleApiLoaded={this.googleMapsApiLoaded}
                yesIWantToUseGoogleMapApiInternals={true}
                defaultCenter={this.props.center}
                center={this.state.center}
                defaultZoom={this.props.zoom}
                options={this.createMapOptions}>
                <CarMarker lat={this.state.lat} lng={this.state.lng} />
            </GoogleMap>
        );
    }
});

export default Map;
