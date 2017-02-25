import React from 'react';
const markerStyle = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: 40,
    height: 40,
    left: -40 / 2,
    top: -40 / 2,

    border: '5px solid #f44336',
    borderRadius: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
};

const Marker = React.createClass({
    render() {
        return (
            <div style={markerStyle}>
                A
            </div>
        );
    }
});

export default Marker;



